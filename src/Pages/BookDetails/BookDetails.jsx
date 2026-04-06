import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';

// const booksPromise = fetch('/booksData.json').then(res => res.json())

const BookDetails = () => {
    // const books = use(booksPromise)
    // console.log(books);
     const books = useLoaderData()
    const {id} = useParams()
const expectedBook = books.find(book => book.bookId === Number(id))
 
const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = expectedBook

    return (
 <div className="w-full md:w-10/12 mx-auto flex flex-col md:flex-row gap-10 py-8">
 <div className='bg-base-200 p-8 md:w-6/12 flex justify-center rounded-2xl'>
     <figure>
    <img
    className='h-100 rounded-2xl'
      src={image}
      alt="Album" />
  </figure>
 </div>
  <div className="w-full md:w-1/2">
    <h2 className="card-title text-2xl">{bookName}</h2>
    <p className='my-3'>By: {author}</p>
    <p className="border border-r-0 border-l-0 border-dashed py-2 border-gray-400"> {category} </p>
     <h4 className='my-4'><span className='font-bold'>Review:</span> {review} </h4>
      <div className='flex items-center gap-4'>
       <p className='font-bold'>Tag</p> 
      {tags.map((tag,index) => (
      <div key={index} className="badge text-green-500 bg-green-100 font-semibold "> {tag} </div> 
   ))}
    </div>

    <div className="border-t  border-dashed py-2 border-gray-400 my-10 space-y-5">
         <p className='flex gap-6'>Number of Pages: <span className='font-bold'>{totalPages}</span> </p>
         <p className='flex gap-6'>Publisher: <span className='font-bold'>{publisher}</span> </p>
         <p className='flex gap-6'>year of publishing:<span className='font-bold'>{yearOfPublishing}</span> </p>
         <p className='flex gap-3 items-center'>Rating: <span className='font-bold'>{rating} </span><FaRegStar></FaRegStar> </p>
    </div>
      <div className='space-x-3'>
         <button className='btn bg-transparent py-1 text-black'>Sign in</button>
         <button className='btn bg-sky-600 py-1 text-white'>Sign Up</button>
      </div>
  </div>
</div>
    );
};

export default BookDetails;