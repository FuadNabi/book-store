import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="book-container">
      <div className="book-info">
        <h4 className="book-category">{category}</h4>
        <h2 className="book-name">{title}</h2>
        <p className="book-author">{author}</p>
        <div className="book-buttons-container">
          <button type="button" className="book-button">Comments</button>
          <button type="button" className="book-button" onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button" className="book-button">Edit</button>
        </div>
      </div>
      <div className="progress-container">
        <div className="circular-progress-bar">
          <div className="circular-progress" />
        </div>
        <div className="completed">
          <p className="complete-precent">75%</p>
          <p className="completed">Completed</p>
        </div>
        <div className="progress-devider" />
        <div className="chapter-container">
          <div className="current-chapter">Current Chapter</div>
          <div className="chapter">Chapter 14</div>
          <button type="button" className="update-progress-button">Update Progress</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
