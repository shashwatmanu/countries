// import Countries from "./Components/Countries";
// import { useEffect, useState } from "react";
// import "./index.css"


// function App() {
//   const [countries, setCountries] = useState([]);
//   const [search, setSearch] = useState("");
//   const [result, setResult] = useState([]);

//   useEffect(()=>{
// fetch('https://restcountries.com/v3.1/all').then((res)=>res.json()).then((data)=>setCountries(data)).catch((error)=>console.log(error));
//   },[])
//   // console.log(countries)

//   const handleChange = (e) =>{
// setSearch(e.target.value)
//   }

//   useEffect(()=>{
// const resultVar = countries.filter(country=>country.name.common.toLowerCase().includes(search.toLowerCase()))
// setResult(resultVar);
//   },[search])

//   return (
//    <>
//    <div style={{width:'100vw', backgroundColor:'gray', display:'flex', justifyContent:'center', height:'36px'}}>
//     <input type="text" style={{width:'50vw', margin:'3px'}} placeholder="Search for Countries..." onChange={handleChange} value={search}/>
//    </div>
//    <div className="container">
//    {search===""?(countries.map((country)=><Countries img={country.flags.png} name={country.name.common}/>)):(result.map((country)=><Countries img={country.flags.png} name={country.name.common}/>))}
//    </div>
//    </>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import CountriesSearch from "./Components/Countries";

function App() {
  const [countryData, setCountryData] = useState([]);
  const [filterCountryData, setFilterCountryData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const fetchCountryData = async () => {
    let url = "https://restcountries.com/v3.1/all";
    try {
      let response = await axios.get(url);
      setCountryData(response.data);
      setFilterCountryData(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  const searchCountries = async () => {
    if (searchText === "") {
      setFilterCountryData(countryData);
    }

    let url = "https://restcountries.com/v3.1/all";

    try {
      let response = await axios.get(url);

      const filteredData = response.data.filter((country) =>
        country.name.common.toLowerCase().includes(searchText.toLowerCase())
      );

      setFilterCountryData(filteredData);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    searchCountries();
  }, [searchText]);

  return (
    <div>
      <div className="searchSection">
        <form>
          <input
            type="text"
            placeholder="Search for countries..."
            value={searchText}
            onChange={(e) => handleChange(e)}
          />
        </form>
      </div>
      <div className="App">
        {filterCountryData &&
          filterCountryData.map((ele) => <CountriesSearch data={ele} />)}
      </div>
    </div>
  );
}

export default App;
