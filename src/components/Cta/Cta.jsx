import scotiaLogo from '../../assets/images/scotiabank.png'
import './Cta.scss'
function Cta(){

    return(

        <div className="cta">
            <img className='cta__image' src={scotiaLogo}alt="" />
            <div className='cta__box'>
              <button className="cta__connect">Connect With Us Today</button>
              <button className="cta__join">Join our team</button>
              </div>
            
        </div>
    )
}
export default Cta;