function log(target) {
    return function(...args) {
      console.log("Constructor called");
      return new target(...args);
    };
}

function logWithParams(...params) {
    return function(target) {
      return function(...args) {
        console.table(params);
        return new target(...args);
      }
    }
}
  
//@log
@logWithParams('param1', 'param2')
class Book {
    constructor(name, ISBN) {
        this.name = name;
        this.ISBN = ISBN;
    }

    getBook() {
        return `[${this.name}][${this.ISBN}]`;
    }
}
  
let obj = new Book("HP", "1245-533552");
  //Constructor called
  //Params will be consoled as a table
  console.log(obj.getBook());
  //[HP][1245-533552]