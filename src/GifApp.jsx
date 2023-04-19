import { useState } from "react"
import AddCategory from "./Components/AddCategory"
import { GifGrid } from "./Components/GifGrid"

export const GifApp = () => {

    const [categories, setCategories] = useState(['Matematicas', 'Psicología'])

    // const handleAddCategory = () =>{
      // console.log('Video Juegos')
    // }
    const onAddCategory = (e) => {
        if (categories.includes(e)) return; 

        setCategories([e,...categories])
    }
  return (
    <>
        <h1>GifApp</h1>
        <AddCategory
                onNewCategory={onAddCategory}
        />
        {/* <button onClick={handleAddCategory}>Añadir categoria</button> */}
          {categories.map(categoryHtml => (
                <GifGrid
                    key={categoryHtml}
                    categoryHtml={categoryHtml}
                />
            ))
          }
    </>
  )
}
