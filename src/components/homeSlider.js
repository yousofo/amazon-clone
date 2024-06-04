import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import am6 from "../media/am1jpg.jpg";
import am2 from "../media/am2.jpg";
import am3 from "../media/am3.jpg";
import am4 from "../media/am4.jpg";
import am5 from "../media/am5.jpg";
import am1 from "../media/am6.jpg";
import amHeadset from "../media/headset.jpg";
import amChair from "../media/chair.jpg";
import maKeyboard from "../media/keyboard.jpg";
import amMouse from "../media/mouse.jpg";
import amSandwich from "../media/sandwich.jpg";
import amHealth from "../media/health.jpg";
import amLogin from "../media/login.jpg";
import amElectronics2 from "../media/electronics2.png";
import amDresses from "../media/dresses.jpg";
import amFashion from "../media/fashion.jpg";
import amCate1 from "../media/cate1.jpg";
import amCate2 from "../media/cate2.jpg";
import amCate3 from "../media/cate3.jpg";
import amCate4 from "../media/cate4.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function HomeSlider() {
  let amImgs = [am1, am2, am3, am4, am5, am6];
  let [big1, setBig1] = useState([]);
  let [big2, setBig2] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=10")
      .then((e) => setBig1(e.data));
    axios
      .get("https://fakestoreapi.com/products?sort=desc&limit=10")
      .then((e) => setBig2(e.data));
  }, []);
  return (
    <div className="home">
      <div className="homeslider">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          loop={true}
        >
          {amImgs.map((e) => {
            return (
              <SwiperSlide>
                <div className="item">
                  <img src={e} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="offers">
        <div className="small">
          <div className="item gaming">
            <Link to="/shopping">
              <div className="item-con">
                <div className="in">
                  <div className="in-con">
                    <h4>Gaming accessories</h4>
                    <div className="prod-con">
                      <div className="prod cp">
                        <img src={amHeadset} alt="" />
                        <p>Headsets</p>
                      </div>
                      <div className="prod cp">
                        <img src={maKeyboard} alt="" />
                        <p>Keyboards</p>
                      </div>
                      <div className="prod cp">
                        <img src={amMouse} alt="" />
                        <p>Mouses</p>
                      </div>
                      <div className="prod cp">
                        <img src={amChair} alt="" />
                        <p>Chairs</p>
                      </div>
                    </div>
                  </div>
                  <span className="more cp">See more</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="item deals">
            <div className="item-con">
              <div className="in">
                <div className="in-con">
                  <h4>Top Deal</h4>
                  <img src={amSandwich} alt="" />
                  <div className="discount">
                    <p id="discount">Up to 32% off</p>
                    <span>Top deal</span>
                  </div>
                  <p>BIG Yum</p>
                </div>
                <span className="more cp">See more</span>
              </div>
            </div>
          </div>
          <div className="item Health">
            <div className="item-con">
              <div className="in">
                <div className="in-con">
                  <h4 className="mb10">Health & Personsl Care</h4>
                  <img src={amHealth} alt="" />
                </div>
                <span className="more cp">See more</span>
              </div>
            </div>
          </div>
          <div className="item login">
            <div className="item-con con2">
              <div className="in1">
                <img src={amLogin} alt="" />
              </div>
              <div className="in2">
                <h4>Sign in for the best experience</h4>
                <button>Sign in securely</button>
              </div>
            </div>
          </div>
          <div className="item electronics">
            <div className="item-con ">
              <div className="in">
                <div className="in-con ">
                  <h4 className="mb10">Electronics</h4>
                  <img src={amElectronics2} alt="" />
                </div>
                <span className="more cp">See more</span>
              </div>
            </div>
          </div>
          <div className="item dresses">
            <div className="item-con">
              <div className="in">
                <div className="in-con">
                  <h4 className="mb10">Dresses</h4>
                  <img src={amDresses} alt="" />
                </div>
                <span className="more cp">See more</span>
              </div>
            </div>
          </div>
          <div className="item fashion">
            <div className="item-con">
              <div className="in">
                <div className="in-con">
                  <h4 className="mb10">Beauty picks</h4>
                  <img src={amFashion} alt="" />
                </div>
                <span className="more">See more</span>
              </div>
            </div>
          </div>
          <div className="item category">
            <div className="item-con">
              <div className="in">
                <div className="in-con">
                  <h4>Shop by Category</h4>
                  <div className="prod-con">
                    <div className="prod">
                      <img src={amCate1} alt="" />
                      <p>Comuters & Accessories</p>
                    </div>
                    <div className="prod">
                      <img src={amCate2} alt="" />
                      <p>Video Games</p>
                    </div>
                    <div className="prod">
                      <img src={amCate3} alt="" />
                      <p>Baby</p>
                    </div>
                    <div className="prod">
                      <img src={amCate4} alt="" />
                      <p>Toys & Games</p>
                    </div>
                  </div>
                </div>
                <span className="more">Shop now</span>
              </div>
            </div>
          </div>
        </div>
        <div className="big">
          <div className="item">
            <div className="item-con">
              <h4>Frequently repurchased in Home</h4>
              <div className="in">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={0}
                  slidesPerView={5}
                  navigation
                  scrollbar={{ draggable: true }}
                  loop={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  {big2.map((e) => {
                    return (
                      <SwiperSlide>
                        <div className="item">
                          <img src={e.image} alt="" />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-con">
              <h4>Popular items this season</h4>
              <div className="in">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={0}
                  slidesPerView={5}
                  navigation
                  scrollbar={{ draggable: true }}
                  loop={false}
                  // onSwiper={(swiper) => console.log(swiper)}
                  // onSlideChange={() => console.log("slide change")}
                >
                  {big1.map((e) => {
                    return (
                      <SwiperSlide>
                        <div className="item">
                          <img className="ma" src={e.image} alt="" />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
