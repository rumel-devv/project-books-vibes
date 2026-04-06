import React, { useContext, useState } from 'react';
import { BooksContext } from '../../Context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedWishList from '../../Componets/listedBooks/ListedWishList';
import ListedreadList from '../../Componets/listedBooks/ListedreadList';

const Books = () => {
     const {storedBooks,wishList} = useContext(BooksContext)
    const [shortingType,setShortingType]= useState([])
    return (
        <div className='w-full md:w-10/12 mx-auto py-4'>

       <div className='flex justify-center'>
             <div className="dropdown dropdown-center ">
         <div tabIndex={0} role="button" className="btn m-1">Short by {shortingType} ⬇️</div>
         <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
           <li onClick={() => setShortingType('pages')} ><a>Pages</a></li>
           <li onClick={() => setShortingType('rating')} ><a>Rating</a></li>
         </ul>
       </div>
       </div>
       
      <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
       <ListedreadList shortingType={shortingType} ></ListedreadList>
    </TabPanel>
    <TabPanel>
      <ListedWishList  shortingType={shortingType} ></ListedWishList>
    </TabPanel>
  </Tabs>
            
        </div>
    );
};

export default Books;