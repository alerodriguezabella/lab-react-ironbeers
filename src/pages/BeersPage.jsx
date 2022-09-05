import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../components/Header'


function BeersPage() {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                // console.log(response.data)
                setBeers(response.data)
            })
            .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <Header />
        <h1>List of beers</h1>
        {beers.map((beer) => {
            return(
                <div key={beer._id}>
                    <img src={beer.image_url} alt='beer bottle'/>
                    <h3><Link to={`/beers/${beer._id}`}>{beer.name}</Link></h3>
                    <p>{beer.tagline}</p>
                    <p>Created by: {beer.contributed_by}</p>
                </div>
            )
        })}
    </div>
  )
}

export default BeersPage