import React from 'react'
import CategoryData from "../../data/category.json";

function Latestitem  ()  {
  return (
    <div className='mx-10 my-20'>
         <div>
          <h1 className="text-5xl mx-auto ">Latest Items</h1>
          <p className="mt-3 text-md">
            Explore our collection of unique and thoughtful gifts. Perfect for
            every occasion and every special someone.
          </p>
        </div>
       <div>
        <div className="grid grid-cols-4 gap-5 mt-20 justify-center">
          {CategoryData
            ? CategoryData.map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      src={item.images}
                      alt="cart"
                      className="w-72 h-72 shadow-xl rounded-md "
                    />
                    <h1 className="text-xl mt-5">{item.name}</h1>
                  </div>
                );
              })
            : "loading....."}
        </div>
      </div>
    </div>
  )
}

export default Latestitem
