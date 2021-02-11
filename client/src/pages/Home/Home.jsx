import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/Header/Header'
import Cards from '../../components/Cards/Cards'
import Banner from '../../components/Banner/Banner'

export const Home = () => {
    return (
        <div className="container-fluid bg-dark">
            <Header />
            <Banner />
            <Cards />
        </div >
    )
}