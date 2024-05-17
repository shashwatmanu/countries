import React from 'react'
import "./Countries.css"

const Countries = ({img, name}) => {
    // console.log(name)
  return (
    <div className='countryCard'>
        <img src={img} style={{width:'100px',height:'100px', alignSelf:'center'}} alt='flag'/>
        <div className='name'>{name}</div>
    </div>
  )
}

export default Countries