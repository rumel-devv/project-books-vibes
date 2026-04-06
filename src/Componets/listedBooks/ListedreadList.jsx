import React, { useContext, useEffect, useState } from 'react';
import { BooksContext } from '../../Context/BookContext';
import BookCard from '../../Ui/BookCard';
import ListedBookCard from '../../Ui/ListedBookCard';
import EmptyState from './EmptyStat';

const ListedreadList = ({shortingType}) => {

        const {storedBooks} = useContext(BooksContext)
const [filterdReadList, setfilterdReadList] = useState(storedBooks);

useEffect(() => {
  let sortedData = [...storedBooks];
  if (shortingType === "pages") {
    sortedData.sort((a, b) => a.totalPages - b.totalPages);
  } else if (shortingType === "rating") {
    sortedData.sort((a, b) => a.rating - b.rating);
  }
  setfilterdReadList(sortedData);
}, [shortingType, storedBooks]);

        if(storedBooks.length === 0){
            return (
              <EmptyState></EmptyState>

            )
        }

    return (
        <div className='space-y-4 py-6'>
           {filterdReadList.map((book,ind) => (
            <ListedBookCard key={ind} book={book} ></ListedBookCard>
           ))}
        </div>
    );
};

export default ListedreadList;