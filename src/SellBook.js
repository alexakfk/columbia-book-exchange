import "./App.css";
function SellBook() {
  return (
    <div className="sell-book-page">
      <h2 className="page-title">Sell a Book</h2>
      <div className="form-container">
        <div className="form-section">
          <label>
            Title *
            <input
              type="text"
              name="title"
              //   value={formData.title}
              //   onChange={handleChange}
              required
            />
          </label>
          <label>
            Publisher
            <input
              type="text"
              name="publisher"
              //   value={formData.publisher}
              //   onChange={handleChange}
            />
          </label>
          <label>
            Translator(s)
            <input
              type="text"
              name="translator"
              //   value={formData.translator}
              //   onChange={handleChange}
            />
          </label>
          <label>
            ISBN *
            <input
              type="text"
              name="isbn"
              //   value={formData.isbn}
              //   onChange={handleChange}
              required
            />
          </label>
          <label>
            Condition *
            <select
              name="condition"
              //   value={formData.condition}
              //   onChange={handleChange}
              required
            >
              <option>New (no annotations)</option>
              <option>Lightly used (some annotations)</option>
              <option>Used</option>
            </select>
          </label>
        </div>
        <div className="form-section">
          <label>
            Author *
            <input
              type="text"
              name="author"
              //   value={formData.author}
              //   onChange={handleChange}
              required
            />
          </label>
          <label>
            Publication Year
            <input
              type="number"
              name="publicationYear"
              //   value={formData.publicationYear}
              //   onChange={handleChange}
            />
          </label>
          <label>
            Edition
            <input
              type="text"
              name="edition"
              //   value={formData.edition}
              //   onChange={handleChange}
            />
          </label>
          <label>
            Price *
            <input
              type="number"
              name="price"
              //   value={formData.price}
              //   onChange={handleChange}
              required
            />
          </label>
          <label>
            Description
            <textarea
              name="description"
              //   value={formData.description}
              //   onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Cover Image *
            <input
              type="file"
              // onChange={handleImageChange}
              required
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default SellBook;
