const fs = require("fs");

fs.writeFile("file.txt", "TE CREO OTRA VEZ MADRE SANTA", () => {
    try {
        console.log("ETSITO");
    } catch (error) {
        console.log("DIAVLO", error);
    }
})