import './App.css';
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import {Route, Switch} from "react-router-dom";
import Subreddit from "./pages/subreddit/Subreddit";

function App() {

    return (
        <div className="outer-container">
            <div className="inner-container">
                <Header/>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/subreddit/:id"><Subreddit/></Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
