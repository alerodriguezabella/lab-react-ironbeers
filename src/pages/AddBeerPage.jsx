import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddBeerPage() {
  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [firstBrewed, setFirstBrewed] = useState("")
  const [brewersTips, setBrewersTips] = useState("")
  const [attenuationLevel, setAttenuationLevel] = useState(0)
  const [contributedBy, setContributedBy] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios 
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {name, tagline, description, first_brewed: firstBrewed, brewers_tips: brewersTips, attenuation_level: attenuationLevel, contributed_by: contributedBy})
      .then(() => {
          setName("")
          setTagline("")
          setDescription("")
          setFirstBrewed("")
          setBrewersTips("")
          setAttenuationLevel(0)
          setContributedBy("")

          navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)}/><br/>
        <input type='text' name='tagline' value={tagline} onChange={(e) => setTagline(e.target.value)}/><br/>
        <input type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)}/><br/>
        <input type='text' name='first_brewed' value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)}/><br/>
        <input type='text' name='brewers_tips' value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)}/><br/>
        <input type='number' name='attenuation_level' value={attenuationLevel} onChange={(e) => setAttenuationLevel(e.target.value)}/><br/>
        <input type='text' name='contributed_by' value={contributedBy} onChange={(e) => setContributedBy(e.target.value)}/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddBeerPage