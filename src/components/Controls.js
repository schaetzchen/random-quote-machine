import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import generateQuoteAction from "../generateQuoteAction";
const Controls = () => {
    const dispatch = useDispatch();
    return (
        <div className="quote__controls">
            <a
                href={"https://twitter.com/intent/tweet?text=" + useSelector(state => state.quote) + " — " + useSelector(state => state.author)}
                target="_blank"
                className="quote__btn"
                id="tweet-quote"
                style={{backgroundColor: useSelector(state => state.color)}}
            >
                Tweet this!
            </a>
            <button
                className="quote__btn"
                id="new-quote"
                onClick={() => {
                    document.getElementById("text").classList.add("quote__text_invisible");
                    document.getElementById("author").classList.add("quote__author_invisible");
                    setTimeout(() => dispatch(generateQuoteAction()), 500);
                }
                }
                style={{backgroundColor: useSelector(state => state.color)}}
            >
                New quote
            </button>
        </div>
    );
};

export default Controls;