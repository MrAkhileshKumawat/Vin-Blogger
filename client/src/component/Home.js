import React,{useEffect,useState} from 'react'
import Cards from './Cards'
import Coursel from './Coursel'
import Gettime from './Gettime'
// import {Button, Container} from '@material-ui/core'
import Navbar from './Navbar'
import {networkRequest} from "./network";



export default function Home() {
    const [data, setData] = useState([])


    useEffect(() => {
        const fetch = async () => {
          const fetchedData = await networkRequest("http://localhost:3030/users", "get").then(
            (response) => response
          );
    
          setData(fetchedData);

        };
        fetch();
      }, []);
    return (
        <div>
            <Navbar/>
            {/* <Coursel/> */}
            <h1>Welcome to the Home Page</h1>
        </div>
    )
}
