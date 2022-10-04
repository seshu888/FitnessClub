import Header from '../Header/Header'
import './hero.css'
import heart from '../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
const Hero=()=>{
    const transition={type:'spring',duration : 3}
    return(
        <div className='hero-section'>
            <div className='blur hero-blur'></div>
            <div className='h-rightside'>
                <Header/>  
                <div className='the-best-ad'>
                    <motion.div initial={{left:'238px'}} whileInView={{left:'8px'}} transition={transition}></motion.div>
                    <span className='bestTag'>The best fitness club in the city</span>
                </div>
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'> Shape</span>
                        <span>  Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span className='hero-text-desc'>In here we will help you to shape and build your idea and live your life to fullest</span>
                    </div>
                </div>
                <div className='figures'>
                    <div>  
                        <span className='number'>+140</span>
                        <span className='club-members'> Members</span>
                    </div>
                        <div>  
                            <span className='number'>+50</span>
                            <span className='club-members'> Fitness programs</span>
                    </div>
                    <div>  
                        <span className='number'>+24</span>
                        <span className='club-members'> Coaches</span>
                    </div>
                </div>
                <div className='hero-buttons'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <div className='h-leftside'>
                    <button className='btn join-button'>Join Now</button>
                    <div className='heartRate'>
                        <img src={heart} alt=""/>
                        <span>Heart Rate</span>
                        <span>116 bpm</span>
                    </div>
                    <img  src={hero_image} alt="" className='hero_image'/>
                    <img src={hero_image_back} alt="" className='hero_back_image'/>
                    <div className='calories'>
                        <img src={calories} alt=""/>
                        <div className='calories-details'>
                            <span>Calories burned</span>
                            <span>220 calories</span>                       
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Hero