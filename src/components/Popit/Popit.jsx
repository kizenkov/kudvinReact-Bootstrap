import Block from './Block';
import lopp from '../../files/lop.mp3';
import {useState, useRef} from 'react';
import Contacts from '../Contacts/Contacts';
// import {Redirect} from 'react-router-dom';

function Popit({colorsArray, trueKey, setNewKey, notShowKey}) {

    let lop = new Audio(lopp);
    const [score, setScore] = useState(0);
    const [isKeyTrue, setIsKeyTrue] = useState(false)
    const message = useRef();
    const input = useRef();
    const [code, setCode] = useState('');

    function changeScore() {
        setScore(score + 1);
        if (score === 35) {
            setScore(0);
            setTimeout(() => {
                setIsKeyTrue(false);
                setNewKey();
            }, 1000)
        }
    }

    const checkKey = (e) => {
        e.preventDefault();
        if (code === trueKey) {
            setCode('');
            setIsKeyTrue(true);
            notShowKey();
            message.current.innerHTML = ''
        } else {
            setCode('');
            message.current.innerHTML = 'Неверный ключ'
            setTimeout(() => {
                message.current.innerHTML = ''
            }, 2000)
        }
    }

    // if (!isLogged) return <Redirect to='/'/>

    return (<div>

            {!isKeyTrue ?
                <div className='container'>
                    <br/>
                    <form className='row align-items-center' onSubmit={checkKey}>
                        <div className='row'>
                            <ul className='fs-5'>
                                <h4>Чтобы сыграть в Pop-it, выполните одно из условий и введите полученный ключ:</h4>
                                <br/>
                                <li>pешите не менее 8 лёгких примеров за одну попытку</li>
                                <li>pешите не менее 6 сложных примеров за одну попытку</li>
                                <li>вставьте не менее 8 правильных чисел за одну попытку</li>
                                <li>решите правильно 5 задач</li>
                                <li>повторите все буквы</li>
                                <li>повторите все числа</li>
                                <li>повторите 10 слогов</li>
                            </ul>
                        </div>
                        <div className='row'>
                            <input className='form-control m-1' value={code} maxLength='3'
                                   onChange={(e) => setCode(e.target.value)} ref={input}/>
                            <button className='btn btn-success m-1 fs-6 py-2' type='submit'>Подтвердить</button>
                        </div>
                    </form>
                </div> : null}
            <p ref={message} className='text-center fst-italic fs-6 m-2'></p>

            {isKeyTrue ? <div className='text-center align-self-center popit'>
                    <div>
                        <Block lop={lop} score={score} color={colorsArray[0]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[0]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[0]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[0]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[0]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[0]} changeScore={changeScore}
                               setScore={setScore}/>
                    </div>

                    <div>
                        <Block lop={lop} score={score} color={colorsArray[1]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[1]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[1]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[1]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[1]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[1]} changeScore={changeScore}
                               setScore={setScore}/>
                    </div>

                    <div>
                        <Block lop={lop} score={score} color={colorsArray[2]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[2]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[2]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[2]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[2]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[2]} changeScore={changeScore}
                               setScore={setScore}/>
                    </div>

                    <div>
                        <Block lop={lop} score={score} color={colorsArray[3]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[3]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[3]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[3]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[3]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[3]} changeScore={changeScore}
                               setScore={setScore}/>
                    </div>

                    <div>
                        <Block lop={lop} score={score} color={colorsArray[4]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[4]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[4]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[4]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[4]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[4]} changeScore={changeScore}
                               setScore={setScore}/>
                    </div>

                    <div>
                        <Block lop={lop} score={score} color={colorsArray[5]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[5]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[5]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[5]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[5]} changeScore={changeScore}
                               setScore={setScore}/>
                        <Block lop={lop} score={score} color={colorsArray[5]} changeScore={changeScore}
                               setScore={setScore}/>
                    </div>
                    <Contacts/>
                </div>
                : null
            }
            <Contacts/>
        </div>
    )
}

export default Popit
