import React from 'react';
import heroImg from '../../assets/hero.png'

const Banner = () => {
    return (
       <div className="hero bg-base-200 min-h-[80vh] p-5  w-full md:max-w-9/12 mx-auto my-8 rounded-2xl">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
    <img
      src={heroImg}
      className="w-62 rounded-lg shadow-2xl"
    />
    <div className='space-y-6'>
      <h1 className="text-3xl w-full md:w-110 md:text-5xl font-bold">Books To Fresen up  Your Bookself</h1>
      <button className="btn bg-green-500 py-1.5 text-white">View the List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;