import React, { use } from 'react';
import BookCard from '../../Ui/BookCard';


const booksPromise = fetch('/booksData.json').then(res => res.json())

const AllBooks = () => {
    const books = use(booksPromise)
    
    return (
        <div className='my-12 w-full md:w-9/12 mx-auto'>
            <h2 className='font-bold text-3xl text-center'>books</h2>
 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2'>
       {books.map(book  => {
        return (
            <BookCard book={book} key={book.bookId} ></BookCard> 
        )
       })}
 </div>
        </div>
    );
};

export default AllBooks;