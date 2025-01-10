import './LearnMore.scss'
import coinData from '../../assets/images/coin.png';
import { Link } from 'react-router-dom';
import leftData from '../../assets/images/left-rec.png'
import rightData from '../../assets/images/right-rec.png'

function LearnMore(){

    return(
        <div className="learnMore">
            <div className='learnMore__wrap'>
                <img className='learnMore__left' src={leftData} alt="" />
            </div>
        
            <div className='learnMore__box'>
               <p className="learnMore__title">Smart, secure access on the go</p>
               <p className="learnMore__text">We’re pleased to announce the launch of the new Scotia Wealth Management mobile app, designed for ScotiaMcLeod&reg;
            clients.</p> <Link><span className='learnMore__span'>Learn More</span></Link>
            </div>
            <div className='learnMore__wrap--ryt'>
                <img  className='learnMore__right'src={rightData} alt="" />
            </div>
           
            {/* <div className='learnMore__coin'>
                <img className='learnMore__image'src={coinData} alt="image" />
            </div> */}
        </div>
    )
}
export default LearnMore;