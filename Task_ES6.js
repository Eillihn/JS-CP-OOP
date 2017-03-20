class A {

    constructor(p1) {
        if (p1) {
            this.p1 = p1;
        }
    }

    f1() {
        return 7;
    }
};
A.prototype.p1 = 2;

class B extends A {

    f2(x) {
        return x * 2;
    }
};
B.prototype.p2 = "Hello";

class C extends B {};
C.prototype.p2 = "Bye";

class D extends C {

    f2(x) {
        return super.f2(x) * 5;
    }

    f4(x) {
        return this.f1(x) + this.f2(x);
    }
};
D.prototype.p4 = 7 * D.prototype.p1;

let a = new A(5);
let b = new B();
let c = new C();
let d = new D();

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(d.f4(1));
