import React from 'react'

function Hero(heroName) {
    if (heroName === 'Joker') {
        throw new Error('Not an hero!')
    }
  return (
    <div>
        {heroName}
    </div>
  )
}

export default Hero