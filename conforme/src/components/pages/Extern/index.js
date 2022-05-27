import React, {useState} from 'react'
import Footer from '../../Footer'
import HeroSection from '../../HeroSection'
import { homeObjOne, homeObjTwo } from '../../InfoSection/Data'
import InfoSection from '../../InfoSection/Index'
import NavBar from '../../NavBar/Index'
import Services from '../../Services/Index'
import Sidebar from '../../Sidebar'

const Home = () => {
    const[isOpen, setIsOpen]= useState(false)

    const toggle= () => {
        setIsOpen(!isOpen)
}

  return (
    <div>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <NavBar toggle={toggle}/>
    <HeroSection />
    <InfoSection {...homeObjOne}/>
    <Services />
    <InfoSection {...homeObjTwo}/>
    <Footer />
    </div>
  )
}

export default Home