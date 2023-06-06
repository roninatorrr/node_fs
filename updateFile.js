const { appendFile } = require("fs");

let appendContents = " I'm Queen of the World!!!";

appendFile("./HelloWorld.txt", appendContents, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Successfully updated file.");
    }
});
