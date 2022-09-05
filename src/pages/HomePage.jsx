import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'

import React from 'react'
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <div>
        <img src={beers} alt='list of all beers'/>
        <h1><Link to='/beers'>All beers</Link></h1>

        <img src={randomBeer} alt='bottle and glass of beer'/>
        <h1><Link to='/random-beer'>Random beer</Link></h1>

        {/* Also possible with 'require' */}
        {/* <img src={require('../assets/random-beer.png')} alt='bottle and glass of beer'/> */}
        <img src={newBeer} alt='beer from the tab'/>
        <h1><Link to='/new-beer'>New beer</Link></h1>
    </div>
  )
}

export default HomePage