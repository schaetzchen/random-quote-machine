import "./sass/style.css"
import Controls from "./components/Controls";
import Quote from "./components/Quote";

function App() {
    return (
        <div className="quote" id="quote-box">
            <Quote />
            <Controls />
        </div>
    );
}

export default App;
