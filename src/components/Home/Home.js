import MovieList from "../MovieList/MovieList";
import React, { useState, useEffect } from 'react';



export default function Home() {

    const [movies,setMovies]=useState([]);

    async function getMovies() {
        const url = process.env.REACT_APP_SERVER_URL
        // console.log(111111,url)
        const response = await fetch(`${url}/trending`);
        // console.log(22222,response)
        const jsonData = await response.json();
        // console.log(33333,jsonData);
        setMovies(jsonData)
        // console.log(444444,movies)

    }

    function commentHandler(newData,id){
        movies.map(movie=>{
            if(movie.id === id){
                // console.log(9999,newData,id)
                movie.comment = newData.userComment;
                return movie
            } else {
                return movie
            }
        })
    }



    useEffect(() => {
        getMovies();
    },[]);

    return (
        <>
            <MovieList data={movies} commentHandler={commentHandler}/>
        </>
    )
}