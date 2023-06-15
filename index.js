const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

function inquire() {
    inquirer.prompt([
        {
        type: "input",
        message: "Which characters, up to 3, would you like in your logo?",
        name: "text",
        },
        {
        type: "input",
        message: "Choose text color(either color name or hex value)",
        name: "textColor",
        },
        {
        type: "list",
        message: "Which shape would you like the logo to be?",
        choices: ["Circle", "Square", "Triangle"],
        name: "shape",
        },
        {
        type: "input",
        message:"What color should the background shape be?(either color name or hex value)",
        name: "shapeBackgroundColor",
        },
    ])
        .then((answers) => {
        if (answers.text.length > 3) {
        console.log("Must be 3 or less characters");
        inquire();
        } else {
        makeFile("logo.svg", answers);
        }
    });
}
inquire();
