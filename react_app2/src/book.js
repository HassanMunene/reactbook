const Book = (props) => {
    //console.log(props)
    const { img, alt, title, author, index } = props;
    return (
        <article className='book'>
            <div className="book_number">#{index}</div>
            <img src={img} alt={alt}/>
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    )
}

export default Book;