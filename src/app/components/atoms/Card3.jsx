import Image from 'next/image'
import React from 'react'

const Card3 = ({img}) => {
  return (
    <div className=''>
      <Image
      src={img}
      height={400}
      width={400}
      alt='global.png'
      />
    </div>
  )
}

export default Card3


