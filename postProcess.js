const fs = require("fs");
const path = require("path");

function walk(dir, cb) {
    const list = fs.readdirSync(dir);
    return Promise.all(list.map(file => {
        const resolvedFile = path.resolve(dir, file);
        const stat = fs.statSync(resolvedFile);
        if (stat.isDirectory()) {
            return walk(resolvedFile, cb);
        } else {
            return new Promise((resolve) => cb(dir, resolvedFile, resolve));
        }
    }));
}

function sort(a, b) {
    if (a.items && !b.items) {
        return -1;
    }
    if (!a.items && b.items) {
        return 1;
    }
    return a.text.localeCompare(b.text);
}

(async () => {
    // Update sidebar file
    const sidebarText = fs.readFileSync("./docs/api/typedoc-sidebar.json")
        .toString()
        .replaceAll(/"[^"]*\/docs\/api\//, '"/api/')
        .replaceAll('{"text":"Functions","collapsed":true', '{"text":"Functions","collapsed":false')
        .replaceAll('{"text":"Interfaces","collapsed":true', '{"text":"Interfaces","collapsed":false')
        .replaceAll('{"text":"Type Aliases","collapsed":true', '{"text":"Type Aliases","collapsed":false')
        .replaceAll('{"text":"Variables","collapsed":true', '{"text":"Variables","collapsed":false')
        .replaceAll('{"text":"Classes","collapsed":true', '{"text":"Classes","collapsed":false');
    const sidebar = JSON.parse(sidebarText);
    fs.unlinkSync("./docs/api/typedoc-sidebar.json");

    // Copy components over
    await walk("./components", (dir, file, resolve) => {
        let relPath = path.relative("./components", dir);
        if (!relPath.includes("components") && relPath != "") {
            relPath += "/components";
        }
        let dest = path.resolve("./docs/api", relPath);
        let currentSidebar = sidebar;
        relPath.replaceAll("\\", "/").split("/").forEach(folder => {
            if (!folder) return;
            let nextSidebar = currentSidebar.find(f => f.text === folder);
            if (!nextSidebar) {
                nextSidebar = { text: folder, collapsed: true, items: [] };
                currentSidebar.push(nextSidebar);
                currentSidebar.sort(sort);
            }
            currentSidebar = nextSidebar.items;
        });
        currentSidebar.push({ text: path.basename(file).replace(".md", ""), link: `/api/${relPath.replace("\\", "/")}/${path.basename(file)}` });
        currentSidebar.sort(sort);
        const filePath = path.resolve(dir, file);
        const stream = fs.createReadStream(filePath);
        let lineCount = 0;
        stream.on("data", buffer => {
            let idx = -1;
            lineCount--; // Because the loop will run once for idx=-1
            do {
                idx = buffer.indexOf(10, idx + 1);
                lineCount++;
            } while (idx !== -1);
            if (lineCount > 4) {
                stream.destroy();
                fs.mkdirSync(dest, { recursive: true });
                fs.copyFileSync(filePath, path.resolve(dest, path.basename(file)));
            }
            resolve();
        });
    });

    // Write updated sidebar
    fs.writeFileSync("./typedoc-sidebar.json", JSON.stringify(sidebar));

    // Add frontmatter to every file
    const frontmatter = Buffer.from("---\neditLink: false\n---\n");
    await walk("./docs/api", function addFrontmatter(dir, file, resolve) {
        if (path.extname(file) !== ".md") return;
        const relPath = path.relative("./docs/api", dir);
        const filePath = path.resolve(dir, file);
        const data = fs.readFileSync(filePath).toString()
            .replaceAll("`Ref`", "[`Ref`](https://vuejs.org/guide/typescript/composition-api.html#typing-ref)")
            .replaceAll("`MaybeRef`", "[`MaybeRef`](https://vuejs.org/api/utility-types.html#mayberef)")
            .replaceAll("`MaybeRefOrGetter`", "[`MaybeRefOrGetter`](https://vuejs.org/api/utility-types.html#maybereforgetter)")
            .replaceAll("`CSSProperties`", "[`CSSProperties`](https://vuejs.org/api/utility-types.html#cssproperties)")
            .replaceAll("`ComputedRef`", "[`ComputedRef`](https://vuejs.org/guide/typescript/composition-api.html#typing-computed)")
            .replaceAll(/# Defined in\n\nprofectus(\/src\/[^:]+):(\d+)/gm, "# Defined in\n\n[profectus$1:$2](https://code.incremental.social/profectus/Profectus/src/branch/main$1#L$2)");
        const fd = fs.openSync(filePath, "w+");
        fs.writeSync(fd, frontmatter);
        if (dir.includes("components")) {
            fs.writeSync(fd, `[Profectus](${path.relative(dir, "./docs/api").replaceAll("\\", "/") + "/index.md"}) / ${relPath.replaceAll("\\", "/").replaceAll("/components", "")} / ${path.basename(file).replace(".md", "")}\n\n`)
        }
        fs.writeSync(fd, data);
        fs.closeSync(fd);
        resolve();
    });
})();
