import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';



const Tag = () => {
     
    const [tag,setTag] = useState("Car");

    const {gif,loading,fetchData} = useGif(tag);
    function changeHandler(event){
        setTag(event.target.value);
    }
    function clickHandler(){
        fetchData(tag);
    }
    return (
        <div className='w-1/2  bg-blue-500 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random GIF {tag}</h1>
            {
                loading ? (<Spinner/>) : (<img src={gif} />)
            }
            
            <input 
            className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
            onChange={changeHandler}
            value={tag}
            />
            <button onClick={clickHandler}
            className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
            >Generate</button>
        </div>
    );
};

export default Tag;