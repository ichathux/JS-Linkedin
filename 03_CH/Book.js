class Book {
  constructor(
    name,
    auther,
    publisher,
    publishDate,
    pageCount,
    category,
    currentPage,
    isOpenPage
  ) {
    this.name = name;
    this.auther = auther;
    this.publisher = publisher;
    this.publishDate = publishDate;
    this.pageCount = pageCount;
    this.category = category;
    this.currentPage = currentPage;
    this.isOpenPage = isOpenPage;
  }
  openPage(status) {
    this.isOpenPage = status;
  }
  setCurrentPage(pageNumber) {
    this.currentPage = pageNumber;
  }
  getBookAge() {
    let now = new Date();
    let published = new Date(this.publishDate);
    let old = now - published;
    let daysOld = Math.floor(old / (1000 * 3600 * 24));
    return daysOld;
  }
}

export default Book;
