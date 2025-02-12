import React from "react";
import {
  BlogInstaContainer,
  BlogInstaCard,
  BlogInstaTittle,
  BlogInstaImg,
  BlogInstaLink,
  ClickAnimation,
} from "./style.ts";

import Insta1 from "../../assets/imgs/instagramPhotos/insta1.jpg";
import Insta2 from "../../assets/imgs/instagramPhotos/insta2.jpg";
import Insta3 from "../../assets/imgs/instagramPhotos/insta3.jpg";

import clickImg from "../../assets/imgs/clickImg.png";

const InstaBanner = () => {
  return (
    <BlogInstaLink
      href="https://www.instagram.com/abf_advogados?igshid=YmMyMTA2M2Y%3D"
      target="_blank"
      rel="noreferrer"
    >
      <BlogInstaContainer>
        <BlogInstaCard>
          <BlogInstaTittle>
            <i className="fa-brands fa-instagram"></i>
            <h3>
              Visite nosso <br></br>
              <span>Instagram</span> para<br></br> mais informações
            </h3>
          </BlogInstaTittle>
          <BlogInstaImg>
            <img src={Insta1} alt="" />
            <img src={Insta2} alt="" />
            <img src={Insta3} alt="" />
          </BlogInstaImg>
        </BlogInstaCard>
        <ClickAnimation>
          <img src={clickImg} alt="" className="fa-beat" />
        </ClickAnimation>
      </BlogInstaContainer>
    </BlogInstaLink>
  );
};

export default InstaBanner;
