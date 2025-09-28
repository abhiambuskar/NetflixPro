import { useEffect } from "react"
import { addTrailerVideo } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"


const useTrailerVideo = (movieid) =>{

    const dispatch = useDispatch()
    const trailerVideo = useSelector(store => store.movies.trailerVideo)
    const getmovieinfo = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieid+'/videos', API_OPTIONS)
        const json = await data.json()

        const filterData = json.results.filter(video => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]
        // console.log(trailer)
        dispatch(addTrailerVideo(trailer))  
    }


    useEffect(()=>{
        if(!trailerVideo){
            getmovieinfo()
        }
    
    },[])
}

export default useTrailerVideo