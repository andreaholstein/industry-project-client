import './Hero.scss';
import heroData from '../../assets/images/hero.png';
import KeyBoardArrow from '../keyboardArrow/KeyboardArrow.jsx'

function Hero(){
    return(
        <>
        <section className='hero'>
            <div className='hero__subheader'>
                <ul className='hero__link'>
                   <li className='hero__text'>Wealth Management Canada <KeyBoardArrow /></li>
                   <li className='hero__text'>Investment management <KeyBoardArrow /></li>
                   <li className='hero__text'>ScotiaMcLeod&reg;</li>

                </ul>
               
            </div>
            <div className='hero__banner'>

            <div className='hero__image-wrap'>
            <img className='hero__image' src={heroData} alt="image" />
            </div>
          
             
         
           <div className='hero__container'> 
            <p className='hero__title'>ScotiaMcLeod&reg;</p>
            <ul className='hero__list'>
                <li className='hero__item'>Investment products</li>
                <li className='hero__item'>Wealth management</li>
                <li className='hero__item'>Investment advice</li>
                <li className='hero__item'>Portfolio management</li>
            </ul>
               
            </div>
            </div>
           
        </section>
      
        </>
    )
}
export default Hero;