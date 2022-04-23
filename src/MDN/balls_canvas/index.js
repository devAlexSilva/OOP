const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

console.log(width)


const random = {
    number: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    rgb: () => {
        return `rgb(${this.number(0, 255)}, ${this.number(0, 255)}, ${this.number(0, 255)})`
    }
}


class Ball {
    constructor (x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.vely = velY;
        this.color = color;
        this.size = size;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        ctx.fill();
    }
}

const testDrawningBall = new Ball(100, 50, 5, 5, 'red', 25);

testDrawningBall.draw()