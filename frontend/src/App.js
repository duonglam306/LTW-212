import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    {/* <Route exact path="/" component={HomePage} /> */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
