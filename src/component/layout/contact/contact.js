import AOS from 'aos';
import 'aos/dist/aos.css';

import { BsMap } from 'react-icons/bs'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'



function contact() {
    return (
        <div>
            <section className="contact" id="contact">

                <div className="heading">
                    {/* <img src="images/title-img.png" alt=""></img> */}
                    <h3>contact us</h3>
                </div>

                <div className="row">

                    <iframe data-aos="fade-up" data-aos-delay="200" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2143279886805!2d106.71928517469743!3d10.794890189355035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2f8f30911%3A0x36ac5073f8c91acd!2sLandmark%2081!5e0!3m2!1svi!2s!4v1670135035154!5m2!1svi!2s" loading="lazy"></iframe>

                    <div className="form">

                        <div className="icons-container">

                            <div className="icons" data-aos="fade-up" data-aos-delay="200">
                                <i><BsMap /></i>
                                <h3>address :</h3>
                                <p>Landmark 81 - HCM</p>
                            </div>

                            <div className="icons" data-aos="fade-up" data-aos-delay="200">
                                <i><AiOutlineMail /></i>
                                <h3>email :</h3>
                                <p>nduybao420@gmail.com</p>
                            </div>

                            <div className="icons" data-aos="fade-up" data-aos-delay="200">
                                <i><AiOutlinePhone /></i>
                                <h3>phone :</h3>
                                <p>+123-456-7890</p>
                            </div>

                        </div>

                        <form action="">
                            <input data-aos="fade-up" data-aos-delay="200" type="text" placeholder="full name" className="box"></input>
                            <input data-aos="fade-up" data-aos-delay="200" type="email" placeholder="email" className="box"></input>
                            <input data-aos="fade-up" data-aos-delay="200" type="number" placeholder="phone" className="box"></input>
                            <textarea data-aos="fade-up" data-aos-delay="200" name="" placeholder="message" className="box" id="" cols="30" rows="10"></textarea>
                            <input data-aos="fade-up" data-aos-delay="200" type="submit" value="send message" className="btn"></input>
                        </form>

                    </div>

                </div>

            </section>
        </div>
    );
}

AOS.init({
    duration: 500,
});
export default contact;