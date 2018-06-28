'use strict'

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