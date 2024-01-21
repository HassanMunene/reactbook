import React from 'react';
import ReactDOM from 'react-dom/client';
import {booksArray} from './booksData';
import Book from './book';
import Header from './header';

import './index.css'


const BookList = () => {
    return (
        <>
        <Header />
        <section className='booklist'>
            {booksArray.map((book, index) => {
                return <Book {...book} key={book.id} index={index + 1} />
            })}
        </section>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />)

