  // core version + navigation, pagination modules:
  import Swiper, { Autoplay, Navigation, Pagination, SwiperSlide } from 'swiper';

  // import Swiper and modules styles
  // import 'swiper/scss';
  // import 'swiper/scss/navigation';
  // import 'swiper/scss/pagination';
 

  // configure Swiper to use modules
  Swiper.use([Autoplay, Navigation, Pagination]);

  const style = {

    style1 :  {
        backgroundImage: `url("/build.jpeg")` 
    },
    style2 :  {
      backgroundImage: `url("/build.jpeg")` 
    },
    style3 :  {
      backgroundImage: `url("/build.jpeg")` 
    }
        

  }
  // init Swiper:
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

const Slider = () => {
    return ( 
        <div className="SliderBig">
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide" style={style.style1}>Slide 1</div>
                    <div className="swiper-slide" style={style.style2}>Slide 2</div>
                    <div className="swiper-slide" style={style.style3}>Slide 3</div> 
                </div>

            <div className="swiper-pagination"></div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>


            <div className="swiper-scrollbar"></div>
            </div>
        </div>
    );
}
export default Slider;