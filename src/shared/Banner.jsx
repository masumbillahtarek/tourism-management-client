import bg1 from '../assets/bg-1.jpg'
import bg2 from '../assets/bg-2.jpg'
import bg3 from '../assets/bg-3.jpg'
import bg4 from '../assets/bg-4.jpg'

const Banner = () => {
    return (
<div className='mt-10 relative'>
        <div className="carousel w-full h-[550px] rounded-xl ">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={bg1}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={bg2}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={bg3}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={bg4}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    <div className='absolute top-0 left-36 bg-[#11111136] text-white w-3/4 mx-auto py-[143px]'>
        <h3 className='text-7xl font-bold text-center '>Explore the World, One Journey at a Time</h3>
        <p className='text-2xl text-center mt-6'>TraveLux Adventures is a global travel company offering unique and immersive journeys to stunning destinations around the world. From cultural getaways to nature-filled escapes, we design unforgettable travel experiences tailored to every explorer.

</p>
    </div>
</div>
    );
};

export default Banner;