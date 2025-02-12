import React from "react";
import Slider from "react-slick";
import { MainBanner, WhiteFade, PositionFixed, FormCard } from "./styles.ts";
import { useContext } from "react";
import { Context } from "../Context.js";

import BannerImg2 from "../assets/imgs/locationImgs/IMG2.png";
import BannerImg9 from "../assets/imgs/locationImgs/IMG9.png";
import BannerImg12 from "../assets/imgs/locationImgs/IMG12.png";
import BannerImg15 from "../assets/imgs/locationImgs/IMG15.png";

function BackGroundImgs() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
    speed: 1000,
    fade: true,
  };

  const { toggleForm } = useContext(Context);

  return (
    <PositionFixed>
      <MainBanner className="slider-container">
        <Slider {...settings} className="Slider">
          <img src={BannerImg9} alt="" />
          <img src={BannerImg12} alt="" />
          <img src={BannerImg15} alt="" />
          <img src={BannerImg2} alt="" />
        </Slider>
        <WhiteFade />
      </MainBanner>
      {toggleForm && (
        <FormCard>
          <p>Nome:</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Nome Completo"
            required
          />
          <p>Telefone:</p>
          <input
            type="number"
            name=""
            id=""
            placeholder="Telefone/Whatsapp"
            required
          />
          <p>Mensagem:</p>
          <textarea
            name=""
            id=""
            placeholder="Deixe sua mensagem aqui"
            required
          />
          <button>Enviar</button>
        </FormCard>
      )}
    </PositionFixed>
  );
}

export default BackGroundImgs;
