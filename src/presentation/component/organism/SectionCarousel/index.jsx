import { useState } from "react";
import Slider from "react-slick";
import moment from "moment";
import DatePicker from "react-datepicker";

// --- style carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// --- style datepicker
import "react-datepicker/dist/react-datepicker.css";

// --- style
import style from "./style.module.scss";

const SectionCarousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={style.section}>
      <div className="container">
        <h2 className={style.title}>Carousel</h2>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <p>{moment(startDate).format('MMM Do YY')};</p>
        <Slider {...settings}>
          <div>
            <img src="asset/image/about.jpg" alt="1" />
          </div>
          <div>
            <img src="asset/image/banner.jpg" alt="2" />
          </div>
          <div>
            <img src="asset/image/hero-banner.jpg" alt="3" />
          </div>
          <div>
            <img src="asset/image/luxury.jpg" alt="4" />
          </div>
        </Slider>
        {/* {data !== null ? (
          <div className={style.list}>
            {data.map((val, idx) => (
              <div className={style.item} key={`pic${idx}`}>
                <PostCard title={val.title} body={val.body} />
              </div>
            ))}
          </div>
        ) : null}
        {error !== null ? <p className={style.error}>{error}</p> : null} */}
      </div>
    </div>
  );
};

export default SectionCarousel;