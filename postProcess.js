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

walk("./components", (dir, file, resolve) => {
    const relPath = path.relative("./components", dir);
    let dest = path.resolve("./docs/api", relPath);
    if (relPath.includes("features")) {
        dest = path.resolve("./docs/api/modules", relPath);
    }
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
}).then(() => {
    const frontmatter = Buffer.from("---\neditLink: false\n---\n");
    walk("./docs/api", function addFrontmatter(dir, file, resolve) {
        if (path.extname(file) !== ".md") return;
        const filePath = path.resolve(dir, file);
        const data = fs.readFileSync(filePath).toString();
        const fd = fs.openSync(filePath, "w+");
        fs.writeSync(fd, frontmatter);
        if (!path.relative("./docs/api", dir).includes("components") && !path.basename(file).includes("Component")) {
            const files = fs.readdirSync(dir).filter(p => p.match(/.*Component.md/));
            if (files.length > 0) {
                const firstSectionIndex = data.indexOf("##");
                fs.writeSync(fd, data.slice(0, firstSectionIndex));
                const componentsList = `## Components\n\n${files.map(f => `- [${f.slice(0, -12)}](./${f})`).join("\n")}\n\n`;
                fs.writeSync(fd, componentsList);
                fs.writeSync(fd, data.slice(firstSectionIndex));
            } else {
                fs.writeSync(fd, data);
            }
        } else {
            fs.writeSync(fd, data);
        }
        fs.closeSync(fd);
        resolve();
    });
});
