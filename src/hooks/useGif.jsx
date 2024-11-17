import React, { useEffect, useState } from 'react';
import axios from 'axios';





const useGif = (tag) => {


    const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    
    const [loading,setLoading] = useState(false);
    const [gif,setGif] = useState('');


    async function fetchData(tag){
        setLoading(true);
        const {data} = await axios.get(tag ? tagMemeUrl : randomMemeUrl );
        const image = data.data.images.downsized_large.url;
        console.log(image);
        setGif(image);
        setLoading(false);
     
        
    }

    useEffect(()=>{
    fetchData(tag);  
    },[]);

    return {gif,loading,fetchData};
  
};

export default useGif;