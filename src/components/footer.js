import facebook from '../Images/facebook.jpg'
import github from '../Images/github.png'
import instagram from '../Images/insta.png'
import twitter from '../Images/twitter.png'

export default function Footer() {
    return(
        <div className='footer'>
            <ul>
                <li><img src={twitter} alt=''/></li>
                <li><img src={facebook} alt=''/></li>
                <li><img src={github} alt=''/></li>
                <li><img src={instagram} alt=''/></li>
            </ul>
        </div>
    )
}