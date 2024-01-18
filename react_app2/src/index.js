import React from 'react';
import ReactDOM from 'react-dom/client';

const BookList = () => {
    return (
        <section>
            <Book />
        </section>
    )
}

const Book = () => {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    )
}
const Image = () => <h2>This is the image placeholder</h2>
const Title = () => <h2>Book title</h2>
const Author = () => {
    return <h4>Author</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />)

