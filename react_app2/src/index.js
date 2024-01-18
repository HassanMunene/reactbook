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
        </article>
    )
}
const Image = () => <h2>This is the image placeholder</h2>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />)

