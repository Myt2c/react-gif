import { useEffect, useState } from "react"
import { GetGifs } from "../Helpers/GetGifs"

export const useFetchGif = (categoryHtml) => {

    const [isLoading, setisLoading] = useState(true)
    const [images, setImages] = useState([])

    const getImages = async() => {
        const newImage = await GetGifs(categoryHtml)
        setImages(newImage)
        setisLoading(false)
    }
    useEffect(() => {
        getImages()
        return
    }, [])

  return {
    images,
    isLoading
  }
}