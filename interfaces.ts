interface Calculator {
    add: (x: number, y: number) => number;
    subtract: (x: number, y: number) => number;
    multiply: (x: number, y: number) => number;
    divide: (x: number, y: number) => number;
  }
  
  class BasicCalculator implements Calculator {
    add(x: number, y: number): number {
      return x + y;
    }
  
    subtract(x: number, y: number): number {
      return x - y;
    }
  
    multiply(x: number, y: number): number {
      return x * y;
    }
  
    divide(x: number, y: number): number {
      if (y !== 0) {
        return x / y;
      } else {
        throw new Error("Деление на 0 нельзя");
      }
    }
  }
  
  function calculate(calc: Calculator, operation: string, x: number, y: number): number | undefined {
    if (operation === 'add') {
      return calc.add(x, y);
    } else if (operation === 'subtract') {
      return calc.subtract(x, y);
    } else if (operation === 'multiply') {
      return calc.multiply(x, y);
    } else if (operation === 'divide') {
      return calc.divide(x, y);
    } else {
      console.error('Непонятная операция');
      return undefined;
    }
  }






  interface Book {
    id: number;
    title: string;
    authorId: number;
    publicationYear: number;
  }
  
  interface Author {
    id: number;
    name: string;
    birthYear: number;
  }
  
  
  interface BookService {
    getBookById(id: number): Book | undefined;
    getBooksByAuthorId(authorId: number): Book[];
    getAuthorById(id: number): Author | undefined;
    books : Book[];
    authors : Author[];
  }
  
  
  const bookService: BookService = {
    books: [
      { id: 1, title: "Книга 1", authorId: 1, publicationYear: 2000 },
      { id: 2, title: "Книга 2", authorId: 2, publicationYear: 2005 },
      { id: 3, title: "Книга 3", authorId: 1, publicationYear: 2010 },
    ],
    authors: [
      { id: 1, name: "Автор 1", birthYear: 1970 },
      { id: 2, name: "Автор 2", birthYear: 1985 },
    ],
  
    getBookById: function (id: number): Book | undefined {
      return this.books.find((book) => book.id === id);
    },
  
    getBooksByAuthorId: function (authorId: number): Book[] {
      return this.books.filter((book) => book.authorId === authorId);
    },
  
    getAuthorById: function (id: number): Author | undefined {
      return this.authors.find((author) => author.id === id);
    },
  };

  