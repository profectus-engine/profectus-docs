const fs = require("fs");
const path = require("path");

function walk(dir, dest) {
    fs.readdir(dir, (err, list) => {
        list.forEach(file => {
            const resolvedFile = path.resolve(dir, file);
            fs.stat(resolvedFile, (err, stat) => {
                if (stat.isDirectory()) {
                    walk(resolvedFile, path.resolve(dest, file));
                } else {
                    const stream = fs.createReadStream(resolvedFile);
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
                            fs.copyFileSync(resolvedFile, path.resolve(dest, file));
                        }
                    });
                }
            });
        });
    });
}
walk("./components", "./docs/api");
