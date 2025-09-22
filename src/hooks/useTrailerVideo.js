import { useEffect } from "react"
import { addTrailerVideo } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"


const useTrailerVideo = (movieid) =>{

    const dispatch = useDispatch()
    const getmovieinfo = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieid+'/videos', API_OPTIONS)
        const json = await data.json()

        const filterData = json.results.filter(video => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]
        console.log(trailer)
        dispatch(addTrailerVideo(trailer))  
    }


    useEffect(()=>{
        getmovieinfo()
    },[])
}

export default useTrailerVideo