import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { Contact } from '../Pages/Contact';
import { NotFound } from '../Pages/NotFound';
import { Category } from '../Categories/Category';
import { Recipe } from '../Recipes/Recipe';

export const Main = () => {
    return (
        <>
            <main className='container content'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/category/:name' component={Category} />
                    <Route path='/meal/:idMeal' component={Recipe} />
                    <Route component={NotFound} />
                </Switch>
            </main>
        </>
    );
};
