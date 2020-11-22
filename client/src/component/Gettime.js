import React,{useState} from 'react'


export default function Gettime() {

    let currnentTime = new Date().toLocaleTimeString();
    console.log(currnentTime)

    const [ctime, setctime] = useState(currnentTime)

    let updateTime = ()=>{
        currnentTime=new Date().toLocaleTimeString();
        setctime(currnentTime)
    }
    setInterval(updateTime)
    return (
        <>
            <h1>{ctime}</h1>
            {/* <button onClick={updateTime} >get time</button> */}
        </>
    )
}


