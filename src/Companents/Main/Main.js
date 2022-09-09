import React from 'react';
import Navbar from '../../Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PaginationRounded } from '../pages/Contact';
import { Product } from '../pages/Product';
import { Stores } from '../pages/Stores';
import { Home } from '../pages/Home';

export function Main() {
    return (
        <Router>

        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Pricing" element={<Product />} />
                <Route path="/stores" element={<Stores />} />
                <Route path="/Contact" element={<PaginationRounded />} />
            </Routes>
        </div>
        </Router>
    );
}
