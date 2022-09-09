import photo from '../Images/PHOTO.jpeg'
import email from '../Images/email.png'
import linkedin from '../Images/index.png'


export default function Info() {

    return (
        <div className='info'>
            <img src={photo} alt='Unknown' />
            <h3>Dipandhu Maurya</h3>
            <h5>Software Developer</h5>
            <h5>Google</h5>
            <div className='btn'>
                <button className='email'>
                <img src={email} alt=''/>Email</button>
                <button className='linkedin'>
                <img src={linkedin} alt=''/>LinkedIn</button>
            </div>
            
        </div>
    )

}