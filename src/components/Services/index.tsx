import React, { useEffect, useState } from "react";
import {
  ServicesBackground,
  ServicesContainer,
  ServicesCard,
  ClickAnimation,
  ServiceCardTitle,
  ServiceIcon,
  ServiceCardText,
  ServiceImg,
  ActiveText,
  VideoCard,
  SkillsCard,
  ActiveEntreEmContato,
} from "./styles.ts";

import ImgHenrique from "../assets/imgs/henrique/Henrique6.png";
import ImgAna from "../assets/imgs/anaF/anaF.png";
import ImgGabriele from "../assets/imgs/gabriele/gabriele1.jpg";
import ImgLarissa from "../assets/imgs/larissa/larissa.png";

import clickImg from "../assets/imgs/clickImg.png";

import henriqueVideo from "../assets/videos/henriqueVideo.mp4";
import anaVideo from "../assets/videos/anaVideo.mp4";
import gabiVideo from "../assets/videos/gabiVideo.mp4";
import larissaVideo from "../assets/videos/larissaVideo.mp4";

const infos = [
  {
    id: 1,
    icone: <i className="fa-solid fa-handcuffs"></i>,
    title: "Criminal",
    text: "Defesa jurídica especializada em crime econômico, financeiro, tributário, licitatório,  organização criminosa, tráfico de drogas, e outros",
    activeName: <h1>Dr. HENRIQUE FERNANDES DE CASTRO</h1>,
    activeTxt: (
      <>
        <p>
          Advogado, Inscrito na Ordem dos Advogados do Brasil sob o Nº{" "}
          <strong>440.084</strong>
        </p>
        <p>
          {/*           Formado em Direito pela Universidade de Franca em 2019, Pós-graduado
          em Direito Penal e Processo Penal pela Universidade de Santa Cruz do
          Sul, Pós-graduado em Direito Penal Econômico pela Pontifícia
          Universidade Católica de Minas Gerais, Pós-graduando em Advocacia na
          Fazenda Pública pela Legale, Pós-graduado em Direito Previdenciário
          pela Legale, com título de especialista em licitações e contratos
          administrativos pelo CEISC.<span></span> */}
        </p>
      </>
    ),
    img: ImgHenrique,
    video: henriqueVideo,
  },
  {
    id: 2,
    icone: <i className="fa-solid fa-book"></i>,
    title: "Trabalhista",
    text: "Defesa jurídica especializada em crime econômico, financeiro, tributário, licitatório,  organização criminosa, tráfico de drogas, e outros",
    activeName: <h1>Dra. ANA FLAVIA ALVES</h1>,
    activeTxt: (
      <>
        <p>
          Advogada, Inscrita na Ordem dos Advogados do Brasil sob o Nº{" "}
          <strong>428.031</strong>
        </p>
        <p>
          {/*           Formada pela faculdade UniSeb de Ribeirão Preto em 2019.<br></br>Pós
          Graduada em Direito e Processo do Trabalho pela USP Ribeirão Preto,
          coautora dos artigos “as responsabilidades familiares ante a promoção
          da igualdade de oportunidades e tratamento no Brasil á luz da OIT”,
          publicado nos anais do “V Seminário Internacional de Pesquisa
          (RE)pensando o Direito da Faculdade de Direito da USP em conjunto a
          UNESP” */}
        </p>
      </>
    ),
    img: ImgAna,
    video: anaVideo,
  },
  {
    id: 3,
    icone: <i className="fa-solid fa-scale-balanced"></i>,
    title: "Trabalhista",
    text: "Defesa jurídica especializada em crime econômico, financeiro, tributário, licitatório,  organização criminosa, tráfico de drogas, e outros",
    activeName: <h1>Dra. GABRIELE FERREIRA BEIRIGO</h1>,
    activeTxt: (
      <>
        <p>
          Advogada, Inscrita na Ordem dos Advogados do Brasil sob o Nº{" "}
          <strong>?</strong>
        </p>
        <p>
          {/*           Gabriele Ferreira Beirigo é uma profissional do direito que se destaca
          por sua vasta experiência e conhecimento especializado em Direito e
          Processo do Trabalho. Graduada pela renomada Universidade de Ribeirão
          Preto, e especialista em Direito e Processo do Trabalho pela USP,
          Gabriele demonstrou desde cedo um interesse profundo pela área
          trabalhista, motivada pela sua percepção da importância das relações
          laborais na sociedade contemporânea. */}
        </p>
      </>
    ),
    img: ImgGabriele,
    video: gabiVideo,
  },
  {
    id: 4,
    icone: <i className="fa-solid fa-people-roof"></i>,
    title: "Trabalhista",
    text: "Defesa jurídica especializada em crime econômico, financeiro, tributário, licitatório,  organização criminosa, tráfico de drogas, e outros",
    activeName: <h1>Dra. LARISSA SCANDOLARI ALTIERI</h1>,
    activeTxt: (
      <>
        <p>
          Advogada, Inscrita na Ordem dos Advogados do Brasil sob o Nº{" "}
          <strong>416.404</strong>
        </p>
        <p>
          {/*           Formada pela Universidade Paulista – UNIP no ano de 2018.<br></br>{" "}
          Especialista em Direito de Família e Sucessões. <br></br>Pós Graduada
          em Aspectos Gerais da Sucessão Legítima e Testamentária, atualmente
          cursando Extensão em Holding Familiar e atuante na área Cível com
          enfoque em direito das sucessões. */}
        </p>
      </>
    ),
    img: ImgLarissa,
    video: larissaVideo,
  },
];

function Services() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [width, setWidth] = useState<number>(Number);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ServicesBackground>
      <ServicesContainer>
        {width < 740 ? (
          <>
            {infos.map((info) => (
              <ServicesCard
                key={info.id}
                className="active"
                id="scrollServices"
              >
                <VideoCard>
                  <video loop autoPlay muted>
                    <source src={info.video} type="video/mp4" />
                    Seu navegador não suporta esse video
                  </video>
                </VideoCard>
                <ActiveText>
                  {info.activeName}
                  {info.activeTxt}
                  <SkillsCard>
                    <h4>
                      <i className="fa-solid fa-book"></i> Trabalhista
                    </h4>
                    <h4>
                      <i className="fa-solid fa-book"></i> Trabalhista
                    </h4>
                    <h4>
                      <i className="fa-solid fa-book"></i> Trabalhista
                    </h4>
                    <h4>
                      <i className="fa-solid fa-book"></i> Trabalhista
                    </h4>
                    <h4>
                      <i className="fa-solid fa-book"></i> Trabalhista
                    </h4>
                    <h4>
                      <i className="fa-solid fa-book"></i> Trabalhista
                    </h4>
                  </SkillsCard>
                  <a
                    href="https://api.whatsapp.com/send/?phone=5516992819803&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ActiveEntreEmContato>
                      Entre em contato
                    </ActiveEntreEmContato>
                  </a>
                </ActiveText>
              </ServicesCard>
            ))}
          </>
        ) : (
          <>
            {infos.map((info) => (
              <ServicesCard
                key={info.id}
                onClick={() =>
                  activeCard === info.id
                    ? null
                    : setActiveCard(activeCard === info.id ? null : info.id)
                }
                className={activeCard === info.id ? "active" : ""}
                id="scrollServices"
              >
                {activeCard === info.id ? (
                  <>
                    {info.video && (
                      <VideoCard>
                        <video loop autoPlay={activeCard === info.id} muted>
                          <source src={info.video} type="video/mp4" />
                          Seu navegador não suporta esse video
                        </video>
                      </VideoCard>
                    )}
                    <ActiveText>
                      {info.activeName}
                      {info.activeTxt}
                      <SkillsCard>
                        <div>
                          <h4>
                            <i className="fa-solid fa-book"></i> Trabalhista
                          </h4>
                          <h4>
                            <i className="fa-solid fa-book"></i> Trabalhista
                          </h4>
                          <h4>
                            <i className="fa-solid fa-book"></i> Trabalhista
                          </h4>
                        </div>
                        <div>
                          <h4>
                            <i className="fa-solid fa-book"></i> Trabalhista
                          </h4>
                          <h4>
                            <i className="fa-solid fa-book"></i> Trabalhista
                          </h4>
                          <h4>
                            <i className="fa-solid fa-book"></i> Trabalhista
                          </h4>
                        </div>
                      </SkillsCard>
                      <a
                        href="https://api.whatsapp.com/send/?phone=5516992819803&text&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ActiveEntreEmContato>
                          Entre em contato
                        </ActiveEntreEmContato>
                      </a>
                    </ActiveText>
                  </>
                ) : (
                  <ServiceImg className={activeCard === info.id ? "hide" : ""}>
                    <img src={info.img} alt={`Imagem do ${info.title}`} />
                  </ServiceImg>
                )}
                <ServiceIcon>{info.icone}</ServiceIcon>
                <ServiceCardTitle>
                  <h2>{info.title}</h2>
                </ServiceCardTitle>
                <ServiceCardText>
                  <p>{info.text}</p>
                </ServiceCardText>
                <ClickAnimation>
                  <img src={clickImg} alt="" className="fa-beat" />
                </ClickAnimation>
              </ServicesCard>
            ))}
          </>
        )}
      </ServicesContainer>
    </ServicesBackground>
  );
}

export default Services;
