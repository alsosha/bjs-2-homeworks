class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.itemState = 100;
        this.type = null;
    }

    fix() {
        let newState = this.itemState * 1.5;
        this.state = newState;
    }

    set state(newState) {
        if (newState < 0) {
            this.itemState = 0;
        } else if (newState > 100) {
            this.itemState = 100;
        } else {
            this.itemState = newState;
        }
    }

    get state() {
        return this.itemState;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }    
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }    
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }    
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }    
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }    
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state <= 30) {
            return;
        }

        this.books.push(book);
    }

    findBookBy(type, value) {
        if(this.books.length === 0) {
            return null;
        }

        for(let book of this.books) {
            if(book[type] === value) {
                return book;
            }
        }

        return null;
    }

    giveBookByName(bookName) {
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i].name === bookName) {
                let searchBook = this.books.splice(i, 1);
                return searchBook[0];
            }
        }

        return null;
    }
}