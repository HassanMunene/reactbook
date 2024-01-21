import React from 'react';
import ReactDOM from 'react-dom/client';
import {booksArray} from './booksData';
import Book from './book';

import './index.css'


const BookList = () => {
    return (
        <section className='booklist'>
            {booksArray.map((book) => {
                return <Book {...book} key={book.id} />
            })}
        </section>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />)

