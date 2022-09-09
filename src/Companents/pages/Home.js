import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "./Constlar";

export function Home() {
  // console.log(data);
  useEffect(() => {
    AOS.init();
  });
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const [update, setUpdate] = useState(false);
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("meva")) || []
  );

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem("meva")) || []);
  }, [update]);

  useEffect(() => {
    let total = 0;
    basket.map((item) => {
      total += item.narxi * item.count;
      return setTotal(total);
    });
  }, [update, basket]);

  function dicrement(id) {
    const Mydata = [...basket];

    Mydata.map((item) => {
      if (item.id === id) {
        item.count <= 1 ? (item.count = 1) : item.count--;
        setBasket(Mydata);
        localStorage.setItem("meva", JSON.stringify(Mydata));
      }
      return Mydata;
    });
  }
  function increment(id) {
    const Mydata = [...basket];

    Mydata.map((item) => {
      if (item.id === id) item.count++;
      setBasket(Mydata);
      localStorage.setItem("meva", JSON.stringify(Mydata));
    });
  }

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className="card">
      <div className="tillo">
        <div className="yangilar">
          <div
            className="cardes"
            data-aos="fade-down-right"
            data-aos-duration="1500"
          >
            <div className="cardcha">
              <h3>6% OFF</h3>
              <h2>Buy More & Save More</h2>
              <p>Beverage</p>
            </div>
            <button className="bten1">shop now</button>
          </div>
          <div
            className="cardes2"
            data-aos="fade-down-right"
            data-aos-duration="1500"
          >
            <div className="cardcha">
              <h3>10% OFF</h3>
              <h2>Buy More & Save More</h2>
              <p>Nuts & Snacks</p>
            </div>
            <button className="bten1">shop now</button>
          </div>
          <div
            className="cardes3"
            data-aos="fade-down-left"
            data-aos-duration="1500"
          >
            <div className="cardcha">
              <h3>6% OFF</h3>
              <h2>Buy More & Save More</h2>
              <p>Fresh Vegetables</p>
            </div>
            <button className="bten1">shop now</button>
          </div>
          <div
            className="cardes4"
            data-aos="fade-down-left"
            data-aos-duration="1500"
          >
            <div className="cardcha">
              <h3>25% OFF</h3>
              <h2>Buy More & Save More</h2>
              <p>Fresh Fruits</p>
            </div>
            <button className="bten1">shop now</button>
          </div>
          <div
            className="cardes5"
            data-aos="fade-down-left"
            data-aos-duration="1500"
          >
            <div className="cardcha">
              <h3>15% OFF</h3>
              <h2>Buy More & Save More</h2>
              <p>Eggs & Dairy</p>
            </div>
            <button className="bten1">shop now</button>
          </div>
        </div>
      </div>
      <div className="nomi">
        <p>Shop By</p>
        <h1>Categories</h1>
      </div>
      <div className="carusel1">
        <div className="carusel">
          <Carousel afterChange={onChange}>
            <div>
              <img src="img/olma.png" alt="" className="img1" />
            </div>
          </Carousel>
        </div>
        <div className="carusel">
          <Carousel afterChange={onChange}>
            <div>
              <img src="img/shopping.arava.png" alt="" className="img1" />
            </div>
          </Carousel>
        </div>
        <div className="carusel">
          <Carousel afterChange={onChange}>
            <div>
              <img src="img/milk.png" alt="" className="img1" />
            </div>
          </Carousel>
        </div>
        <div className="carusel">
          <Carousel afterChange={onChange}>
            <div>
              <img src="img/burger.png" alt="" className="img1" />
            </div>
          </Carousel>
        </div>
        <div className="carusel">
          <Carousel afterChange={onChange}>
            <div>
              <img src="img/card4.png" alt="" className="img1" />
            </div>
          </Carousel>
        </div>
        <div className="carusel">
          <Carousel afterChange={onChange}>
            <div>
              <img src="img/home.png" alt="" className="img1" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="nomi">
        <p>For You</p>
        <h1>Top Featured Products</h1>
      </div>
    <div className="cardlar">
      {data.data12.map((item) => {
        return (
          <div className="cardlar2">
            <button className="bten">15%Off</button>
            <img src={item.img} alt="" />
            <h4>{item.text}</h4>
            <h1>{item.name}</h1>
            <h6>{item.narxi}</h6>
            <p>{item.count}</p>
            <img src={item.imges} alt="" />
          </div>
        )
      })}
    </div>
      
    </div>
  );
}
