import React from 'react'
import { CircleContainer, BubbleText, BubbleTextInsta, Link } from './styles.ts'
import { InstagramColor } from '../../styles.ts'

function HoverCircle() {
    return (
        <CircleContainer>
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
    )
}

export default HoverCircle