class Shape {
    constructor() {
    this.color = "";
    }
    setColor(colorVar) {
    this.color = colorVar;
    }
}
class Circle extends Shape {
    render() {
    return `<circle cx="175" cy="125" r="50" fill="${this.color}" />`;
    }
}
class Square extends Shape {
    render() {
    return `<rect x="70" y="35" width="175" height="175" fill="${this.color}" />`;
    }
}
class Triangle extends Shape {
    render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
module.exports = { Circle, Square, Triangle };