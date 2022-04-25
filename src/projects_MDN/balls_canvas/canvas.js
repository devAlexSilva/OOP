const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;


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

(function loop() {
    ctx.fillStyle = 'rgba(10, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height)

    balls.forEach(ball => {
        ball.draw();
        ball.update();
    });

    requestAnimationFrame(loop)
})()
