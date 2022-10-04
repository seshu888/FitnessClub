import './header.css'
import logo from '../../assets/logo.png'
const Header =()=>{
    return(
        <div className='header'>
            <img src={logo} alt="" className='logoImage'/>
            <ul>
                <li>Home</li>
                <li>Testimonials</li>
                <li>Programs</li>
                <li>Plans</li>
                <li>Why us</li>
            </ul>
        </div>
    )
}
export default Header