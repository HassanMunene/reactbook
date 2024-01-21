import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'

const booksArray = [
    {
        title: 'First Lie Wins',
        author: 'Ashley Elston',
        img: 'https://images-na.ssl-images-amazon.com/images/I/810CZ-9akdL._AC_UL600_SR600,400_.jpg',
        alt: 'First Lie Wins',
        id: 1
    },
    {
        title: 'Fourth Wing',
        author: 'Rebecca Yarros',
        img: 'https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg',
        alt: 'Fourth Wing',
        id: 2
    },
    {
        title: 'Iron Flame',
        author: 'Rebecca Yarros',
        img: 'https://images-na.ssl-images-amazon.com/images/I/917Bc9C1MlL._AC_UL600_SR600,400_.jpg',
        alt: 'Iron Flame',
        id: 3
    },
    {
        title: 'The Bible in 52 Weeks',
        author: 'Dr. Kimberly D. Moore',
        img: 'https://images-na.ssl-images-amazon.com/images/I/913KWawg9gL._AC_UL600_SR600,400_.jpg',
        alt: 'The Bible in 52 Weeks',
        id: 4
    },
]

const BookList = () => {
    const var1 = 'Hello there'
    const func = () => console.log(var1);
    return (
        <section className='booklist'>
            {booksArray.map((book) => {
                return <Book {...book} key={book.id} func={func}/>
            })}
        </section>
    )
}

const Book = (props) => {
    //console.log(props)
    const { img, alt, title, author, func } = props;
    return (
        <article className='book'>
            <img src={img} alt={alt}/>
            <h2>{title}</h2>
            <button onClick={func}>click me</button>
            <h4>{author}</h4>
        </article>
    )
}
// const EventExamples = () => {
//     const handleFormInput = () => {
//         console.log('Handle form input');
//     }
//     const handleButtonClick = () => {
//         alert('handle button click.');
//     }
//     return (
//         <section>
//             <form>
//                 <h2>Typical form</h2>
//                 <input 
//                     type='text' 
//                     name='example' 
//                     onChange={handleFormInput} 
//                     style={{ margin: '1rem 0' }} 
//                 />
//             </form>
//             <button onClick={handleButtonClick}>Click me</button>
//         </section>
//     )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />)

