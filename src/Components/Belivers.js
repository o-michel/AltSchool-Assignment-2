import React, { useState, useEffect } from 'react'
import axios from 'axios'

   
const Belivers = () => {
  const [user, setUsers] = useState([])
  const [userName, setUsersName] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setpostsPerPage] = useState(3)
  

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://randomuser.me/api/');
      const response =await res.data
      const person = response.results[0]
      const {phone, email} = person
      const {large:image} = person.picture
      setUsers(person);
      // setUsersName(image);
      setLoading(false)
      console.log(`phone number ${phone} and the picture url is${image} `);
    }
    
    fetchPosts();

    
    // fetch('https://randomuser.me/api/')
    // .then(response => response.json())
    // .then(json => console.log(json.results.gender) )
  
    // return () => {
    //   second
    // }
  }, [])

  console.log('yooo');
  console.log(user);
  // console.log(image);
  // console.log(data);
  
  return (
    <div>You are inside the Belivers components</div>
  )
}

export default Belivers