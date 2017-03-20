(function() {
    let A = (function() {

        function A(p1) {
            if (p1) {
                this.p1 = p1;
            }
        }

        A.prototype.p1 = 2;

        A.prototype.f1 = function() {
            return 7;
        };

        return A;
    })();

    let B = (function(_super) {

        function B() {
            _super.apply(this, arguments);
        }

        inherits(B, _super);

        B.prototype.p2 = "Hello";

        B.prototype.f2 = function(x) {
            return x * 2;
        };

        return B;
    })(A);

    let C = (function(_super) {

        function C() {
            _super.apply(this, arguments);
        }

        inherits(C, _super);

        C.prototype.p2 = "Bye";

        return C;
    })(B);

    let D = (function(_super) {

        function D() {
            _super.apply(this, arguments);
        }

        inherits(D, _super);

        D.prototype.p4 = 7 * D.prototype.p1;

        D.prototype.f2 = function(x) {
            return D.superClass_.f2.call(this, x) * 5;
        };

        D.prototype.f4 = function(x) {
            return this.f1(x) + this.f2(x);
        };

        return D;
    })(C);

    let a = new A(5);
    let b = new B();
    let c = new C();
    let d = new D();

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(d.f4(1));

}());
