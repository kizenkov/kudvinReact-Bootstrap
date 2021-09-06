import Block from './Block';
import lopp from '../../files/lop.mp3';
import {useState, useRef} from 'react';
import Contacts from '../Contacts/Contacts';
import {Redirect} from "react-router-dom";

function Popit({colorsArray, trueKey, setNewKey}) {

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
            setIsKeyTrue(false);
            setNewKey()
            message.current.innerHTML = 'Решите еще пару задач'
            setTimeout(() => {
                message.current.innerHTML = ''
            }, 2000)
        }
    }

    const checkKey = (e) => {
        e.preventDefault();
        if (code === trueKey) {
            setCode('');
            setIsKeyTrue(true);
        } else {
            setCode('');
            message.current.innerHTML = 'Ошибочный ключ'
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
                    <form className="row align-items-center text-center" onSubmit={checkKey}>
                        <div className="row text-center">
                            <p className="text-center fs-5">
                                Решите не менее 8 примеров или 6 задач и введите полученный ключ
                            </p>
                        </div>
                        <div className="row">
                            <input className='form-control m-2' placeholder='Kлюч' value={code} maxLength='3'
                                   onChange={(e) => setCode(e.target.value)} ref={input}/>
                            <button className='btn btn-success m-2 fs-6' type='submit'>Проверить</button>
                        </div>
                    </form>
                    <p ref={message} className='text-center fst-italic fs-6 m-2'></p>
                </div> : null}
            {isKeyTrue ? <div className='container text-center align-self-center popit'>
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

        </div>
    )
}

export default Popit