import React, { useState } from 'react'
import styles from './CountryList.module.css'
import Spinner from './Spinner.jsx'
import CountryItem from './CountryItem'
import Message from './Message.jsx'

function CountryList({cities,isLoading}) {

    if(isLoading) return <Spinner/>
    if(!cities.length) return <Message message='Add YOur ffirst city by clicking the City'/>


    const countries= cities.reduce((arr,city)=> {if (!arr.map (el=>el.city).includes(city.country))
    return [...arr ,{country: city.country ,emojie:city.emoji}];
    else return arr;}
    ,[]);
  return (
 <ul className={styles.countryList}>

{countries?.map((country)=> <CountryItem country={country} key={country.id}/>)}
 </ul>
  )
}

export default CountryList;