function log(fn) {
    return function () {
        console.log("Execution of " + fn.name);
        console.time("fn");
        var val = fn();
        console.timeEnd("fn");
        return val;
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
var getBook = log(obj.getBook);
console.log(getBook());
//TypeError: Cannot read property 'name' of undefined
