import axios from "axios";

const api = {
  // GET searched books
  getBooks: (query) => {
    return axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&printType=books`
      )
      .then((results) => {
        return results.data.items.map((book) => {
          return {
            //one key per database header
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks?.smallThumbnail,
            link: book.volumeInfo.infoLink,
          };
        });
      });
  },

  getSavedBooks: () => {
    return axios.get("/api/books").then((results) => {
      console.log("results: ", results);
      return results.data;
    });
  },

  deleteSavedBook: (bookID) => {
    return axios.delete(`/api/books/${bookID}`);
  },

};

export default api;
