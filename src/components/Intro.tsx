import React from 'react'

const Intro = () => {
  return (
    <>
    <div className='flex flex-1 justify-center flex-col items-center'>
    <div className='flex justify-start items-start w-full max-w-3xl pl-6'>
        <h2 className='text-3xl font-bold mb-4'>Welcome!</h2>
    </div>
    <div className="bg-white rounded-lg shadow-md p-6 h-80 max-w-3xl">
    <p className="mb-4">
      <span className='text-lg font-semibold'>I&apos;m a web developer from BC, Canada</span>, with a recent graduation from BCIT&apos;s Software Systems Developer program and a background as a sous chef for five years.
    </p>
    <p className="mb-4">
      This unique combination of experiences equips me with a diverse skill set in web development. With keen attention to detail and a passion for creating seamless user experiences, my goal is to design captivating websites that leave a lasting impact.
    </p>
    <p className="mb-4">
      If you&apos;re in need of a dedicated and innovative developer to bring your digital ideas to life, I&apos;m excited to connect and collaborate.
    </p>
    <p className="">
      Visit my full about page to learn more about my journey.
    </p>
  </div>
  </div>
  </>
  )
}

export default Intro