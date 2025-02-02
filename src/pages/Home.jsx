import React from 'react'
import "./home.css"
import { Link } from "react-router-dom";
import logo1 from '../assets/one.jpg'
import logo from '../assets/image.png'
import logo8 from '../assets/send.png'
import logo7 from '../assets/reporting.png'
import logo6 from '../assets/exchange.png'
import logo4 from '../assets/money.png'
import logo5 from '../assets/cpa.png'
import logo2 from '../assets/imgg1.webp'
import logo3 from '../assets/servi.png'
import Team from '../components/team/Team';
import Footer from '../components/footer/Footer';

const Home = () => {
  return ( 
    <>
            <div className='anny'></div>
            <div className='anny2'></div>
            <div className='anny3'>

                <div className='w-140'>

                  <h1 className='text-5xl font-bold'> Digital Solutions for Your Digital Problems....</h1>
                  <p className='text-xl mt-4'>Manage your digital assets with ease using our secure cryptocurrency wallet. Store, send, and receive your crypto with confidence, thanks to advanced encryption and user-friendly features.</p>
                </div>

            </div>
            <div  className='Image-section'>
              <img src={logo1} alt="logo" id='img1' className='w-100 shadow-xl  absolute top-35 right-25'/>
              <img src={logo2} alt="logo"  id='img2' className='w-70 shadow-md absolute top-50 right-95' />


            </div>


            <div className='buttonn'>
                  <Link to="/login">
                <button className="px-6 py-2 bg-blue-600 text-white text-2xl rounded-md hover:bg-blue-700 ml-45">
                  Get Started 
                </button>
              </Link>
                  <Link to="/support">
                <button className="px-6 py-2  text-black text-2xl rounded-md hover:text-blue-700 hover:border-2  ml-5 ">
                  Contact Us 
                </button>
              </Link>
            </div>



            <div className='w-full h-181  mt-36 ' >
              <img src={logo3} alt="logo" id='img3' className='w-full h-180'/>
              <h2 className='ml-150 text-5xl font-bold' id='snd'>Our Services</h2>

                <div className='ours'>

                  <div className='gon'>
                      <div className="block">
                      <img src={logo4}  alt="Placeholder"/>
                      <h2>Sell BitCoin</h2>
                      <p>At our platform you can Buy BTC, ETH, and other crypto easily via bank transfer.</p>
                            </div>

                    <div className="block">
                    <img src={logo5} alt="Placeholder"/>
                    <h2>Sell BitCoin</h2>
                    <p>At our platform you can Buy BTC, ETH, and other crypto easily via bank transfer.</p>
                    </div>

                    <div className="block">
                    <img src={logo6} alt="Placeholder"/>
                    <h2>Sell BitCoin</h2>
                    <p>At our platform you can Buy BTC, ETH, and other crypto easily via bank transfer.</p>
                    </div>

                    <div className="block">
                    <img src={logo7} alt="Placeholder"/>
                    <h2>Sell BitCoin</h2>
                    <p>At our platform you can Buy BTC, ETH, and other crypto easily via bank transfer.</p>
                    </div>

                    <div className="block">
                    <img src={logo8} alt="Placeholder"/>
                    <h2>Sell BitCoin</h2>
                    <p>At our platform you can Buy BTC, ETH, and other crypto easily via bank transfer.</p>
                    </div>

                    <div className="block">
                    <img src={logo} alt="Placeholder"/>
                    <h2>Sell BitCoin</h2>
                    <p>At our platform you can Buy BTC, ETH, and other crypto easily via bank transfer.</p>
                    </div>

                   </div>          
                </div>
                      <div>    
                        <h2 className='ml-150 text-5xl font-bold' id='snd1'>About Us</h2>
                      </div>
                    </div>
                    <div>
                      <Team />
                    </div>
                    <div>
                      <Footer />
                    </div>


    </>
  )
}

export default Home
