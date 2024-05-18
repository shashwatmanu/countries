// import React from 'react'
import "./Countries.css"

// const Countries = ({img, name}) => {
//     // console.log(name)
//   return (
//     <div className='countryCard'>
//         <img src={img} style={{width:'100px',height:'100px', alignSelf:'center'}} alt='flag'/>
//         <div className='name'>{name}</div>
//     </div>
//   )
// }

// export default Countries



import React from "react";

const CountriesSearch = ({ data }) => {
  return (
    <div className="countryCard">
      <img src={data.flags.svg} alt={data.name.common} />
      <h2>{data.name.common}</h2>
    </div>
  );
};

export default CountriesSearch;