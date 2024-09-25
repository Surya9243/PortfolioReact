import React, { useState } from 'react'

const Services = () => {
const [data,setData]=useState([
    {
        name:'html',
        images:'./imges/html.jpg',
        content:"HTML is a programming language that stands for Hypertext Markup Language.CSS is a style sheet language that’s focused almost entirely on improving the presentation of HTML elements"
    },
    {
        name:'JavaScript',
        images:'./imges/JavaScript.jpg',
        content:"JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.)."
    },
    {
        name:'ReactJs',
        images:'./imges/react.jpeg',
        content:"ReactJS, also known as React, is a popular JavaScript library for building user interfaces. It is also referred to as a front-end JavaScript library. It was developed by Facebook and is widely used for creating dynamic and interactive web applications."
    },
    {
        name:'Bootstrap',
        images:'./imges/bootstrap.jpeg',
        content:"Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page."
    },
  
])
    const [langName, setLangName] = useState('html')
    function getServiceName(e) {
        const serviceName = e.target.id
        setLangName(serviceName)
    }
const filterData = data.filter((val)=>val.name == langName )
    
    return (
        <div className='services'>
            <h1>SERVICES WE OFFER</h1>
            <p>Exceptional level of service</p>
            <div className='imgess' >
                <div onClick={getServiceName} className='imgs' id='html'>
                    <span id='html'><img id='html' src="https://img.icons8.com/ios-glyphs/30/FAB005/code.png" /></span>
                    <p id='html'>HTML/CSS</p>
                </div>
                <div onClick={getServiceName} className='imgs' id='JavaScript'>
                    <span id='JavaScript'><img id='JavaScript' src="https://img.icons8.com/ios-filled/50/FAB005/javascript-logo.png" /></span>
                    <p id='JavaScript'>JAVASCRIPT</p>
                </div>
                <div onClick={getServiceName} className='imgs' id='ReactJs'>
                    <span id='ReactJs'><img id='ReactJs' src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FAB005/external-react-social-media-tanah-basah-basic-outline-tanah-basah.png"/></span>
                    <p id='ReactJs'>REACTJS</p>
                </div>
                <div onClick={getServiceName} className='imgs' id='Bootstrap'>
                    <span id='Bootstrap'><img id='Bootstrap' src="https://img.icons8.com/material-outlined/24/FAB005/bootstrap.png"/></span>
                    <p id='Bootstrap'>BOOTSTRAP</p>
                </div>
                
            </div>
           {
            filterData.map((val)=>{
                return(
                    <div className='imageLang1' key={Math.random()}>
                         <img src={val.images}/>
                       <div> <h1>{val.name}</h1>
                       <h1>{val.content}</h1></div>
                    </div>
                )
            })
           }
        </div>
    )
}

export default Services
