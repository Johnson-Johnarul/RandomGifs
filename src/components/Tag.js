
import React, { useState } from 'react'
import useGif from '../hooks/useGif'
import Spinner from './Spinner'


const Tag = () => {
    const [tag, setTag] = useState("leo");

    const {gif, loading, fatchData} = useGif(tag);

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className=' mt=[15px]text-2xl underline uppercase font-bold '>Random {tag} Gif</h1>

        {
          loading ? (<Spinner/>):(<img src={gif} width="450" alt='Gifs'/>)
        }

        <input
          className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
          onChange={(event) => setTag(event.target.value)}
          value={tag}
        />


        <button
        className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'
        onClick={() => fatchData(tag)}>
        Generate
        </button>

    </div>
  )
}
export default Tag

