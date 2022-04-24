const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

console.log(width)


const random = {
    number: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    rgb: function () {
        return `rgb(${this.number(0, 255)}, ${this.number(0, 255)}, ${this.number(0, 255)})`
    }
}

class Ball {
    constructor(x, y, velX, velY, color, size) {
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
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }

        if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }

        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }

        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }

        this.x += this.velX;
        this.y += this.velY;
    }
}


const balls = Array.from({ length: 15 }, (ball) => {
    let size = random.number(10, 20);
    let velocity = random.number(-5, 5);

    return ball = new Ball(
        random.number(size, width - size),
        random.number(size, height - size),
        velocity,
        velocity,
        random.rgb(),
        size
    );
});



function loop() {
    ctx.fillStyle = 'rgba(220, 100, 220, 0.25)';
    ctx.fillRect(0, 0, width, height)

    balls.forEach(ball => {
        ball.draw();
        ball.update();
    })

    requestAnimationFrame(loop);
}

loop()
