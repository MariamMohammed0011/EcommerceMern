import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Header from "./componenets/header/Header.jsx";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
const MyContext = createContext();
function App() {
  const [countryList, setCountryList] = useState([]);
   const [selectedCountry,setselectedCountry]=useState('');
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);
  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data);
    });
  };
  const values = {
    countryList,setselectedCountry,selectedCountry
  };
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
//https://newsapi.org/v2/everything?q=tesla&from=2025-04-30&sortBy=publishedAt&apiKey=2beb7aaf60be4603a7ed05740c14d258

export { MyContext };
