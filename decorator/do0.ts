function logParam(...params) {
    return function(classObj, fn) {
        return function() {
            console.table(params);
            return fn.call(classObj); 
        }
    }
}

  
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
  let getBook = logParam('param1', 'param2')(obj, obj.getBook);
  console.log(getBook());
  //TypeError: Cannot read property 'name' of undefined