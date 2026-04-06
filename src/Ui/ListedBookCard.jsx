import React from 'react';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { FaRegStar } from 'react-icons/fa';
import { MdFindInPage } from 'react-icons/md';
import { Link } from 'react-router';

const ListedBookCard = ({book}) => {
    return (
<>
    <Link to={`/bookDetails/${book.bookId}`} key={book.bookId} className="card bg-base-100 border border-gray-300  shadow-sm flex-1 space-y-5  ">
<div className='flex flex-col md:flex-row items-center w-full'>
<div>
      <figure className='p-6'>
     <div className=' flex justify-center rounded-xl  h-60 p-1 bg-gray-200 w-70 items-center'>
    <img className='w-40 h-50 bg-amber-300 rounded-xl '
      src={book.image}
      alt={book.bookName} />
     </div>
  </figure>
</div>
   <div className='px-5 space-y-3'>
    <h2 className="card-title font-bold text-xl">{book.bookName}  </h2>
    <p> By: {book.author} </p>
 <div className='flex flex-col md:flex-row items-center gap-10'>
    <span className='font-bold'>Tag</span>
      {book.tags.map((tag,index) => (
      <div key={index} className="badge text-green-500 bg-green-100 font-semibold "> {tag} </div> 
   ))}
   <p>Year of publishing: {book.yearOfPublishing} </p>
 </div>
    <div className='flex  gap-6'>
        <p className='flex items-center gap-2'> <AiOutlineUsergroupDelete />Publisher: {book.publisher} </p>
        <p className='flex items-center gap-2'> <MdFindInPage /> Page: {book.totalPages} </p>
     </div>
    <div className=' border-t border-dashed py-6 border-gray-400 flex justify-between items-center'>
     <p className='font-semibold'> {book.category} </p>
     <p className='flex items-center gap-2 font-semibold'> {book.rating} <FaRegStar></FaRegStar> </p>
    </div>
    <div className='space-x-5'> 
        <div className="badge  badge-info text-white">Category: {book.category} </div>
        <div className="badge text-white badge-warning">Rating: {book.rating} </div>
         <button className=' bg-green-500 rounded-full px-4 text-white'>View Details</button>
    </div>
   </div>
</div>
</Link> 
</>
    );
};

export default ListedBookCard;