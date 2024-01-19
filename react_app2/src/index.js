import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'

const BookList = () => {
    return (
        <section className='booklist'>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}

const Book = () => {
    const title = 'First Lie Wins';
    const author = 'Ashley Elston'
    return (
        <article className='book'>
            <img src='https://images-na.ssl-images-amazon.com/images/I/810CZ-9akdL._AC_UL600_SR600,400_.jpg' alt='First lie wins'/>
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />)

