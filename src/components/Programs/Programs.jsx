import './programs.css'
import rightArrow from '../../assets/rightArrow.png'
import {programsData} from '../../data/programsData'
const Programs=()=>{
    return(
        <div className='programs' id="Programs">
            <div className='programs-text'>
                <span className='stroke-text '>Explore Our</span>
                <span>Programs</span>
                <span className='stroke-text'>To shape you</span>
            </div>
            <div className='program-categories'>
            {
                programsData.map((program)=>{
                   return <div className='categories'>
                                {program.image}
                                <span>{program.heading}</span>
                                <span>{program.details}</span>
                                <div className='join-now'>
                                    <span >Join Now</span>
                                    <img src={rightArrow} alt=""/>
                                </div>
                            </div>
                })
            }
            </div>

        </div>
    )
}
export default Programs