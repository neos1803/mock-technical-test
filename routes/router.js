const {
  addBook,
  getBooks,
  getBookById,
  getBookByType,
  changeBookTitle,
  deleteBookById,
} = require("../controllers/bookController");

const router = require("express-promise-router")();

router.route("/books/").post(addBook);
router.route("/books/").get(getBooks);
router.route("/books/:id").get(getBookById);
router.route("/books/jenis/:jenis").get(getBookByType);
router.route("/books/:id").put(changeBookTitle);
router.route("/books/:id").delete(deleteBookById);

module.exports = router;
