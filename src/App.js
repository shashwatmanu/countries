import Countries from "./Components/Countries";
import { useEffect, useState } from "react";
import "./index.css"


function App() {
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
fetch('https://restcountries.com/v3.1/all').then((res)=>res.json()).then((data)=>setCountries(data));
  },[])
  // console.log(countries)
  return (
   <>
   <div className="container">
   {countries.map((country)=><Countries img={country.flags.png} name={country.name.common}/>)}
   </div>
   </>
  );
}

export default App;
