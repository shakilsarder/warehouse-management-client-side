
import img from '../../images/laptops-header.png'
import hp from '../../images/hp (1).png'
import lenovo from '../../images/lenovo (1).png'
import mac from '../../images/mac (1).png'
import dell from '../../images/dell (2).png'
import asus from '../../images/asus (1).png'
import acer from '../../images/acer (2).png'
import Products from '../Products/Products';
import './Home.css'
import { Link } from 'react-router-dom'
import Contact from '../QuesAns/Contact'

const Home = () => {

    return (
        <div className='container'>
            <div className='d-md-flex  justify-content-evenly align-items-center'>

                <div className='p-5 '>
                    <h2 className='text-secondary fw-bold'>About <span className='text-info' >Laptop WareHouse</span></h2>
                    <p className=' w-100 text-dark text-align fs-4'>We are the World best trustable  because We supply all major brands including; Dell, HP, Toshiba, Acer, Apple, Asus, Fujitsu & Lenovo, Promethean, MSI, Smart and many more. As a fast growing supplier we can source everything from a mouse right up to a complete IT Suite. </p>
                </div>
                <div className='p-5 '>
                    <img className='w-100' src={img} alt="" />
                </div>
            </div>
            <Products></Products>
            <div className='text-center my-5'>
                <button className='btn btn-secondary fw-bold'><Link className='text-decoration-none text-white' to='/manageInventory'>Manage Inventory</Link></button>
            </div>

            <div className='bg-light py-3 px-5'>
                <div className='text-center mb-5 '>
                    <h2 className='text-success fs-1 fw-bold'>Our Best Sellers Partners</h2>
                </div>
                <div className='d-md-flex align-items-center justify-content-between'>
                    <Link to='/products'><img src={hp} alt="" /></Link>
                    <Link to='/products'><img className='ms-2' src={lenovo} alt="" /></Link>
                    <Link to='/products'><img src={mac} alt="" /></Link>
                    <Link to='/products'><img src={asus} alt="" /></Link>
                    <Link to='/products'><img src={dell} alt="" /></Link>
                    <Link to='/products'><img className='ms-3' src={acer} alt="" /></Link>
                </div>

            </div>

            <div className='bg-light px-3'>
                <div className='text-center mt-5'>
                    <h2 className='text-secondary fs-1 fw-bold'>Our Delivery Info</h2>
                </div>
                <div className='mb-5 mt-3 fs-4 text-align'>
                    <p>Our suppliers supply the original and fresh products which is directly imported from main origin. Our service is ???First Class??? with next day delivery as standard and quotations returned promptly. We offer extremely competitive prices as we work closely with manufacturers and suppliers in order to obtain the very best prices. The success of our business has been on our reputation and long standing relationships with satisfied customers. All tracking id will sent by emailed.</p>
                    <p>Our products should arrive in perfect condition. Any problems please do not hesitate to contact us either through our contact number, or by email.</p>
                    <p className='pb-3'>Please check our <Link to='/returnPolicy' className='text-decoration-none'>Returns Policy</Link> for returning goods.</p>
                </div>

            </div>
            <Contact></Contact>


        </div>
    );
};

export default Home;