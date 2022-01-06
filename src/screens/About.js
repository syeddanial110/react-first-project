import React from 'react'
import {Helmet} from "react-helmet";
import CustomTitle from '../components/CustomTitle';
import mainImg from "../assets/images/cover1.jpg";
import "../styles/screens/aboutStyle.css"
import myLogoImg from "../assets/images/myLogo1.jpg"


const About = () => {
    return (
        <>
         <CustomTitle title="About" />

            <div className='continerGrid '>
                <div className='mainImg content'>
                <img className="d-block w-100" src={mainImg} alt="First slide" />
                </div>
                <div className=' content ourMission'>
                    <h1>Our Mission</h1>
               <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cumque libero earum ab quod consequatur omnis nulla amet voluptatem, quo iste deserunt fugit esse nam non optio? Quam beatae magnam non nisi autem amet dolor aut, aspernatur modi cupiditate quas sunt possimus excepturi odit, cum rem mollitia ad veniam, sit quasi sed aliquid corporis hic? In voluptatem quam rem doloribus adipisci dolor maiores consectetur ut earum soluta atque dolore aperiam, consequatur qui tenetur necessitatibus a totam
               </p>

                </div>
                <div className='content'>
                <img className="d-block w-100 p-2 mt-5" src={mainImg} alt="First slide" />
                </div>

               

                {/* <div className='content'>6
              
                </div>
                <div className='content'>7</div>
                <div className='content'>8</div> */}

            </div>
            <div className='container1'>
                <div className='content1 '>
                <img className="d-block w-100 p-2 mt-5" src={mainImg} alt="First slide" />
                    3</div>
                <div className='content1 ourVision'>
                    <h1>ourVision</h1> 
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cumque libero earum ab quod consequatur omnis nulla amet voluptatem, quo iste deserunt fugit esse nam non optio? Quam beatae magnam non nisi autem amet dolor aut, aspernatur modi cupiditate quas sunt possimus excepturi odit, cum rem mollitia ad veniam, sit quasi sed aliquid corporis hic? In voluptatem quam rem doloribus adipisci dolor maiores consectetur ut earum soluta atque dolore aperiam, consequatur qui tenetur necessitat 4
                    </p>
                    </div>
                <div className='content1 logo'>
                <img className="d-block w-100 p-2 mt-5" src={myLogoImg} alt="First slide" />
                    5</div>
            
            </div>
        </>
    )
}

export default About
