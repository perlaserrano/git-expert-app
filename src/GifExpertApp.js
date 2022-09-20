import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

 const GifExpertApp = () => {
// const categories = ['One Punch', 'Perls', 'Dragon Ball' ];
 const [categories, setCategories] = useState(['One Punch', 'Perls', 'Dragon Ball' ])

//  const handleAdd = () =>{

//     setCategories([  'Perlita',...categories]);

//  }


  return (
    <div>
        <h2>GifExpertApp</h2>
        <AddCategory/>
        <hr/>
        

      <ol>
     {
        categories.map(category => {
            return  <li key={category}> {category}</li>
        })
     }
      </ol>
    </div>
  )
}

export default GifExpertApp;
