import './App.css';
import Items from "./components/Items/Items";
import Order from "./components/Order/Order";

const App = () => {
    return (
        <div className="App">
            <Order />
            <Items />
        </div>
    );
};

export default App;
