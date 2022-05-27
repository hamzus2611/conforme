import React, {useState} from 'react' 
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg,
            HeroH1, HeroBtnWrapper, HeroP,
            HeroContent, ArrowForward, ArrowRight} from './HeroElements'
import { Button } from '../ButtonElements'
const HeroSection = () => {
    const[hover, setHover] = useState(false)

    const onHover =() => {
        setHover(!hover)
    }


  return (
    <HeroContainer >
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
        <HeroH1>
        ISO 27001 
        </HeroH1>
        <HeroP>
        Être conforme, Être en sécurité
        </HeroP>
        <HeroBtnWrapper>
        <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
        
        Essayez maintenant {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
        </HeroBtnWrapper>
        </HeroContent>

    </HeroContainer>
  )
}

export default HeroSection