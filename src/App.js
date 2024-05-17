import Countries from "./Components/Countries";
import { useEffect, useState } from "react";
import "./index.css"


function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  useEffect(()=>{
fetch('https://restcountries.com/v3.1/all').then((res)=>res.json()).then((data)=>setCountries(data)).catch((error)=>console.log(error));
  },[])
  // console.log(countries)

  const handleChange = (e) =>{
setSearch(e.target.value)
  }

  useEffect(()=>{
const resultVar = countries.filter(country=>country.name.common.toLowerCase().includes(search.toLowerCase()))
setResult(resultVar);
  },[search])

  return (
   <>
   <div style={{width:'100vw', backgroundColor:'gray', display:'flex', justifyContent:'center', height:'36px'}}>
    <input type="text" style={{width:'50vw', margin:'3px'}} placeholder="Search for Countries..." onChange={handleChange} value={search}/>
   </div>
   <div className="container">
   {search===""?(countries.map((country)=><Countries img={country.flags.png} name={country.name.common}/>)):(result.map((country)=><Countries img={country.flags.png} name={country.name.common}/>))}
   </div>
   </>
  );
}

export default App;
