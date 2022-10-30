import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import React, { useState, useEffect } from 'react'
// import {
//   FaEnvelopeOpen,
//   FaUser,
//   FaCalendarTimes,
//   FaMap,
//   FaPhone,
//   FaLock,
// } from 'react-icons/fa'


const Users = ({heroName}) => {

// {console.log(heroName);}



//   const [isLoading, setIsLoading] = useState(true)
//   const [randomPerson, setRandomPerson] = useState(null)
//   const [title, setTitle] = useState('name')
//   const [value, setValue] = useState('random person')


//   const url = 'https://randomuser.me/api/'
//   const defaultImage = 'https://randomuser.me/api/portraits/men/23.jpg'


//   const fetchRandomPerson = async () => {
//     setIsLoading(true)
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data);
//   }

//   // console.log(data);


//   var person ={}
//   const {
//     phone,
//     email,
//     login: { password },
//     name: { first, last },
//     dob: { age },
//     picture: { large: image },
//     location: {
//       street: { number, name },
//     },
//   } = person

//   const newPerson = {
//     image,
//     phone,
//     email,
//     password,
//     age,
//     street: `${number} ${name}`,
//     name: `${first} ${last}`,
//   }

//   setRandomPerson(newPerson)
//   setIsLoading(false)
//   setTitle('name')
//   setValue(newPerson.name)


//   useEffect(() => {
//     fetchRandomPerson()
//   }, [])
  


if (heroName === "Belivers") {
  throw new Error('Not an hero!')
}
// return (
// <div>
//   {heroName}
// </div>
// )


  return (
    <div className='nastedContainer'>
        <div className='nastedContainerLink'>
       <div>
          {heroName}
         { console.log(heroName)}
       </div>
       
        <Link to='/users/belivers'>Belivers</Link>
        <Link to='/users/nonBelivers'>NonBelivers</Link>
        </div>
        <h1>You are in the Users page</h1>
        <Outlet/>
        

    </div>
  )
}

export default Users