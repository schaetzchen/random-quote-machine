import React from 'react';
import {useSelector} from "react-redux";
const Quote = () => {
    return (
        <div className="quote__content">
            <span
                className="quote__text"
                id="text"
                style={{color: useSelector(state => state.color)}}
            >
                {useSelector(state => state.quote)}
            </span>
            <span
                className="quote__author"
                id="author"
                style={{color: useSelector(state => state.color)}}
            >
                {useSelector(state => state.author)}
            </span>
        </div>
    );
};

export default Quote;