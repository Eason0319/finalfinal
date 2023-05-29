import React, { Component } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./roundimg.module.css"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className={styles.round}>
        <div className={styles.roundtitle}>
          <p className={styles.news}>最新消息</p>
        </div>
        <Slider {...settings} className={styles.slider}>
          <div className={styles.newsimg}>
            <img src="/images/news1.jpg" alt="" />
            <h2>【 YAMAHA P-S500 】</h2>
            <h4>輔助學習的最新利器！！</h4>
          </div>
          <div className={styles.newsimg}>
            <img src="/images/news2.jpg" alt="" />
            <h2>【 關於木吉他 】</h2>
            <h4>木頭到底差在哪裡?</h4>
          </div>
          <div className={styles.newsimg}>
            <img src="/images/news3.jpg" alt="" />
            <h2>【 關於商品 】</h2>
            <h4>電容 / 動圈 / USB 麥克風差在哪？</h4>
          </div>
          <div className={styles.newsimg}>
            <img src="/images/news4.jpg" alt="" />
            <h2>【 關於商品 】</h2>
            <h4>吉他手的金手指<br />移調夾是什麼？怎麼用？</h4>
          </div>
          <div className={styles.newsimg}>
            <img src="/images/news5.jpg" alt="" />
            <h2>【 關於工程部 】</h2>
            <h4>工程部有話要說－舞台的奧秘。</h4>
          </div>
          <div className={styles.newsimg}>
            <img src="/images/news6.jpg" alt="" />
            <h2>【 關於商品 】</h2>
            <h4>越氣樂器行嚴選2022貝斯入門推薦！</h4>
          </div>
        </Slider>
      </div>
    );
  }
}
