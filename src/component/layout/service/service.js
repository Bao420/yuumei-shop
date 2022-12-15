import { FaPrint } from 'react-icons/fa'
import { DiDigitalOcean } from 'react-icons/di'
import { BiSticker } from 'react-icons/bi'
//----------------------------------------

import image1 from '../../../asset/images/image__service/image1.jpg'
import image2 from '../../../asset/images/image__service/image2.jpg'
import image3 from '../../../asset/images/image__service/image3.jpg'


import AOS from 'aos';
import 'aos/dist/aos.css';


function service() {
    return (
        <div>
            <section className="service">

                <div className="box" data-aos="fade-up" data-aos-delay="200">
                    <img src={image1}></img>
                    <h3>Sanctuary: The Art Book of Yuumei</h3>
                    <p>Hardcover with 132 pages, filled with paintings of various styles and themes.</p>
                </div>

                <div className="box" data-aos="fade-up" data-aos-delay="200">
                    <img src={image2}></img>
                    <h3>Tote Bags</h3>
                    <p>Canvas tote bags with vibrant artwork on both sides and on the straps!</p>
                </div>

                <div className="box" data-aos="fade-up" data-aos-delay="200">
                    <img src={image3}></img>
                    <h3>Stickers, Bookmarks and More</h3>
                    <p>From magical sticker sets to double sided bookmarks, from gothic playing cards to whimsy T shirts.</p>
                </div>

            </section>
        </div>
    );
}

AOS.init({
    duration: 500,
});

export default service;

