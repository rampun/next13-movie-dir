import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Movie({ title, id, release_date, poster_path }) {

    const imagePath = 'https://image.tmdb.org/t/p/original'
  return <>
    <div>
        <h1>{title}</h1>
        <h3>{release_date}</h3>
        <Link href={`/${id}`}>
            <img src={imagePath + poster_path} alt="" />
        </Link>
    </div>
  </>
}

export default Movie