import { createContext,useEffect,useState } from "react";
import { toast } from "react-toastify";
import { addReadListToLocalDb, getAllreadListFromLocalDb } from "../utilitis/localDb";


export const BooksContext = createContext();


const BookProvider = ({children}) => {
  
    const [storedBooks,setStoredBooks] = useState(() => getAllreadListFromLocalDb())
    const [wishList,setWishList] = useState([]) 

 
    const handleMarkasRead = (currentBook) => {
        //  Step 1. Store Book id or Book Object
        //  step 2. Where to collectiuon
        //  Step 3. Array or  Coolection
        //  Step 4. If book exist show a alert or toast 
        //  Step 5. If not add the book in array or Coolection \
        addReadListToLocalDb(currentBook)
        const isExistBook =  storedBooks.find((book) => book.bookId == currentBook.bookId) ;
        if(isExistBook){
            toast.error('Book Al Ready Exist')
        }
        else{
            setStoredBooks([...storedBooks,currentBook])
            toast.success(`${currentBook.bookName} added to list`)
        }
    }



    const handleWishList = (currenBook) => {
          const isExistBook = wishList.find((book => book.bookId == currenBook.bookId))
           const isExistinInReadList = storedBooks.find((book) => book.bookId == currenBook.bookId)
         
           if(isExistinInReadList){
            toast.error(`${currenBook.bookName} is already in read list`)
            return
           } 


          if(isExistBook){
            toast.error('Book already added to wishlist')
          } 
          else{
            setWishList([...wishList,currenBook])
            toast.success(`${currenBook.bookName} added to wishlist`)
          }
    }
     
    const data = {
        storedBooks,
        setStoredBooks,
        handleMarkasRead,
        wishList,
        setWishList,
        handleWishList
    }

    return (
        <BooksContext.Provider value={data} > {children} </BooksContext.Provider>
    );
};

export default BookProvider;