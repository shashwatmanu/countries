import React from 'react'
import "./Countries.css"

const Countries = ({data}) => {
    // console.log(name)
  return (
    <div className='countryCard'>
        <img src={data.flags.svg} style={{width:'100px',height:'100px', alignSelf:'center'}} alt='flag'/>
        <h2 className='name'>{data.name.common}</h2>
    </div>
  )
}


export default Countries



// import React from "react";

// const CountriesSearch = ({ data }) => {
//   return (
//     <div className="countryCard">
//       <img src={data.flags.svg} alt={data.name.common} />
//       <h2>{data.name.common}</h2>
//     </div>
//   );
// };

// export default CountriesSearch;