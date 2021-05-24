function log(classObj, fn) {
    return function() {
      console.log("Execution of " + fn.name);
      console.time("fn");
      let val = fn.call(classObj);
      console.timeEnd("fn");
      return val;
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
  let getBook = log(obj, obj.getBook);
  console.log(getBook());
  //[HP][1245-533552]