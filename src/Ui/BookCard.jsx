import React from 'react';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
         <Link to={`/bookDetails/${book.bookId}`} key={book.bookId} className="card bg-base-100 border border-gray-300  shadow-sm flex-1 space-y-5 ">
  <figure className='p-6'>
     <div className=' flex justify-center rounded-xl  h-60 p-1 bg-gray-200 w-70 items-center'>
    <img className='w-40 h-50 bg-amber-300 rounded-xl '
      src={book.image}
      alt={book.bookName} />
     </div>
  </figure>
 
   <div className='px-5 space-y-3'>
 <div className='flex items-center gap-10'>
      {book.tags.map((tag,index) => (
      <div key={index} className="badge text-green-500 bg-green-100 font-semibold "> {tag} </div> 
   ))}
 </div>
    <h2 className="card-title font-bold text-xl">{book.bookName}  </h2>
    <p> By: {book.author} </p>

    <div className=' border-t border-dashed py-6 border-gray-400 flex justify-between items-center'>
     <p> {book.category} </p>
     <p> {book.rating} </p>
    </div>
   </div>
</Link>   
    );
};

export default BookCard;