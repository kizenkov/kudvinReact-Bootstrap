import {Route} from 'react-router-dom';
import {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Letters from './components/Letters/Letters';
import Syllables from './components/Syllables/Syllables';
import Numbers from './components/Numbers/Numbers';
import Examples from './components/Examples/Examples';
import InsertValue from './components/InsertValue/InsertValue';
import Tasks from './components/Tasks/Tasks';
import Popit from './components/Popit/Popit';
import Contacts from './components/Contacts/Contacts';

function App() {

    let colorsArray = ['blueviolet', 'blue', 'limegreen', 'gold', 'orange', 'red']
    const [isLogged, setIsLogged] = useState(true)
    let setLogged = () => {
        setIsLogged(true);
        window.scrollTo(0, 0);
    }

    return (
        <div>
            <div class='row'>
                <Navbar isLogged={isLogged} setLogged={setLogged}/>
            </div>
            <div class='row'>
                <Route exact path='/' render={() => <Main/>}/>
                <Route path='/letters' render={() => <Letters isLogged={isLogged} colorsArray={colorsArray}/>}/>
                <Route path='/syllables' render={() => <Syllables isLogged={isLogged}/>}/>
                <Route path='/numbers' render={() => <Numbers isLogged={isLogged} colorsArray={colorsArray}/>}/>
                <Route path='/tasks' render={() => <Tasks isLogged={isLogged}/>}/>
                <Route path='/examples' render={() => <Examples n={10} isLogged={isLogged} colorsArray={colorsArray}/>}/>
                <Route path='/hardExamples' render={() => <Examples n={30} isLogged={isLogged} colorsArray={colorsArray}/>}/>
                <Route path='/insertValue' render={() => <InsertValue isLogged={isLogged} colorsArray={colorsArray}/>}/>
                <Route path='/contacts' render={() => <Contacts/>}/>
                <Route path='/popit' render={() => <Popit colorsArray={colorsArray}/>}/>
            </div>
        </div>
    )
}

export default App;