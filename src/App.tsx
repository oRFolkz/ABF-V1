import React from 'react'
import { GlobalCss } from './styles.ts'
import { ContextProvider } from './components/Context.js';
import NavBar from './components/NavBar/index.tsx'
import Banner from './components/BackGroundImgs/index.tsx'
import Coments from './components/Comments/index.tsx'
import SkillCards from './components/SkillCards/index.tsx'
import Location from './components/Location/index.tsx'
import HoverCircle from './components/HoverCircle/index.tsx'
import Services from './components/Services/index.tsx'

function App() {
    return (
        <ContextProvider>
            <GlobalCss />
            <NavBar />
            <Banner />
            <Services />
            <Coments />
            <SkillCards />
            <Location />
            <HoverCircle />
        </ContextProvider>
    )
}
export default App