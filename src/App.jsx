import React, { useEffect, useState } from 'react'
import {BrowserRouter ,Routes, Route} from 'react-router-dom';
import Pricing from './pages/PRicing';
import Product from './pages/Product';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';

const BASE_URL='http://localhost:8000';

function App() {
  const [cities, setCities]=useState([]);
  const[isLoading, setIsLoading]=useState(false);

  useEffect(function(){
    async function fetchCities(){
     try{ 
      setIsLoading(true);
      const res=await fetch(`${BASE_URL}/cities`);
      const data=await res.json();
      setCities(data);
     
    } catch{
      alert('error loading data'); 
    } finally{
      setIsLoading(false);
    }
  }
  fetchCities()
  },[])
  return (
<BrowserRouter>
<Routes>
  <Route index element={<Home/>}/>
  <Route path='/pricing' element={<Pricing/>}/>
  <Route path='/Product' element={<Product/>}/>
  <Route path='/app' element={<AppLayout/>}>
  <Route index element={<CityList cities={cities} isLoading={isLoading}/>} />
  <Route path='cities' element={<CityList cities={cities} isLoading={isLoading}/>} />
  <Route path='countries' element={<CountryList cities={cities} isLoading={isLoading}/>} />
  <Route path='cities/:id' element={<City/>}/>
  <Route path='form' element={<Form/>}/>
  </Route>
  <Route path='login' element={<Login/>}/>
  <Route path='*' element={<PageNotFound/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App