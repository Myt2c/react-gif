import { useEffect, useState } from "react"
import { GetGifs } from "../Helpers/GetGifs"
import { GifItem } from "./GifItem"
import { useFetchGif } from "../Hooks/useFetchGif"

export const GifGrid = ({categoryHtml}) => {
  const {images, isLoading} = useFetchGif(categoryHtml)

  return (
    <div>
        <h3>{categoryHtml}</h3>
        {
          isLoading && <h4>Cargando...</h4>
        }
        <div className="card-grid">
          {images.map(img =>(
            <GifItem
              key={img.id}
              title={img.title}
              url={img.url}
            />
          ))}
        </div>
    </div>
  )
}
