import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeaturedNewsAsync } from '../../store/slices/getFeaturedNewsSlice';
import { getLatestNewsAsync } from '../../store/slices/getLatestNewsSlice';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard';
import Loader from "react-loader-spinner";
import './landing.scss';
const MAX_FEATURED_LIMIT = 3;
const MAX_LATEST_LIMIT = 9;

const featuredListReducer = (state, action) => {
    switch (action.type) {
        case 'fetchData':
            return [...action.data];
        default:
            throw new Error();
    }
}

const Landing = () => {
    const [currentPageNo, setPageNo] = useState(1);
    const dispatch = useDispatch();
    const { featuredDatas } = useSelector(store => store.featured);
    const viewableFeatureData = featuredDatas.slice(0, MAX_FEATURED_LIMIT);
    const { latestDatas } = useSelector(store => store.latest);
    // const [viewableLatestData, setViewableLatestData] = useState([]);
    const [viewableLatestData, listDispatch] = useReducer(featuredListReducer, []);

    useEffect(() => {
        dispatch(getFeaturedNewsAsync())
        dispatch(getLatestNewsAsync())
    }, []);

    useEffect(() => {
        fetchViewableFeatureData();
    }, [latestDatas, currentPageNo]);

    const fetchViewableFeatureData = () => {
        const startingIndex = (currentPageNo - 1) * MAX_LATEST_LIMIT;
        const endingIndex = currentPageNo * MAX_LATEST_LIMIT;
        const selectedData = latestDatas.slice(startingIndex, endingIndex);
        listDispatch({ type: 'fetchData', data: selectedData });
    }

    const renderLatestCard = (type) => {
        const data = type === 'latest' ? viewableLatestData : viewableFeatureData;
        if (data.length) {
            return Object.keys(data).map((key, i) => {
                const props = {
                    key: i,
                    data: data[key]
                }
                return (type === 'latest' ? <Card {...props} /> : <FeaturedCard {...props} />)
            })
        } else {
            return (<h1>No data found</h1>)
        }
    }

    const showLoader = () => {
        return (
            <div className="loader-wrap">
                <Loader
                    type="Bars"
                    color="#00BFFF"
                    height={50}
                    width={50}
                    timeout={3000} //3 secs
                />
            </div>

        )
    }

    const disableNext = () => {
        return currentPageNo * MAX_LATEST_LIMIT > latestDatas.length;
    }

    return (
        <main className="container">
            <div className="left-content">
                <ul className="list">
                    <h2>Latest News</h2>
                    <li>
                        <Input />
                    </li>
                    <li className="button-wrap">
                        <div><button className="btn previous" disabled={currentPageNo === 1} onClick={() => {setPageNo((currentState) => currentState - 1);}}><i className="fas fa-less-than"></i> Prev</button></div>
                        <div>{currentPageNo}</div>
                        <div><button className="btn next" disabled={disableNext()} onClick={()=> {setPageNo((prevState) => prevState + 1);}}>Next <i className="fas fa-greater-than"></i></button></div>
                    </li>
                    {latestDatas.length ? renderLatestCard('latest') : showLoader()}

                </ul>
            </div>
            <div className="right-content">
                <ul className="feature-listing">
                    <h2>Featured News</h2>
                    <div className="feature-content">
                        {featuredDatas.length ? renderLatestCard('featured') : showLoader()}
                    </div>
                </ul>
            </div>
        </main>
    )
}

export default Landing;