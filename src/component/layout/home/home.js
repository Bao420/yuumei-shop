import AOS from 'aos';
import 'aos/dist/aos.css';
import image_home from '../../../asset/images/image__home/image1.png'

function home() {
    return (
        <div>
            <section className="home" id="home">
                <div className="content">

                    <img data-aos="fade-up" data-aos-delay="200" src={image_home} alt="" className='home__image'></img>
                    <h3 data-aos="fade-up" data-aos-delay="200">The art and musings</h3>
                    <p data-aos="fade-up" data-aos-delay="200">Yuumei means light and darkness, strange and deep, hades, and semidarkness.</p>
                    <a data-aos="fade-up" data-aos-delay="200" href="#menu" className="btn">our picture</a>
                </div>
            </section>
        </div>
    );
}

AOS.init({
    duration: 500,
});

export default home;