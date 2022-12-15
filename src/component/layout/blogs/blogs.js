import image1 from '../../../asset/images/image__post/image1.JPG'
import image2 from '../../../asset/images/image__post/image2.jpg'
import image3 from '../../../asset/images/image__post/image3.jpg'


function blogs() {
    return (
        <div>
            <section className="blogs" id="blogs">

                <div className="heading">
                    <img src="images/title-img.png" alt=""></img>
                    <h3>daily posts</h3>
                </div>

                <div className="box-container">

                    <div className="box" data-aos="fade-up" data-aos-delay="200">
                        <div className="image">
                            <img src={image1} alt=""></img>
                            <div className="icons">
                                <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2022 </a>
                                <a href="#"> <i className="fas fa-user"></i> by yuumei </a>
                            </div>
                        </div>
                        <div className="content">
                            <h3>blog title goes here.</h3>
                            <p>I want to thank you all for another year of unbelievable support for our annual charity art sale</p>
                            <a href="#" className="btn">read more</a>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up" data-aos-delay="200">
                        <div className="image">
                            <img src={image2} alt=""></img>
                            <div className="icons">
                                <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2022 </a>
                                <a href="#"> <i className="fas fa-user"></i> by yuumei </a>
                            </div>
                        </div>
                        <div className="content">
                            <h3>blog title goes here.</h3>
                            <p>I want to thank you all for another year of unbelievable support for our annual charity art sale</p>
                            <a href="#" className="btn">read more</a>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up" data-aos-delay="200">
                        <div className="image">
                            <img src={image3} alt=""></img>
                            <div className="icons">
                                <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2022 </a>
                                <a href="#"> <i className="fas fa-user"></i> by yuumei </a>
                            </div>
                        </div>
                        <div className="content">
                            <h3>blog title goes here.</h3>
                            <p>I want to thank you all for another year of unbelievable support for our annual charity art sale</p>
                            <a href="#" className="btn">read more</a>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
}

export default blogs;