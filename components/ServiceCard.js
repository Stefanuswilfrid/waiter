import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const ServiceCard = ({title, href,image}) => {
  return (
   <Link href={href}>
   <div className='service-card'>
   <Image src={image} width={240}
   alt={title}
      height={250}/> 
       <h2>{title}</h2>
   </div>
   </Link>
  )
}

export default ServiceCard