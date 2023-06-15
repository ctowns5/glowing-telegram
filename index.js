const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

function makeFile(fileName, answers) {
    let svgParts = "";
    svgParts =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgParts += `${answers.shape}`;
    let shapeChoice;
    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        svgParts += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === "Square") {
        shapeChoice = new Square();
        svgParts += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    } else {
        shapeChoice = new Circle();
        svgParts += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    }
    svgParts += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgParts += "</svg>";

    fs.writeFile(fileName, svgParts, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
    }

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
