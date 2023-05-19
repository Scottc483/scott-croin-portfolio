'use client'

import React, {useEffect} from 'react'

const page = () => {

  useEffect(() => {
    
    if (typeof window !== 'undefined') {
      console.log('window loaded');
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.remove();
    }
  }, []);

  return (
    <div>
        <h1>Projects</h1>
    </div>
  )
}

export default page