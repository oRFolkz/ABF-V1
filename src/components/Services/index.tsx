import React, { useState } from 'react'
import { ServicesBackground, ServicesContainer, ServicesCard, ClickAnimation, BtnMore, ServiceCardTitle, ServiceIcon, ServiceCardText, ServiceImg, ActiveText, VideoCard, SkillsCard, ActiveEntreEmContato } from './styles.ts'

import ImgHenrique from '../imgs/henrique/Henrique6.png'
import ImgAna from '../imgs/anaF/anaF.png'
import ImgGabriele from '../imgs/gabriele/gabriele1.jpg'
import ImgLarissa from '../imgs/larissa/larissa.png'

import clickImg from '../imgs/clickImg.png'

import henriqueVideo from '../video/henriqueVideo.mp4'
import anaVideo from '../video/anaVideo.mp4'
import gabiVideo from '../video/gabiVideo.mp4'
import larissaVideo from '../video/larissaVideo.mp4'

const info = [{
    id: 1,
    title: 'Criminal',
    text: 'Defesa jurídica especializada em crime econômico, financeiro, tributário, licitatório,  organização criminosa, tráfico de drogas, e outros',
    activeName: <h1>Dr. HENRIQUE FERNANDES DE CASTRO</h1>,
    activeTxt: <>
        <p>Advogado, Inscrito na Ordem dos Advogados do Brasil sob o Nº <strong>440.084</strong></p>
        <p>Formado em Direito pela Universidade de Franca em 2019, Pós-graduado em Direito Penal e Processo Penal pela Universidade de Santa Cruz do Sul, Pós-graduado em Direito Penal Econômico pela Pontifícia Universidade Católica de Minas Gerais, Pós-graduando em Advocacia na Fazenda Pública pela Legale, Pós-graduado em Direito Previdenciário pela Legale, com título de especialista em licitações e contratos administrativos pelo CEISC.<span></span></p>
    </>,
    img: ImgHenrique,
    video: henriqueVideo
},
{
    id: 2,
    title: 'Trabalhista',
    text: 'Defesa jurídica especializada em crime econômico, financeiro, tributário, licitatório,  organização criminosa, tráfico de drogas, e outros',
    activeName: <h1>Dra. ANA FLAVIA ALVES</h1>,
    activeTxt: <>
        <p>Advogada, Inscrita na Ordem dos Advogados do Brasil sob o Nº <strong>428.031</strong></p>
        <p>Formada pela faculdade UniSeb de Ribeirão Preto em 2019.<br></br>Pós Graduada em Direito e Processo do Trabalho pela USP Ribeirão Preto, coautora dos artigos “as responsabilidades familiares ante a promoção da igualdade de oportunidades e tratamento no Brasil á luz da OIT”, publicado nos anais do “V Seminário Internacional de Pesquisa (RE)pensando o Direito da Faculdade de Direito da USP em conjunto a UNESP”</p>
    </>,
    img: ImgAna,
    video: anaVideo
},
{
    id: 3,
    title: 'Trabalhista',
    text: 'Defesa jurídica especializada em crime econômico, financeiro, tributário, licitatório,  organização criminosa, tráfico de drogas, e outros',
    activeName: <h1>Dra. GABRIELE FERREIRA BEIRIGO</h1>,
    activeTxt: <>
        <p>Advogada, Inscrita na Ordem dos Advogados do Brasil sob o Nº <strong>?</strong></p>
        <p>Gabriele Ferreira Beirigo é uma profissional do direito que se destaca por sua vasta experiência e conhecimento especializado em Direito e Processo do Trabalho. Graduada pela renomada Universidade de Ribeirão Preto, e especialista em Direito e Processo do Trabalho pela USP, Gabriele demonstrou desde cedo um interesse profundo pela área trabalhista, motivada pela sua percepção da importância das relações laborais na sociedade contemporânea.</p>
    </>,
    img: ImgGabriele,
    video: gabiVideo
},
{
    id: 4,
    title: 'Trabalhista',
    text: 'Defesa jurídica especializada em crime econômico, financeiro, tributário, licitatório,  organização criminosa, tráfico de drogas, e outros',
    activeName: <h1>Dra. LARISSA SCANDOLARI ALTIERI</h1>,
    activeTxt: <>
        <p>Advogada, Inscrita na Ordem dos Advogados do Brasil sob o Nº <strong>416.404</strong></p>
        <p>Formada pela Universidade Paulista – UNIP no ano de 2018.<br></br> Especialista em Direito de Família e Sucessões. <br></br>Pós Graduada em Aspectos Gerais da Sucessão Legítima e Testamentária, atualmente cursando Extensão em Holding Familiar e atuante na área Cível com enfoque em direito das sucessões.</p>
    </>,
    img: ImgLarissa,
    video: larissaVideo
}]

function Services() {

    const [activeCard, setActiveCard] = useState<number | null>(null)

    return (
        <ServicesBackground>
            <ServicesContainer>
                {info.map((service) => (
                    <ServicesCard
                        key={service.id}
                        onClick={() => activeCard === service.id ? null : setActiveCard(activeCard === service.id ? null : service.id)}
                        className={activeCard === service.id ? 'active' : ''}>
                        {activeCard === service.id ? (
                            <>
                                {service.video && (
                                    <VideoCard>
                                        <video loop autoPlay={activeCard === service.id}>
                                            <source src={service.video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </VideoCard>
                                )}
                                <ActiveText>
                                    {service.activeName}
                                    {service.activeTxt}
                                    <SkillsCard>
                                        <div>
                                            <h4><i className="fa-solid fa-book"></i> Trabalhista</h4>
                                            <h4><i className="fa-solid fa-book"></i> Trabalhista</h4>
                                            <h4><i className="fa-solid fa-book"></i> Trabalhista</h4>
                                        </div>
                                        <div>
                                            <h4><i className="fa-solid fa-book"></i> Trabalhista</h4>
                                            <h4><i className="fa-solid fa-book"></i> Trabalhista</h4>
                                            <h4><i className="fa-solid fa-book"></i> Trabalhista</h4>
                                        </div>
                                    </SkillsCard>
                                    <ActiveEntreEmContato>
                                        <a href="https://api.whatsapp.com/send/?phone=5516992819803&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" >
                                            Entre em contato
                                        </a>
                                    </ActiveEntreEmContato>
                                </ActiveText>
                            </>
                        ) : (
                            <ServiceImg className={activeCard === service.id ? 'hide' : ''}>
                                <img src={service.img} alt={`Imagem do ${service.title}`} />
                            </ServiceImg>
                        )}
                        <ServiceIcon>
                            <i className="fa-solid fa-scale-balanced"></i>
                        </ServiceIcon>
                        <ServiceCardTitle>
                            <h2>{service.title}</h2>
                        </ServiceCardTitle>
                        <ServiceCardText>
                            <p>{service.text}</p>
                        </ServiceCardText>
                        <BtnMore>
                            Saiba Mais
                        </BtnMore>
                        <ClickAnimation>
                            <img src={clickImg} alt="" className="fa-beat" />
                        </ClickAnimation>
                    </ServicesCard>
                ))}
            </ServicesContainer>
        </ServicesBackground>
    )
}

export default Services