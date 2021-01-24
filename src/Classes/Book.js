import BookInfo from './BookInfo';

class Book {
  constructor() {
    this.info = new BookInfo();
    this.alternatives = [];
  }

  lookForIsbn = isbn => {
    let one = new BookInfo();
    one.name = 'cosos';
    one.author = 'no mames';
    one.edition = '2da';
    one.pages = '1234';
    one.publisher = 'YO MEROopopop';
    one.image = 'https://imagenesactual.com/wp-content/uploads/2020/01/acd7a36dfee686f2d16a8f960a168881.jpg';
    one.isbn = 'oipuuhkjkn';
    this.alternatives = [
     one
    ]; // alternatives returned by backend
    // info returned by back
    this.info.name = 'CACA';
    this.info.author = 'MAMON';
    this.info.edition = '1ERA';
    this.info.pages = '123';
    this.info.publisher = 'YO MERO';
    this.info.image = 'https://imagenesactual.com/wp-content/uploads/2020/01/acd7a36dfee686f2d16a8f960a168881.jpg';
    this.info.isbn = 'adc12';
  }  
}

export default new Book();