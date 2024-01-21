const Book = (props) => {
    //console.log(props)
    const { img, alt, title, author } = props;
    return (
        <article className='book'>
            <img src={img} alt={alt}/>
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    )
}

export default Book;