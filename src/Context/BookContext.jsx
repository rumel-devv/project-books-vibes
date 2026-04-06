import { createContext, useState } from "react";

export const BooksContext = createContext();


const BookProvider = ({children}) => {
  
    const [storedBooks,setStoredBooks] = useState([])
     
    const handleMarkasRead = (currentBook) => {
        //  Step 1. Store Book id or Book Object
        //  step 2. Where to collectiuon
        //  Step 3. Array or  Coolection
        //  Step 4. If book exist show a alert or toast 
        //  Step 5. If not add the book in array or Coolection 
        const isExistBook =  storedBooks.find((book) => book.bookId == currentBook.bookId) ;
        if(isExistBook){
            alert('Book Al Ready Exist')
        }
        else{
            setStoredBooks([...storedBooks,currentBook])
            alert(`${currentBook.bookName} added to list`)
        }
    }
     
    const data = {
        storedBooks,
        setStoredBooks,
        handleMarkasRead
    }

    return (
        <BooksContext.Provider value={data} > {children} </BooksContext.Provider>
    );
};

export default BookProvider;