import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/books';
import '../style/AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Action');

  const addBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addNewBook(newBook));
    setTitle('');
    setAuthor('');
  };
  return (
    <section className="form-section">
      <h2 className="form-title">Add New Book</h2>
      <form onSubmit={addBookToStore}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <select
          name="categories"
          id="category"
          onChange={
            (e) => setCategory(e.target.value)
          }
        >
          <option value="action">Action</option>
          <option value="science fiction">Science Fiction</option>
          <option value="economy">Economy</option>
          <option value="technology">Technology</option>
          <option value="games">Games</option>
        </select>
        <button className="add-btn" type="submit">Add Book</button>
      </form>
    </section>
  );
};

export default AddBook;
