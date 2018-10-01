// Quadratic Equation

function quadraticEquation() {
    var d = document,
    a = Number(d.inputForm.a.value),
    b = Number(d.inputForm.b.value),
    c = Number(d.inputForm.c.value),
    x1, x2,
    D = (Math.pow(b,2)) - 4*a*c; // Сalculation of Discriminant

    // Check Discriminant
    if (D > 0) {
        x1 = (-b + Math.sqrt(D))/(2*a);
        x2 = (-b - Math.sqrt(D))/(2*a);
        return('x1 = '+ x1 + ', x2 = ' + x2);
    }
    else if (D === 0) {
        x1 = (-b)/(2*a);
        return('x1 = '+ x1);
    }
    else if (D < 0) {
        return('There is no solution, because Discriminant is 0');
    }
}