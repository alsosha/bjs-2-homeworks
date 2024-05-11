function parseCount(number) {
    let parsedNum = parseFloat(number);

    if (isNaN(parsedNum)) {
        throw new Error ('Невалидное значение');
    }

    return parsedNum;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        
        this.a = a;
        this.b = b;
        this.c = c;

        let allSides = [this.a, this.b, this.c];
        let maxSide = Math.max(...allSides);

        if (maxSide >= ((this.a + this.b + this.c) - maxSide)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let halfPer = this.perimeter / 2;
        let res = Number((Math.sqrt(halfPer*(halfPer - this.a)*(halfPer - this.b)*(halfPer - this.c))).toFixed(3));
        return res;
    }
}

function getTriangle (a, b, c) {
    try {
        let triangle = new Triangle(a, b, c);
        return triangle;
    } catch (error) {
        let notTriangle = {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            get area() {
                return 'Ошибка! Треугольник не существует';
            }
        }

        return notTriangle;
    }
}