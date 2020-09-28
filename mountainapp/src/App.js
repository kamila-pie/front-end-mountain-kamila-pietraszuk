import React from 'react';
import './scss/main.scss';
import Nav from "./components/Nav";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Nav/>
            <MainSection/>
            <Footer/>
        </>
    )
}

export default App;