
const getAllreadListFromLocalDb = () => {
   const allReadList = localStorage.getItem('readList')


   if(allReadList) return JSON.parse(allReadList)

   return []
}


const addReadListToLocalDb = (book) => {
   const allBooks = getAllreadListFromLocalDb()
   const isExisting = allBooks.find(bk => bk.bookId === book.bookId )
   if(!isExisting){
    allBooks.push(book)
    localStorage.setItem('readList',JSON.stringify(allBooks))
   }
}


export { getAllreadListFromLocalDb,addReadListToLocalDb}