import "./App.css";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

function BookCard() {
    return (
        <div className="book-container">
            <img
                src={require("./images/cover1.png")}
                alt="Plato's Republic"
                className="cover-image"
            />
            <div className="book-content">
                <p><strong>Title:</strong> The Republic</p>
                <p><strong>Author:</strong> Plato</p>
                <p><strong>ISBN:</strong> 9781503379985</p>
                <p><strong>Selling Price:</strong> $7.00</p>
                <p><strong>Original Price:</strong> $16.96</p>
                <p><strong>Condition:</strong> Lightly Used</p>
                <p><strong>Description:</strong> I read this book for the fall semester of my CC class.</p>
                <p><strong>TAG:</strong> WILL INCLUDE TAGS LATER</p>
            </div>
            <div className="react-icon-bookcard"><FaRegTrashAlt size={21}/>&nbsp;&nbsp;&nbsp;<MdOutlineEdit size={25}/></div>
        </div>
    );
}

export default BookCard