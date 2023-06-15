// setting Circle, Square & Triangle from ./shapes.js as variables
const { Circle, Square, Triangle } = require("./shapes.js");
//circle test
describe("Circle test", () => {
    test("test a blue circle", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="blue" />'
    );
});
});
//square test
describe("Square test", () => {
    test("test a green square", () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="green" />'
    );
});
});
// triangle test
describe("Triangle test", () => {
    test("test a black triangle", () => {
    const shape = new Triangle();
    shape.setColor("black");
    expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="black" />'
    );
});
});