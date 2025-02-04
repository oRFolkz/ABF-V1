import React from 'react'
import Slider from 'react-slick'
import { Autoplay, CommentsContainer, CommentsFiveStars, CommentsSubContainer, CommentsUsers, StarsContainer, StarsSubText, StarsText, UserComment, UserName, UsersCard } from './styles.ts'

function Coments() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false
    };
    return (
        <CommentsContainer>
            <CommentsSubContainer>
                <CommentsFiveStars>
                    <StarsText>Somos nota <strong>máxima</strong> <br></br>nas avaliações do <strong>Google</strong></StarsText>
                    <StarsSubText>confira os comentarios</StarsSubText>
                    <StarsContainer>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </StarsContainer>
                </CommentsFiveStars>
                <CommentsUsers>
                    <Autoplay className="slider-container">
                        <Slider {...settings} className="Slider">
                            <UsersCard>
                                <UserName>Filipe Borges</UserName>
                                <img src="https://lh3.googleusercontent.com/a-/ALV-UjV1s0kjKUQ1UqDy1bu1esvdYH7VZkL1ydroLBdxZKSTGgo=w60-h60-p-rp-mo-br100" alt="SVG" />
                                <UserComment>Fiquei muito satisfeito com o serviço que foi contratado. Profissionais excelentes que priorizam sempre o bem estar e as necessidades dos clientes.
                                </UserComment>
                            </UsersCard>
                            <UsersCard>
                                <UserName>Aloísio Merigo</UserName>
                                <img src="https://lh3.googleusercontent.com/a-/ALV-UjXmu_NyPIGoe52r0NS19qoK4iVDaabsub0RcIDMSlyLPfDgWPg=w60-h60-p-rp-mo-br100" alt="SVG" />
                                <UserComment>Foi uma experiência muito boa, aonde ganhamos o caso e encerramos com um acordo, desde sempre a doutora acreditou em mim e conseguimos cobrir a injustiça feita, muito obg e super indico ela
                                </UserComment>
                            </UsersCard>
                            <UsersCard>
                                <UserName>João Vitor Pardal</UserName>
                                <img src="https://lh3.googleusercontent.com/a-/ALV-UjW5AjYRT2mU-g6HSculmb_o7vjdAGoYRJWvyo6uqyM5QtN1=w120-h120-p-rp-mo-br100" alt="SVG" />
                                <UserComment>Atendimento nota 10!
                                Profissionais altamente capacitados
                                Recomendo muito!
                                </UserComment>
                            </UsersCard>
                            <UsersCard>
                                <UserName>Marcela Altino</UserName>
                                <img src="https://lh3.googleusercontent.com/a-/ALV-UjXZTGMJ1Yw-W4jKPNJV8Hie8m9aDaU168dAh6vZAIo0pibN=w120-h120-p-rp-mo-br100" alt="SVG" />
                                <UserComment>Excelentes profissionais, muito responsáveis e super educados!
                                </UserComment>
                            </UsersCard>
                            <UsersCard>
                                <UserName>Loraine Lima</UserName>
                                <img src="https://lh3.googleusercontent.com/a-/ALV-UjXov26UMz-cQzJ3LzQghpRj3GWunQQlP_A3of53ZwtTb3qr=w120-h120-p-rp-mo-br100" alt="SVG" />
                                <UserComment>Excelente profissionais, estão sempre esclarecendo dúvidas e orientando da melhor maneira!
                                </UserComment>
                            </UsersCard>
                        </Slider>
                    </Autoplay>
                </CommentsUsers>
            </CommentsSubContainer>
        </CommentsContainer>
    )
}

export default Coments