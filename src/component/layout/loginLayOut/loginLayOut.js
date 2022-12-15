import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

function LoginLayOut() {
    return (
        <div>
            <Link
                to='/login'
                data-aos="fade-left"
                data-aos-delay="200"
                className='login__layout'
            >
                <AiOutlineUser />
            </Link>
        </div>
    );
}

AOS.init({
    duration: 500,
});

export default LoginLayOut;