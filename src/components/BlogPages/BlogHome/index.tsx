import React from "react";
import SeachBar from "../SeachBar/index.tsx";
import InstaBanner from "../InstaBanner/index.tsx";
import {
  BlogContainer,
  BlogSubContainer,
  BlogMainCard,
  BlogTittle,
  BlogText,
  FadeBackground,
  LogoBackground,
  AutorMainCard,
} from "./styles.ts";

import henrique from "../../assets/imgs/henrique/Henrique7.png";

import background from "../../assets/imgs/pexels.jpg";
import pexelsDireito from "../../assets/imgs/pexelsSora.jpg";
import pexelsGuerra from "../../assets/imgs/pexelsChai.jpg";
import pexelsPolice from "../../assets/imgs/pexelsPolice.jpg";
function BlogHome() {
  const info = [
    {
      id: 1,
      BackGroundImg: background,
      AutorImg: henrique,
      AutorNome: "Henrique Fernandes",
      BlogTittle: "TITULO DO ARTIGO",
      BlogTxt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum saepe corporis error fuga facere eum sed iure sapiente modi, nostrum aut placeat exercitationem non sit consequatur! Assumenda maxime quaerat non molestiae animi in sit explicabo fuga tenetur, laborum accusamus. Obcaecat",
    },
    {
      id: 2,
      BackGroundImg: pexelsDireito,
      AutorImg: henrique,
      AutorNome: "Henrique Fernandes",
      BlogTittle: "TITULO DO ARTIGO",
      BlogTxt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum saepe corporis error fuga facere eum sed iure sapiente modi, nostrum aut placeat exercitationem non sit consequatur! Assumenda maxime quaerat non molestiae animi in sit explicabo fuga tenetur, laborum accusamus. Obcaecat",
    },
    {
      id: 3,
      BackGroundImg: pexelsGuerra,
      AutorImg: henrique,
      AutorNome: "Henrique Fernandes",
      BlogTittle: "TITULO DO ARTIGO",
      BlogTxt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum saepe corporis error fuga facere eum sed iure sapiente modi, nostrum aut placeat exercitationem non sit consequatur! Assumenda maxime quaerat non molestiae animi in sit explicabo fuga tenetur, laborum accusamus. Obcaecat",
    },
    {
      id: 4,
      BackGroundImg: pexelsPolice,
      AutorImg: henrique,
      AutorNome: "Henrique Fernandes",
      BlogTittle: "TITULO DO ARTIGO",
      BlogTxt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum saepe corporis error fuga facere eum sed iure sapiente modi, nostrum aut placeat exercitationem non sit consequatur! Assumenda maxime quaerat non molestiae animi in sit explicabo fuga tenetur, laborum accusamus. Obcaecat",
    },
  ];

  return (
    <BlogContainer>
      <LogoBackground />
      <SeachBar />
      <BlogSubContainer>
        {info.map((info) => (
          <>
            <BlogMainCard
              style={{ backgroundImage: `url(${info.BackGroundImg})` }}
              key={info.id}
            >
              <AutorMainCard>
                <img src={info.AutorImg} alt="" />
                <p>Autor(a) : {info.AutorNome}</p>
              </AutorMainCard>
              <BlogTittle>
                <h2>{info.BlogTittle}</h2>
              </BlogTittle>
              <BlogText>
                <p>{info.BlogTxt}</p>
              </BlogText>
              <FadeBackground />
            </BlogMainCard>
          </>
        ))}
      </BlogSubContainer>
      <InstaBanner />
    </BlogContainer>
  );
}

export default BlogHome;
