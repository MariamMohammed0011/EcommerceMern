import React from "react";
import Slider from "react-slick";

export default function HomeBanner() {
     var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
     <div className='homeBannerSection'>
         <Slider {...settings}>
            <div className="item">
                <img src="" alt="" className="w-100"/>

            </div>
             <div className="item">
                <img src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/article6229.jpg" alt="" className="w-100"/>

            </div>
             <div className="item">
                <img src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/article6229.jpg" alt="" className="w-100"/>

            </div>
             <div className="item">
                <img src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/article6229.jpg" alt="" className="w-100"/>

            </div>
         </Slider>
     </div>
    
    
    </>
  )
}
