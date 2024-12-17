// FINAL VERSION OF USER PROFILE BOOK CARD

import "./App.css";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

function BookCard({ image, altText, title, author, isbn, sellingPrice, originalPrice, condition, description, tags }) {
    return (
        <div className="book-container">
            <img
                src={require(`${image}`)}
                alt={altText}
                className="cover-image"
            />
            <div className="book-content">
                <p><strong>Title:</strong> {title}</p>
                <p><strong>Author:</strong> {author}</p>
                <p><strong>ISBN:</strong> {isbn}</p>
                <p><strong>Selling Price:</strong> ${sellingPrice}</p>
                <p><strong>Original Price:</strong> ${originalPrice}</p>
                <p><strong>Condition:</strong> {condition}</p>
                <p><strong>Description:</strong> {description}</p>
                <p>{
                    tags.map((tag, idx) => (
                        <div className="tag-selected">{tag}</div>
                    ))
                }</p>
            </div>
            <div className="react-icon-bookcard"><FaRegTrashAlt size={21}/>&nbsp;&nbsp;&nbsp;&nbsp;<MdOutlineEdit size={25}/></div>
        </div>
    );
}

export default BookCard