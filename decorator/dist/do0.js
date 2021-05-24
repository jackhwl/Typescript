function logParam() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    return function (classObj, fn) {
        return function () {
            console.table(params);
            return fn.call(classObj);
        };
    };
}
var Book = /** @class */ (function () {
    function Book(name, ISBN) {
        this.name = name;
        this.ISBN = ISBN;
    }
    Book.prototype.getBook = function () {
        return "[" + this.name + "][" + this.ISBN + "]";
    };
    return Book;
}());
var obj = new Book("HP", "1245-533552");
var getBook = logParam('param1', 'param2')(obj, obj.getBook);
console.log(getBook());
//TypeError: Cannot read property 'name' of undefined
