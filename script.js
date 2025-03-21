
class Rectangle{
    constructor(width, height){
        this._width = width;
        this._height= height;
    }
    get width(){
        return this._width;
    }
    set width(newWidth){
        if(width > 0){
            this._width = newWidth
        } else{
            return 0;
        }
    }

    get height(){
        return this._height;
    }

    set height(newHeight){
        if(height > 0){
            this._height = newHeight
        } else{
            return 0;
        }
    }

    getArea(){
        return this._width * this._height;
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side, side)
        this._side = side
    }

    get side(){
        this._side;
    }
    
    set side(newSide){
        if(newSide>0){
            this._side = newSide;
            this._width = newSide;
            this._height = newSide;
        } else {
            console.log('side length cannot be 0')
        }
    }

    getPerimeter(){
        return 4 * this._side
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
