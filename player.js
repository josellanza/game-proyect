function Player (ctx) {
    this.ctx = ctx;
    this.size = {
        width: 100,
        height: 25,
    }

    this.position = {
        x: 20,
        y: canvas.height/2 -40,
    }
    this.speed = 5;
    this.lives = 3;
}

// We set the position, the size and the color of the player

Player.prototype.draw = function () {
    var self = this;
    self.ctx.fillStyle = "red";
    self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height)
}

// We set the movements of the player

Player.prototype.moveUp = function () {
    var self = this;
    self.position.y -= self.speed;
}

Player.prototype.moveDown = function () {
    var self = this;
    self.position.y += self.speed;
}

Player.prototype.moveLeft = function () {
    var self = this;
    self.position.x -= self.speed;
}

Player.prototype.moveRight = function () {
    var self = this;
    self.position.x += self.speed;
}
