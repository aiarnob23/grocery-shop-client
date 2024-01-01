import { Button } from '@mui/material';
import banner1 from '../../../assets/Banner/banner1.jpg';
import banner2 from '../../../assets/Banner/banner2.jpg';
import banner3 from '../../../assets/Banner/banner3.jpg';
import banner4 from '../../../assets/Banner/banner4.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=''>
            <div className="carousel w-full h-[800px]">
  <div id="slide1" className="carousel-item  relative w-full">
  <div className="hero rounded-lg" style={{backgroundImage: `url(${banner1})`}}>
  <div className="hero-overlay rounded-lg bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Life is like waiting in line at the grocery store. You wait, you slowly move forward, you pay the price, then you exit unsatisfied and broke.</p>
      <Link to='/productsDisplay'><Button variant="contained">Explore</Button></Link>
    </div>
  </div>
</div>
    <div className="absolute flex right-6 gap-10 bottom-6 ">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="hero rounded-lg" style={{backgroundImage: `url(${banner2})`}}>
  <div className="hero-overlay rounded-lg bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Life is like waiting in line at the grocery store. You wait, you slowly move forward, you pay the price, then you exit unsatisfied and broke.</p>
      <Link to='/productsDisplay'><Button variant="contained">Explore</Button></Link>
    </div>
  </div>
</div>
<div className="absolute flex right-6 gap-10 bottom-6 ">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="hero rounded-lg" style={{backgroundImage: `url(${banner3})`}}>
  <div className="hero-overlay rounded-lg bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Life is like waiting in line at the grocery store. You wait, you slowly move forward, you pay the price, then you exit unsatisfied and broke.</p>
      <Link to='/productsDisplay'><Button variant="contained">Explore</Button></Link>
    </div>
  </div>
</div>
<div className="absolute flex right-6 gap-10 bottom-6 ">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className="hero rounded-lg" style={{backgroundImage: `url(${banner4})`}}>
  <div className="hero-overlay rounded-lg bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Life is like waiting in line at the grocery store. You wait, you slowly move forward, you pay the price, then you exit unsatisfied and broke.</p>
      <Link to='/productsDisplay'><Button variant="contained">Explore</Button></Link>
    </div>
  </div>
</div>
<div className="absolute flex right-6 gap-10 bottom-6 ">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;