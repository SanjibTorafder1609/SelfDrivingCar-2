class Graph{
    constructor(points =[], segments =[]){
        this.points = points;
        this.segments = segments;
    }

    draw(ctx){
        for(const seg of this.segments){
            seg.draw(ctx);
        }

        for(const points of this.points){
            points.draw(ctx);
        }

    }
}