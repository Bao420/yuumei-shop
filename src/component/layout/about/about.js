import image1 from '../../../asset/images/image__about/image1.jpg'
import { TiTick } from "react-icons/ti"
import dataAbout from './dataAbout';
import { useState } from "react"
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi"

import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {

    const [current, setCurrent] = useState(0);
    const nextSlider = () => {
        setCurrent(current === dataAbout.length - 1 ? 0 : current + 1)
    }
    const prevSlider = () => {
        setCurrent(current === 0 ? dataAbout.length - 1 : current - 1)
    }
    console.log(current)



    return (
        <div>
            <h3 className='about__title' data-aos="fade-up" data-aos-delay="200">About Us</h3>
            <div className="about" id="about">
                <div className="image" data-aos="fade-right" data-aos-delay="200">
                    {
                        dataAbout.map((slide, index) => {
                            return (
                                <div key={index} >
                                    {index === current && (
                                        <img src={slide.image} alt=''></img>
                                    )}
                                </div>
                            )
                        })

                    }
                    <button onClick={prevSlider} className="btn__slide-left"><BiArrowFromLeft /></button>
                    <button onClick={nextSlider} className="btn__slide-right"><BiArrowFromRight /></button>
                </div>

                <div className="content" data-aos="fade-left" data-aos-delay="200">
                    <h3 className="title">Tutorials</h3>
                    <p>Here are some of the free tutorials I've made over the years. They are and always will be free for everyone :)

                        I don't believe in charging for tutorials because I learned a lot as a child from free online tutorials, and it's good to give back to the community. My parents didn't support my career as an artist and if it wasn't for those free tutorials I wouldn't have been able to afford to learn.</p>
                    <div className="icons">
                        <h3> <i><TiTick /></i> best price </h3>
                        <h3> <i><TiTick /></i> Best Service </h3>
                        <h3> <i><TiTick /></i> True Color </h3>
                        <h3> <i><TiTick /></i> Good Paper </h3>
                        <h3> <i><TiTick /></i> Safe shipping </h3>
                    </div>
                    <a href="#" className="btn">read more</a>
                </div>
            </div>
        </div>
    );
}

AOS.init({
    duration: 500,
});

export default About;