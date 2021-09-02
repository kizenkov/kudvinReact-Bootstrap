import Block from './Block';
import lopp from '../../files/lop.mp3';
import {useState} from 'react';
import Contacts from '../Contacts/Contacts';

function Popit({colorsArray}) {

    let lop = new Audio(lopp);
    const [score, setScore] = useState(0);

    function changeScore() {
        setScore(score + 1);
    }

    return (<div className='container text-center align-self-center popit'>
            <div>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
            </div>

            <div>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
            </div>

            <div>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
            </div>

            <div>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
            </div>

            <div>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
            </div>

            <div>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
                <Block lop={lop} score={score} colorsArray={colorsArray} changeScore={changeScore} setScore={setScore}/>
            </div>
            <Contacts />
        </div>
    )
}

export default Popit