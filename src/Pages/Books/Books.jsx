import React, { useContext } from 'react';
import { BooksContext } from '../../Context/BookContext';

const Books = () => {
     const {storedBooks} = useContext(BooksContext)
       console.log(storedBooks);
    
    return (
        <div>
            Books
        </div>
    );
};

export default Books;