const random = {
    number: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    rgb: function () {
        return `rgb(${this.number(0, 255)}, ${this.number(0, 255)}, ${this.number(0, 255)})`
    }
}