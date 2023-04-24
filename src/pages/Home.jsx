

import React, {useState, useEffect} from 'react';

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from '../assets/data/products';

import Helmet from '../components/Helmet/Helmet';
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img-1.png';

import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';

import Clock from '../components/UI/Clock';

import counterImg from '../assets/images/counter-timer-img.png';

const Home = () => {

    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const [newArrivalsProducts, setNewArrivalsProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
    const [trendingSecondProducts, setTrendingSecondProducts] = useState([]);

    const year = new Date().getFullYear();

    useEffect(()=>{
        const filteredTrendingProducts = products.filter(
            (item)=> item.category === 'Vitamins'
        );

        const filteredTrendingSecondProducts = products.filter(
            (item)=> item.category === 'Fever'
        );

        const filteredBestSalesProducts = products.filter(
            (item)=> item.category === 'Antibiotics'
        );

        const filteredNewArrivalsProducts = products.filter(
            (item)=> item.category === 'Digestive'
        );

        const filteredPopularProducts = products.filter(
            (item)=> item.category === 'Skin'
        );

        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);
        setNewArrivalsProducts(filteredNewArrivalsProducts);
        setPopularProducts(filteredPopularProducts);
        setTrendingSecondProducts(filteredTrendingSecondProducts);

    }, []);

    return <Helmet title={"Home"}>
        <section className="hero__section">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                            <p className="hero_subtitle">Trending product in {year}</p>
                            <h2>Stay Healthy with SymptoPharm!</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima adipisci autem quas atque accusamus placeat fugit dolor veniam ipsam blanditiis.</p>

                            <motion.button whileTap={{scale: 1.1}} className="buy__btn">
                                <Link to='/products'>EXPLORE NOW</Link>
                            </motion.button>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="hero__img">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>



        <Services />
        <section className="trending__products">
            <Container>
                <Row>
                    <Col lg='12' className="text-center">
                        <h2 className="section__title">Trending Products</h2>
                    </Col>
                    <ProductsList data={trendingProducts} />
                    <ProductsList data={trendingSecondProducts} />
                </Row>
            </Container>
        </section>



        <section className="best__sales">
        <Container>
                <Row>
                    <Col lg='12' className="text-center">
                        <h2 className="section__title">Best Sales</h2>
                    </Col>

                    <ProductsList data={bestSalesProducts} />
                </Row>
            </Container>
        </section>



        <section className="timer__count">
            <Container>
                <Row>
                    <Col lg='6' md='12' className="count__down-col">

                        <div className="clock__top-content">
                            <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                            <h3 className="text-white fs-5 mb-3">Quality Products</h3>
                        </div>
                        <Clock />

                        <motion.button whileTap={{scale: 1.2}} className="buy__btn store__btn">
                            <Link to="/products">Visit</Link>
                            </motion.button>
                    </Col>

                    <Col lg='6' md='12' className="text-end counter__img">
                        <img src={counterImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>



        <section className="new__arrivals">
            <Container>
                <Row>
                <Col lg='12' className="text-center mb-5">
                        <h2 className="section__title">New Arrivals</h2>
                    </Col>

                    <ProductsList data={newArrivalsProducts} />

                </Row>
            </Container>
        </section>



        <section className="popular__category">
            <Container>
                <Row>
                <Col lg='12' className="text-center mb-5">
                        <h2 className="section__title">Popular in Category</h2>
                    </Col>

                    <ProductsList data={popularProducts} />

                </Row>
            </Container>
        </section>
    </Helmet>;
};

export default Home;