import "./App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SellBookSidebar from "./SellBookSidebar";

function SellBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publisher: "",
    publicationYear: "",
    translator: "",
    isbn: "",
    condition: "",
    price: "",
    description: "",
    coverImage: null,
    tags: [],
  });

  const [tags, setTags] = useState([
    "LitHum",
    "CC",
    "First Year Writing",
    "Core",
    "STEM",
    "Humanities",
    "Textbook",
    "Novel",
    "Play",
    "Paperback",
    "Hard Cover",
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      coverImage: e.target.files[0],
    }));
  };

  const handleTagClick = (tag) => {
    setFormData((prevData) => ({
      ...prevData,
      tags: prevData.tags.includes(tag)
        ? prevData.tags.filter((t) => t !== tag)
        : [...prevData.tags, tag],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // Perform API call or further logic here
  };

  return (
    <div className="sell-book-page">
      <div className="page-layout">
        <SellBookSidebar />
        <div className="content-area">
          <nav aria-label="breadcrumb">
            <ol className="crumb-list">
              <li>
                <Link to="/" className="crumb">
                  Home
                </Link>
              </li>
              <li className="crumb-separator">&gt;</li>
              <li className="current-crumb">Sell a Book</li>
            </ol>
          </nav>
          <h2 className="page-title">Sell a Book</h2>
          <div className="form-container">
            <div className="form-section">
              <label>
                Title <span className="required-asterisk">*</span>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Publisher
                <input
                  type="text"
                  name="publisher"
                  value={formData.publisher}
                  onChange={handleChange}
                />
              </label>
              <label>
                Translator(s)
                <input
                  type="text"
                  name="translator"
                  value={formData.translator}
                  onChange={handleChange}
                />
              </label>
              <label>
                ISBN <span className="required-asterisk">*</span>
                <input
                  type="text"
                  name="isbn"
                  value={formData.isbn}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Condition <span className="required-asterisk">*</span>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  required
                >
                  <option>New (no annotations)</option>
                  <option>Lightly used (some annotations)</option>
                  <option>Used</option>
                </select>
              </label>
              <div>
                <label>
                  Tags <span className="required-asterisk">*</span>
                </label>
                <span className="input-note">Select all that apply</span>
                {tags.map((tag) => (
                  <button
                    type="button"
                    key={tag}
                    className={
                      formData.tags.includes(tag) ? "tag-selected" : "tag"
                    }
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </button>
                ))}
                <button className="add-tag">Add Tag</button>
              </div>
            </div>
            <div className="form-section">
              <label>
                Author <span className="required-asterisk">*</span>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Publication Year
                <input
                  type="number"
                  name="publicationYear"
                  value={formData.publicationYear}
                  onChange={handleChange}
                />
              </label>
              <label>
                Edition
                <input
                  type="text"
                  name="edition"
                  value={formData.edition}
                  onChange={handleChange}
                />
              </label>
              <label>
                Price <span className="required-asterisk">*</span>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
                <span className="input-note">
                  Must be at minimum 15% discounted from retail value
                </span>
              </label>
              <label>
                Description
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </label>
              <label>
                Cover Image <span className="required-asterisk">*</span>
                <input type="file" onChange={handleImageChange} required />
              </label>
            </div>
          </div>
          <div className="form-actions">
            <button type="button" className="cancel-button">
              Cancel
            </button>
            <button type="submit" className="save-button">
              Save Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellBook;
