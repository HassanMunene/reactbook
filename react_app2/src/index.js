import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'

const firstBook = {
    title: 'First Lie Wins',
    author: 'Ashley Elston',
    img: 'https://images-na.ssl-images-amazon.com/images/I/810CZ-9akdL._AC_UL600_SR600,400_.jpg',
    alt: 'First Lie Wins'
}
const secondBook = {
    title: 'Fourth Wing',
    author: 'Rebecca Yarros',
    img: 'https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg',
    alt: 'Fourth Wing'
}
const thirdBook = {
    title: 'Iron Flame',
    author: 'Rebecca Yarros',
    img: 'https://images-na.ssl-images-amazon.com/images/I/917Bc9C1MlL._AC_UL600_SR600,400_.jpg',
    alt: 'Iron Flame'
}
const fourthBook = {
    title: 'The Bible in 52 Weeks',
    author: 'Dr. Kimberly D. Moore',
    img: 'https://images-na.ssl-images-amazon.com/images/I/913KWawg9gL._AC_UL600_SR600,400_.jpg',
    alt: 'The Bible in 52 Weeks'
}




const BookList = () => {
    return (
        <section className='booklist'>
            <Book img={firstBook.img} alt={firstBook.alt} title={firstBook.title} author={firstBook.author}/>
            <Book img={secondBook.img} alt={secondBook.alt} title={secondBook.title} author={secondBook.author}/>
            <Book img={thirdBook.img} alt={thirdBook.alt} title={thirdBook.title} author={thirdBook.author}/>
            <Book img={fourthBook.img} alt={fourthBook.alt} title={fourthBook.title} author={fourthBook.author}/>
        </section>
    )
}

const Book = (props) => {
    console.log(props)
    return (
        <article className='book'>
            <img src={props.img} alt={props.alt}/>
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
        </article>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />)

