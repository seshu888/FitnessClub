import './footer.css'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import logo from '../../assets/logo.png'
const Footer=()=>{
    return(
        <div className='footer'>

            <hr/>
            <div className='blur footer-blur'></div>
            <div className='social-media-icons'>
                <img src={github} alt=""/>
                <img src={instagram} alt=""/>
                <img src={linkedin} alt=""/>
                
            </div>
            <div className='logo-f'>
                <img src={logo} alt=""/>
            </div>
        </div>
    )
}
export default Footer