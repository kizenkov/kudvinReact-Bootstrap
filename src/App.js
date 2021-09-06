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

    let keysArray = ['122', '324', '789', '566', '887', '435', '977', '215', '168', '890', '501', '607', '814'];
    const [isLogged, setIsLogged] = useState(true)
    const [key, setKey] = useState(keysArray[Math.floor(Math.random() * keysArray.length)])
    const [keyForNavbar, setKeyForNavbar] = useState(null)

    function setNewKey() {
        setKey(keysArray[Math.floor(Math.random() * keysArray.length)]);
    }

    function showKey() {
        setKeyForNavbar(key);
    }

    function notShowKey() {
        setKeyForNavbar(null);
    }

    let colorsArray = ['blueviolet', 'blue', 'limegreen', 'saddlebrown', 'orange', 'red']

    let setLogged = () => {
        setIsLogged(true);
        window.scrollTo(0, 0);
    }

    return (
        <div>
            <div className='row'>
                <Navbar keyForNavbar={keyForNavbar} isLogged={isLogged} setLogged={setLogged}/>
            </div>
            <div className='row'>
                <Route exact path='/' render={() => <Main/>}/>
                <Route path='/letters' render={() => <Letters isLogged={isLogged} colorsArray={colorsArray}/>}/>
                <Route path='/syllables' render={() => <Syllables isLogged={isLogged}/>}/>
                <Route path='/numbers' render={() => <Numbers isLogged={isLogged} colorsArray={colorsArray}/>}/>
                <Route path='/tasks' render={() => <Tasks showKey={showKey} trueKey={key} isLogged={isLogged} />}/>
                <Route path='/examples' render={() => <Examples showKey={showKey} trueKey={key} n={10} isLogged={isLogged} colorsArray={colorsArray} />}/>
                <Route path='/hardExamples' render={() => <Examples showKey={showKey} trueKey={key} n={20} isLogged={isLogged} colorsArray={colorsArray}/>}/>
                <Route path='/insertValue' render={() => <InsertValue showKey={showKey} trueKey={key} isLogged={isLogged} colorsArray={colorsArray}/>}/>
                <Route path='/contacts' render={() => <Contacts/>}/>
                <Route path='/popit' render={() => <Popit notShowKey={notShowKey} colorsArray={colorsArray} trueKey={key} setNewKey={setNewKey} />}/>
            </div>
        </div>
    )
}

export default App;