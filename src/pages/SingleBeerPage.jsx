import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'

function SingleBeerPage() {
    const [beer, setBeer] = useState({})
    const { id } = useParams()


    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then (response => {
                // console.log(response.data)
                setBeer(response.data)
            })
            .catch(err => console.log(err))
    }, [id])

  return (
    <div>
        <Header />
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

export default SingleBeerPage