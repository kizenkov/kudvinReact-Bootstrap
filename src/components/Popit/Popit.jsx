import Block from './Block';
import lopp from './lop.mp3';
import {useState} from 'react';

function Popit() {
    let lop = new Audio(lopp);
    const [score, setScore] = useState(0);
    let colorsArray = ['green', 'red', 'blue', 'chocolate', 'darkmagenta', 'magenta', 'darkorange'];
    let colorBlock = colorsArray[Math.floor(Math.random() * colorsArray.length)];


    function changeScore() {
        setScore(score + 1);
    }

    return (<div className='container text-center align-self-center popit'>
                    <div>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                    </div>

                    <div>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                    </div>

                    <div>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                    </div>

                    <div>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                    </div>

                    <div>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                    </div>

                    <div>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                        <Block lop={lop} score={score} colorBlock={colorBlock} changeScore={changeScore} setScore={setScore}/>
                    </div>
        </div>
    )
}

export default Popit