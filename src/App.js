import {Route} from 'react-router-dom';
import {useCallback, useMemo, useState} from 'react';
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

// let tasks = [];
// if (lang === 'ru') {
//     tasks.push('Маша засушила 3 кленовых листика, а дубовых – на 2 листика больше. Сколько всего листиков засушила Маша?');
//     tasks.push('У Пети 4 флажка, а у Вани на 3 флажка больше. Сколько флажков у обоих мальчиков?');
//     tasks.push('Мама испекла 9 пирожков, а булочек – на 4 меньше. Сколько булочек испекла мама?');
//     tasks.push('У Кати 6 матрёшек, а у Даши на 4 матрёшки больше. Сколько матрёшек у Даши?');
//     tasks.push('В большой башне 8 окон, а в маленькой башне на 4 окна меньше. Сколько окон в маленькой башне?');
//     tasks.push('Рыбак поймал 6 ершей, а окуней – на 4 меньше. Сколько окуней поймал рыбак?');
//     tasks.push('Длина красного карандаша 10см, а синий карандаш на 3см длиннее. Какой длины синий карандаш?');
//     tasks.push('Таня вырастила фиалку и кактус. Высота фиалки 7см, а кактус на 3см ниже фиалки. Какой высоты фиалка?');
//     tasks.push('В Московском поезде 9 вагонов, а в Тульском на 3 вагона меньше. Сколько вагонов в обоих поездах?');
//     tasks.push('На арене цирка выступают 7 жонглёров, а клоунов – на 4 меньше. Сколько всего циркачей выступает на арене?');
//     tasks.push('Столяр починил 3 стола, а стульев – на 4 больше. Сколько столов починил столяр?');
//     tasks.push('На крыше беседки висят 4 сосульки, а на крыше дома – на 6 сосулек больше. 3 сосульки растаяли. Сколько всего сосулек осталось висеть на крышах?');
//     tasks.push('Мультфильм в кинотеатре начался в 5 часов, а закончился в 7. Сколько часов шёл мультфильм?');
//     tasks.push('На Новый год в вазу положили 10 мандаринов. 4 мандарина съел папа, 3 мандарина съела мама и еще 3 - бабушка. Сколько мандаринов осталось в вазе?');
//     tasks.push('Катя слепила 5 снежков, а сережа - 7. По 3 снежка они бросили друг в друга. Сколько всего снежков осталось у ребят?');
//     tasks.push('У Саши есть 3 рубля, а пачка мороженого стоит 1 рубль. Сколько пачек мороженого сможет купить Саша?');
// }
// if (lang === 'en') {
//     tasks.push('Masha dried 3 maple leaves, and 2 more oak leaves. How many leaves Masha dried?');
//     tasks.push('Pete has 4 flags, and Ivan has 3 more flags. How many flags do both boys have?');
//     tasks.push('Mom baked 9 pies and 4 fewer buns. How many buns did mom bake?');
//     tasks.push('Kate has 6 nesting dolls, and Dasha has 4 more nesting dolls. How many nesting dolls does Dasha have?');
//     tasks.push('The large tower has 8 windows, and the small tower has 4 fewer windows. How many windows are there in a small tower?');
//     tasks.push('The fisherman caught 6 ruffs, and 4 fewer perches. How many perches the fisherman caught?');
//     tasks.push('The red pencil is 10cm long and the blue pencil is 3cm longer. How long is the blue pencil?');
//     tasks.push('Tanya has grown a violet and a cactus. The height of the violet is 7cm, and the cactus is 3cm below the violet. How high is the violet?');
//     tasks.push('The Moscow train has 9 cars, and the Tula train has 3 fewer cars. How many cars are in both trains?');
//     tasks.push('There are 7 jugglers on the circus arena, and 4 fewer clowns. How many circus performers perform in the arena?');
//     tasks.push('The carpenter repaired 3 tables and 4 more chairs. How many tables did the joiner repair?');
//     tasks.push('There are 4 icicles hanging on the roof of the gazebo, and 6 more icicles on the roof of the house. 3 icicles melted. How many icicles are left to hang on the roofs?');
//     tasks.push("The cartoon in the cinema began at 5 o'clock and ended at 7. How many hours did the cartoon go?");
//     tasks.push('For the New Year, 10 tangerines were put in a vase. Dad ate 4 tangerines, Mom ate 3 tangerines and grandma ate 3 more. How many tangerines are left in the vase?');
//     tasks.push('Kate blinded 5 snowballs, and Sergey - 7. They threw 3 snowballs at each other. How many snowballs have the guys left?');
//     tasks.push('Sasha has 3$, and a pack of ice cream costs 1$. How many packs of ice cream can Sasha buy?');
// }

// let results = [8, 11, 5, 10, 4, 2, 13, 7, 15, 10, 3, 11, 2, 0, 6, 3];

function App() {

    let keysArray = [];
    for (let i = 100; i < 999; i++) {
        keysArray.push(i)
    }
    // const [isLogged, setIsLogged] = useState(true)
    const [isTaskRender, setIsTaskRender] = useState(false)
    const [key, setKey] = useState(keysArray[Math.floor(Math.random() * keysArray.length)])
    const [keyForNavbar, setKeyForNavbar] = useState(null)
    const [lang, setLang] = useState('ru')


    // const tasksAndResultsSplice = (i) => {
    //     tasks.splice(i, 1);
    //     results.splice(i, 1);
    // }



    function setNewKey() {
        setKey(keysArray[Math.floor(Math.random() * keysArray.length)]);
    }

    function showKey() {
        setKeyForNavbar(key);
    }

    // const showKey = useCallback(() => {
    //     setKeyForNavbar(key);
    // }, []);


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
                    // isLogged={isLogged} setLogged={setLogged}
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
                <Route path='/tasks' render={() => <Tasks showKey={showKey} right={4} lang={lang}
                    // isLogged={isLogged}
                />}/>
                <Route path='/examples' render={() => <Examples showKey={showKey} right={8} n={10}
                                                                colorsArray={colorsArray} lang={lang}
                    // isLogged={isLogged}
                />}/>
                <Route path='/hardExamples' render={() => <Examples showKey={showKey} right={6} n={20}
                                                                    colorsArray={colorsArray} lang={lang}
                    // isLogged={isLogged}
                />}/>
                <Route path='/insertValue'
                       render={() => <InsertValue showKey={showKey} right={8} colorsArray={colorsArray}
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