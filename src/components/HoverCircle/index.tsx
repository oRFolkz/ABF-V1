import React, { useEffect, useState } from 'react'
import { CircleContainer, BubbleText, BubbleTextInsta, Link, CircleContainerUP, BubbleTextUP, GoldenLine } from './styles.ts'
import { InstagramColor } from '../../styles.ts'

function HoverCircle() {

    const [scrollUp, setScrollUp] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 900) {
                setScrollUp(true);
            } else {
                setScrollUp(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <CircleContainer>
                <GoldenLine />
                <Link href="https://api.whatsapp.com/send/?phone=5516992819803&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                    <BubbleText>
                        <i className="fa-brands fa-whatsapp whatsappIcon"></i>
                    </BubbleText>
                </Link>
                <Link href="https://www.instagram.com/abf_advogados/" target="_blank" rel="noreferrer">
                    <BubbleTextInsta>
                        <InstagramColor className="fa-brands fa-instagram"></InstagramColor>
                    </BubbleTextInsta>
                </Link>
            </CircleContainer>
            <CircleContainerUP className={scrollUp ? 'active' : ''}>
                <Link onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }}>
                    <BubbleTextUP>
                        <InstagramColor className="fa-solid fa-arrow-up"></InstagramColor>
                    </BubbleTextUP>
                </Link>
            </CircleContainerUP>
        </>
    )
}

export default HoverCircle