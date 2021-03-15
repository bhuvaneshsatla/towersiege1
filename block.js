class Block {
    constructor(x, y, width, height) {

        var options = {
            'isStatic':false,
            'restitution':0.5, 
            'friction':1.0,
            'density':0.1,
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);

    }

    display() {

        push();
        translate(this.body.position.x, this.body.position.y);
        fill(rgb(0, 78, 78));
        stroke(0, 0, 128);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();

    }
}