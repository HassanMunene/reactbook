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
    return (
        <article className='book'>
            <Image />
            <Title />
            <Author />
        </article>
    )
}
const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/810CZ-9akdL._AC_UL600_SR600,400_.jpg' alt='First lie wins'/>
const Title = () => <h2>First Lie Wins</h2>
const Author = () => {
    return <h4>Ashley Elston</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />)

