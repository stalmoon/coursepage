import Head from 'next/head'
import React from 'react';

import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Course website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1><strong>Course website HOME</strong></h1>
      <ul>
        <li> 
        <Link href="/playlistMaker">
          <a>PlaylistMaker</a>
        </Link>
        </li>
        <li>
          <Link href="/playlistVideos">
            <a>PlaylistVideos</a>
          </Link>
        </li>
      </ul>
     
      
      
    
    </div>
  )
}
