import AOS from 'aos';
import 'aos/dist/aos.css';

import image1 from "../../../asset/images/image__reviews/image1.jpg"
import image2 from "../../../asset/images/image__reviews/image2.jpg"
import image3 from "../../../asset/images/image__reviews/image3.jpg"





function reviews() {
    return (
        <div>
            <section className="reviews" id="reviews">

                <div className="heading">
                    <h3>Artist</h3>
                </div>

                <div className="box-container">

                    <div className="box" data-aos="fade-up" data-aos-delay="200">
                        <img src={image1} alt=""></img>
                        <h3>YuuMei</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui accusamus autem! Veniam exercitationem adipisci in excepturi labore magni voluptatibus?</p>

                    </div>

                    <div className="box" data-aos="fade-up" data-aos-delay="200">
                        <img src={image2} alt=""></img>
                        <h3>JG-KiD</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui accusamus autem! Veniam exercitationem adipisci in excepturi labore magni voluptatibus?</p>

                    </div>

                    <div className="box" data-aos="fade-up" data-aos-delay="200">
                        <img src={image3} alt=""></img>
                        <h3>john deo</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui accusamus autem! Veniam exercitationem adipisci in excepturi labore magni voluptatibus?</p>

                    </div>

                </div>

            </section>
        </div>
    );
}

AOS.init({
    duration: 500,
});
export default reviews;
