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

    let keysArray = [];
    for (let i = 100; i < 999; i++) {
        keysArray.push(i)
    }
    // const [isLogged, setIsLogged] = useState(true)
    const [key, setKey] = useState(keysArray[Math.floor(Math.random() * keysArray.length)])
    const [keyForNavbar, setKeyForNavbar] = useState(null)
    const [lang, setLang] = useState('ru')

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

    // let setLogged = () => {
    //     setIsLogged(true);
    //     window.scrollTo(0, 0);
    // }

    return (
        <div>
            <div className='row'>
                <Navbar keyForNavbar={keyForNavbar} setLang={setLang} lang={lang}
                    // isLogged={isLogged}
                    // setLogged={setLogged}
                />
            </div>
            <div className='row'>
                <Route exact path='/' render={() => <Main lang={lang}/>}/>
                <Route path='/letters' render={() => <Letters showKey={showKey} lang={lang} colorsArray={colorsArray}
                    // isLogged={isLogged}
                />}/>
                <Route path='/syllables' render={() => <Syllables showKey={showKey} right={10}
                    // isLogged={isLogged}
                />}/>
                <Route path='/numbers' render={() => <Numbers showKey={showKey} colorsArray={colorsArray}
                    // isLogged={isLogged}
                />}/>
                <Route path='/tasks' render={() => <Tasks showKey={showKey} right={5} trueKey={key} lang={lang}
                    // isLogged={isLogged}
                />}/>
                <Route path='/examples' render={() => <Examples showKey={showKey} right={8} trueKey={key} n={10}
                                                                colorsArray={colorsArray} lang={lang}
                    // isLogged={isLogged}
                />}/>
                <Route path='/hardExamples' render={() => <Examples showKey={showKey} right={6} trueKey={key} n={20}
                                                                    colorsArray={colorsArray} lang={lang}
                    // isLogged={isLogged}
                />}/>
                <Route path='/insertValue'
                       render={() => <InsertValue showKey={showKey} right={8} trueKey={key} colorsArray={colorsArray}
                                                  lang={lang}
                           // isLogged={isLogged}
                       />}/>
                <Route path='/contacts' render={() => <Contacts lang={lang}/>}/>
                <Route path='/popit'
                       render={() => <Popit notShowKey={notShowKey} colorsArray={colorsArray} trueKey={key}
                                            setNewKey={setNewKey} lang={lang}
                       />}/>
            </div>
        </div>
    )
}

export default App;