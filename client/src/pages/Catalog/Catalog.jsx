import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/Header/Header'
import Cards from '../../components/Cards/Cards'

export const Catalog = () => {
    return (
        <div className="container-fluid bg-dark">
            <Header />
            <h2 className="text-white display-3 mb-4">CATalog</h2>
            <Cards />
            <Cards />
            <Cards />
        </div >
    )
}