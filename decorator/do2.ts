function log(target) {
    return function(...args) {
      console.log("Constructor called");
      return new target(...args);
    };
  }
  
  @log
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
  //Constructor Called
  console.log(obj.getBook());
  //HP][1245-533552]