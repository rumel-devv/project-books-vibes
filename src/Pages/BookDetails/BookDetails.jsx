import React, { use } from 'react';
import { useLoaderData, useParams } from 'react-router';

// const booksPromise = fetch('/booksData.json').then(res => res.json())

const BookDetails = () => {
    // const books = use(booksPromise)
    // console.log(books);
     const books = useLoaderData()
    console.log(books);
 const {id} = useParams()
    console.log(id);
 const expectedBook = books.find(book => book.id == id )
 console.log('expectedBook',expectedBook);
    return (
        <div>
            <h2>Book Details</h2>
        </div>
    );
};

export default BookDetails;