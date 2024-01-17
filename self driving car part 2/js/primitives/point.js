class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    draw(ctx,size =18,color ="black"){
        const rad = size/2;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, rad, 0, Math.PI*2);//fill 360 but this function uses radians so *2
        ctx.fill();
    }
}