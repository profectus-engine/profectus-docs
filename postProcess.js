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

(async () => {
    // Replace overview file
    fs.copyFileSync("./overview.md", "./docs/api/overview.md");
    fs.unlinkSync("./docs/api/index.md");

    // Copy components over
    await walk("./components/components", (dir, file, resolve) => {
        const relPath = path.relative("./components/components", dir);
        let dest = path.resolve("./docs/api/components", relPath);
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

    // Write features' components to end of file
    await walk("./components/features", (dir, file, resolve) => {
        const relPath = path.relative("./components/features", dir);
        let dest = path.resolve("./docs/api/modules/features", relPath);

        if (relPath == "infoboxes") {
            dest = dest.slice(0, -2);
        } else if (relPath === "tabs") {
            dest += file.includes("TabComponent") ? "\\tab" : "\\tabFamily";
        }

        try {
            fs.accessSync(dest + ".md", fs.constants.R_OK | fs.constants.W_OK);
        } catch (err) {
            dest = dest.slice(0, -1);
            try {
                fs.accessSync(dest + ".md", fs.constants.R_OK | fs.constants.W_OK);
            } catch (err) {
                console.log("Couldn't find file at", dest + ".md");
                resolve();
                return;
            }
        }
        dest = dest + ".md";
        let data = fs.readFileSync(dest).toString();
        const elementData = fs.readFileSync(path.resolve(dir, file));
        const fd = fs.openSync(dest, "w+");
        const componentsSection = data.indexOf("## Components");
        if (componentsSection == -1) {
            data += `\n## Components\n`;
        }
        fs.writeSync(fd, data);
        fs.writeSync(fd, "\n" + elementData + "\n");
        fs.closeSync(fd);
        resolve();
    });

    // Add frontmatter to every file
    const frontmatter = Buffer.from("---\neditLink: false\n---\n");
    await walk("./docs/api", function addFrontmatter(dir, file, resolve) {
        if (path.extname(file) !== ".md") return;
        const filePath = path.resolve(dir, file);
        const data = fs.readFileSync(filePath).toString();
        const fd = fs.openSync(filePath, "w+");
        fs.writeSync(fd, frontmatter);
        fs.writeSync(fd, data);
        fs.closeSync(fd);
        resolve();
    });
})();
