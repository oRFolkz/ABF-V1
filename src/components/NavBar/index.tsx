import React, { useContext } from 'react'
import { Header, HeaderContainer, HeaderLogo, Links, Blog, Comentarios, Icons, QuemSomos, Localizacao, FormularioButton, IconsHeader, ShowLinksMobile } from './styles.ts'

import logo from '../assets/imgs/logos/logotipo.png'
import { FacebookColor, InstagramColor, WhatsAppColor } from '../../styles.ts'
import { Context } from '../Context.js';

function NavBar() {
    const { toggleForm, setToggleForm } = useContext(Context);

    const onClickToggleForm = () => {
        setToggleForm(prev => !prev);
    };

    return (
        <Header>
            <HeaderContainer>
                <ShowLinksMobile>
                    <i className="fa-solid fa-bars"></i>
                </ShowLinksMobile>
                <HeaderLogo>
                    <img src={logo} alt="LOGO" />
                </HeaderLogo>
                <Links>
                    <Blog>
                        <Icons><i className="fa-solid fa-address-card "></i>Blog</Icons>
                    </Blog>
                    <QuemSomos
                        onClick={() => {
                            const section = document.getElementById('scrollServices');
                            if (section) {
                                const yOffset = -132;
                                const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
                                window.scrollTo({ top: y, behavior: 'smooth' });
                            }
                        }}>
                        <Icons><i className="fa-solid fa-user-tie"></i>Serviços</Icons>
                    </QuemSomos>
                    <Comentarios
                        onClick={() => {
                            const section = document.getElementById('scrollComentarios');
                            if (section) {
                                const yOffset = -100;
                                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                window.scrollTo({ top: y, behavior: 'smooth' });
                            }
                        }}>
                        <Icons><i className="fa-solid fa-star"></i>Comentarios</Icons>
                    </Comentarios>
                    <Localizacao
                        onClick={() => {
                            const section = document.getElementById('scrollLocation');
                            if (section) {
                                section.scrollIntoView({
                                    behavior: 'smooth'
                                });;
                            }
                        }}>
                        <Icons><i className="fa-solid fa-location-dot"></i>Localização</Icons>
                    </Localizacao>
                </Links>
                <FormularioButton onClick={() => {
                    onClickToggleForm();
                    if (!toggleForm) {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }}>
                    <p><i className="fa-solid fa-book-open"></i>Contato</p>
                </FormularioButton>
                <IconsHeader>
                    <a href="https://api.whatsapp.com/send/?phone=5516992819803&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                        <WhatsAppColor className="fa-brands fa-whatsapp"></WhatsAppColor>
                    </a>
                    <a href="https://www.instagram.com/abf_advogados?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer">
                        <InstagramColor className="fa-brands fa-instagram"></InstagramColor>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100083081781351" target="_blank" rel="noreferrer">
                        <FacebookColor className="fa-brands fa-facebook"></FacebookColor>
                    </a>
                </IconsHeader>
            </HeaderContainer>
        </Header>
    )
}

export default NavBar