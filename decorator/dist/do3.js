var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function log(target) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Constructor called");
        return new (target.bind.apply(target, __spreadArray([void 0], args)))();
    };
}
function logWithParams() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    return function (target) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.table(params);
            return new (target.bind.apply(target, __spreadArray([void 0], args)))();
        };
    };
}
//@log
var Book = /** @class */ (function () {
    function Book(name, ISBN) {
        this.name = name;
        this.ISBN = ISBN;
    }
    Book.prototype.getBook = function () {
        return "[" + this.name + "][" + this.ISBN + "]";
    };
    Book = __decorate([
        logWithParams('param1', 'param2')
    ], Book);
    return Book;
}());
var obj = new Book("HP", "1245-533552");
//Constructor called
//Params will be consoled as a table
console.log(obj.getBook());
//[HP][1245-533552]
