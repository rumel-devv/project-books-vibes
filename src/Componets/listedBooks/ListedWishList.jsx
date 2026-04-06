import React, { useContext, useEffect, useState } from 'react';
import { BooksContext } from '../../Context/BookContext';
import ListedBookCard from '../../Ui/ListedBookCard';
import EmptyState from './EmptyStat';

const ListedWishList = ({shortingType}) => {

    const {wishList} = useContext(BooksContext)

      
    const [filterdWishList, setfilterdWishList] = useState(wishList);
    
    useEffect(() => {
      let sortedData = [...wishList];
      if (shortingType === "pages") {
        sortedData.sort((a, b) => a.totalPages - b.totalPages);
      } else if (shortingType === "rating") {
        sortedData.sort((a, b) => a.rating - b.rating);
      }
      setfilterdWishList(sortedData);
    }, [shortingType, wishList]);
   




    if(wishList.length === 0){
        return (
            <EmptyState></EmptyState>
        )
    }

    return (
         <div className='space-y-4 py-6'>
           {filterdWishList.map((book,ind) => (
            <ListedBookCard key={ind} book={book} ></ListedBookCard>
           ))}
        </div>
    );
};

export default ListedWishList;