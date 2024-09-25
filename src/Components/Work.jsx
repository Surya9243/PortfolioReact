import React, { useEffect, useState } from 'react'

const Work = () => {
  const [listName, setListName] = useState('All')
  const [workData, setWorkData] = useState([
    {
      name: 'lensCart',
      add: 'https://img.icons8.com/ios-filled/50/add--v1.png',
      image: './imges/LensCart.png',
      title: 'LenstCart Clone',
      lang: 'HTML/CSS',
      contant: 'Lenskart.com is an e-commerce website that sells eyewear and accessories. Lenskart sells a variety of products, including : Eyeglasses, Sunglasses, Contact lenses ectra.'
    },
    {
      name: 'harleyDavidson',
      add: 'https://img.icons8.com/ios-filled/50/add--v1.png',
      image: './imges/Harly.png',
      lang: 'HTML/CSS',
      title: 'Harley-Davidson',
      contant: 'The official Harley-Davidson online store offers a wide range of products and parts, including classic motorcycles, the latest gear, and accessories for customization.'
    },
    {
      name: 'passwordGenrator',
      add: 'https://img.icons8.com/ios-filled/50/add--v1.png',
      image: './imges/PassGen.png',
      lang: 'JavaScript',
      title: 'Password Generator',
      contant: 'The LastPass password generator creates random, secure passwords based on the parameters defined by you..'
    },
    {
      name: 'voting',
      add: 'https://img.icons8.com/ios-filled/50/add--v1.png',
      image: './imges/Voating.png',
      lang: 'JavaScript',
      title: 'Online Voting',
      contant: 'ElectionBuddys online voting system, your organization members can cast their vote anywhere and anytime with secure internet voting.'
    },
    {
      name: 'restaurant',
      add: 'https://img.icons8.com/ios-filled/50/add--v1.png',
      image: './imges/Resorent.png',
      lang: 'JavaScript',
      title: 'E-Food',
      contant: 'An online ordering system for Restaurants helps enhance the customer-restaurant relationship by providing end to end Customer Relationship Management.'
    },
    {
      name: 'OkCredit',
      add: 'https://img.icons8.com/ios-filled/50/add--v1.png',
      image: './imges/ssOkcridt1.png',
      lang: 'REACT-JS',
      title: 'OkCredit',
      contant: 'OkCredit is a digital ledger app and bookkeeping service for small and medium-sized businesses in India.'
    },
    {
      name: 'comingSoon',
      add: 'https://img.icons8.com/ios-filled/50/add--v1.png',
      image: './imges/comingSoon.jpg',
      lang: 'ReactJs',
      title: 'Coming Soon!',
      contant: 'Coming Soon.'
    },
    {
      name: 'memoryGames',
      add: 'https://img.icons8.com/ios-filled/50/add--v1.png',
      image: './imges/memoriGame.png',
      lang: 'ReactJs',
      title: 'Memory Games',
      contant: 'Memory Games are Great games to Train your memory or just for Fun! Of course, you will find the famous and must-have Matching game,.'
    }
  ])
  const [showData, setShowData] = useState(workData)
  const [newData, setNewData] = useState()
  const[addnew,setNew]=useState([])
  const [cross, setCross] = useState('open')
  console.log(addnew)

  useEffect(() => {
    setNew(workData.filter((val) => val.name == newData))
  }, [newData])

  // console.log(addNewPage)
  function getProject(e) {
    const selectId = e.target.id
    if (selectId == "All") {
      setShowData(workData)
      return;
    }
    else {
      const filterData = workData.filter((data) => data.lang == selectId)
      setShowData(filterData)
    }
  }
  function addData(e) {
    setCross('open')
    const addDataName = e.target.className
    setNewData(addDataName)
  }
  function cutPage() {
    setCross('close')
  }

  return (
    <div className='work'>
      <div className='recentWork'>
        <h1>RECENT WORKS</h1>
        <h4>OUR CLIENTS LOVE US! READ WHAT THEY HAVE TO SAY</h4>
      </div>
      <ul className='workUl' onClick={getProject}>
        <li id='All'>All</li>
        <li id='HTML/CSS'>HTML/CSS</li>
        <li id='JavaScript'>JavaScript</li>
        <li id='ReactJs'>ReactJs</li>
      </ul>
      <div className='abc'>
        {
          showData.map(({ lang, image, add, name }) => {
            return (<div className='dataWork' key={Math.random()}>
              <p key={Math.random()}>{lang}</p>
              <img src={image} alt="" />
              <img onClick={addData} className={name} src={add} alt="" />
            </div>
            )
          })
        }
      </div>
      {
        addnew.map(({ title, image, contant }) => {
          return (
            <div key={Math.random()} className={cross}>
              <h1>{title}</h1>
              <img onClick={cutPage} width="28" height="28" src="https://img.icons8.com/emoji/48/cross-mark-emoji.png" alt="cross-mark-emoji"/>
              <img src={image} alt="" />
              <p>{contant}</p>
              <button>Vist-Page</button>
            </div>
          )
        })
      }

    </div>
  )
}

export default Work
