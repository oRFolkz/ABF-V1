import React from 'react';
import { BlogContainer, BlogSubContainer, BlogMainCard, BlogTittle, BlogText, FadeBackground, BlogSubCard, BlogSubImg, BlogSubTittle, BlogSubTxt, BlogInstaContainer, BlogInstaCard, BlogInstaTittle, BlogInstaImg } from './styles.ts'

import pexelsSora from '../../assets/imgs/pexelsSora.jpg'
import pexelsChai from '../../assets/imgs/pexelsChai.jpg'
import Insta from '../../assets/imgs/Insta.png'
function BlogHome() {

    return (
        <BlogContainer>
            <BlogSubContainer>
                <BlogMainCard>
                    <BlogTittle>
                        <h2> Direito Civil</h2>
                    </BlogTittle>
                    <BlogText>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum saepe corporis error fuga facere eum sed iure sapiente modi, nostrum aut placeat exercitationem non sit consequatur! Assumenda maxime quaerat non molestiae animi in sit explicabo fuga tenetur, laborum accusamus. Obcaecati.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                        </p>
                    </BlogText>
                    <FadeBackground />
                </BlogMainCard>
                <BlogSubCard>
                    <BlogSubImg>
                        <img src={pexelsChai} alt="" />
                    </BlogSubImg>
                    <BlogSubTittle>
                        <h2>Direito Civil</h2>
                    </BlogSubTittle>
                    <BlogSubTxt>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, culpa!</p>
                    </BlogSubTxt>
                </BlogSubCard>
                <BlogSubCard>
                    <BlogSubImg>
                        <img src={pexelsSora} alt="" />
                    </BlogSubImg>
                    <BlogSubTittle>
                        <h2>Direito Civil</h2>
                    </BlogSubTittle>
                    <BlogSubTxt>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, culpa!</p>
                    </BlogSubTxt>
                </BlogSubCard>
            </BlogSubContainer>
            <a href="https://www.instagram.com/abf_advogados?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer">
                <BlogInstaContainer>
                    <BlogInstaCard>
                        <BlogInstaTittle>
                            <i className="fa-brands fa-instagram"></i>
                            <h3>Visite nosso <br></br><span>Instagram</span> para<br></br> mais informações</h3>
                        </BlogInstaTittle>
                        <BlogInstaImg>
                            <img src={Insta} alt="" />
                        </BlogInstaImg>
                    </BlogInstaCard>
                </BlogInstaContainer>
            </a>
        </BlogContainer>
    )
}

export default BlogHome