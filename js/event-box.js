'use strict'

// We build the constructor of the game and we define his properties

function EventBox (ctx, x, y, width, height, target) {

    this.ctx = ctx;
    this.size = {
        width: width,
        height: height,
    }

    this.position = {
        x: x,
        y: y,
    }
    this.target = target;
}

// No methods here, just collisions