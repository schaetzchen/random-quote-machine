import {quotes, colors} from "./data";
const defaultState = {
    quote: "",
    author: "",
    color: ""
}

const quoteReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GENERATE_QUOTE":
            const newQuoteIndex = Math.floor(Math.random() * (quotes.length - 1));
            const newColorIndex = Math.floor(Math.random() * (colors.length - 1))
            const filteredQuotes = quotes.filter(item => item.quote !== state.quote)
            const filteredColors = colors.filter(item => item !== state.color)
            return {
                quote: filteredQuotes[newQuoteIndex].quote,
                author: filteredQuotes[newQuoteIndex].author,
                color: filteredColors[newColorIndex]
            };
        default:
            return state;
    }
}

export default quoteReducer;