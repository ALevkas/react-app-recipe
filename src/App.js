import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Footer } from './Components/Layout/Footer';
import { Header } from './Components/Layout/Header';
import { Main } from './Components/Layout/Main';

function App() {
    return (
        <>
            <Router basename='react-app-recipe'>
                <Header />
                <Main />
                <Footer />
            </Router>
        </>
    );
}

export default App;
