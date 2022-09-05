import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function RandomBeerPage() {
    const [beer, setBeer] = useState({})

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then (response => {
                // console.log(response.data)
                const randomNumber = Math.floor(Math.random() * response.data.length)
                setBeer(response.data[randomNumber])

            })
            .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <img src={beer.image_url} alt='beer bottle'/>
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
    </div>
  )
}

export default RandomBeerPage