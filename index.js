const fs = require("fs");
const path = require("path");

let fileNames = [ "createFile", "readFile", "updateFile", "deleteFile" ];
let fileExt = ".js";
let fileTemplate = `const fs = require("fs");

`;

fileNames.forEach((name) => {
    fs.writeFile(
        path.join(__dirname, `./${name}${fileExt}`),
        fileTemplate,
        (err) => {
            if (err) {
                console.error(err);
                console.log(`Failed to write to ${name}${fileExt} x`);
            } else {
                console.log(`Succeeded writing to ${name}${fileExt}`);
            }
        }
    );
});