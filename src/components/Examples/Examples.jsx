import {useRef, useState} from 'react';
import Example from './Example';
import helper from '../../files/helper4.gif';
import Contacts from '../Contacts/Contacts';
// import {Redirect} from 'react-router-dom';

function Examples({showKey, n, isLogged, colorsArray, right}) {

    const [A1, setA1] = useState(Math.trunc(Math.random() * n));
    const [B1, setB1] = useState(Math.trunc(Math.random() * n));
    const [C1, setC1] = useState(Math.trunc(Math.random() * n));
    const [D1, setD1] = useState(Math.trunc(Math.random() * n));

    const [A2, setA2] = useState(Math.trunc(Math.random() * n));
    const [B2, setB2] = useState(Math.trunc(Math.random() * n));
    const [C2, setC2] = useState(Math.trunc(Math.random() * n));
    const [D2, setD2] = useState(Math.trunc(Math.random() * n));

    const [A3, setA3] = useState(Math.trunc(Math.random() * n));
    const [B3, setB3] = useState(Math.trunc(Math.random() * n));
    const [C3, setC3] = useState(Math.trunc(Math.random() * n));
    const [D3, setD3] = useState(Math.trunc(Math.random() * n));

    const [A4, setA4] = useState(Math.trunc(Math.random() * n));
    const [B4, setB4] = useState(Math.trunc(Math.random() * n));
    const [C4, setC4] = useState(Math.trunc(Math.random() * n));
    const [D4, setD4] = useState(Math.trunc(Math.random() * n));

    const [A5, setA5] = useState(Math.trunc(Math.random() * n));
    const [B5, setB5] = useState(Math.trunc(Math.random() * n));
    const [C5, setC5] = useState(Math.trunc(Math.random() * n));
    const [D5, setD5] = useState(Math.trunc(Math.random() * n));

    let start = new Date();
    let arr = [];

    const button = useRef();
    const time = useRef();
    // const result = useRef();

    function showResult() {
        let score = 0;
        button.current.disabled = true;
        let end = new Date();
        let min = Math.trunc(Math.round((end - start) / 1000) / 60);
        let seconds = Math.round((end - start) / 1000) - min * 60;

        arr.forEach(function (el) {
            if ((+el[4].current.value === el[0] + el[1])) {
                el[6].current.innerHTML = '✓';
                el[6].current.style.color = 'lime';
                score++;
            } else {
                el[6].current.innerHTML = +el[0] + +el[1];
                el[6].current.style.color = 'red';
            }
            if ((+el[5].current.value === el[2] - el[3])) {
                el[7].current.innerHTML = '✓';
                el[7].current.style.color = 'lime';
                score++;
            } else {
                el[7].current.innerHTML = +el[2] - +el[3];
                el[7].current.style.color = 'red';
            }
        })

        if (score >= right) {
            showKey();
        }
        // result.current.innerHTML = 'Оценка: ' + score;
        time.current.innerHTML = 'Затрачено: ' + min + ' мин ' + seconds + ' сек';
        setTimeout(() => {
            if (time.current) {
                window.scrollTo(document.body.scrollWidth, 0);
                // result.current.innerHTML = '';
                time.current.innerHTML = '';
                    button.current.disabled = false;
                arr.forEach(function (el) {
                    el[4].current.value = '';
                    el[5].current.value = '';
                    el[6].current.innerHTML = '';
                    el[7].current.innerHTML = '';
                })
                setA1(Math.trunc(Math.random() * n));
                setB1(Math.trunc(Math.random() * n));
                setC1(Math.trunc(Math.random() * n));
                setD1(Math.trunc(Math.random() * n));
                setA2(Math.trunc(Math.random() * n));
                setB2(Math.trunc(Math.random() * n));
                setC2(Math.trunc(Math.random() * n));
                setD2(Math.trunc(Math.random() * n));
                setA3(Math.trunc(Math.random() * n));
                setB3(Math.trunc(Math.random() * n));
                setC3(Math.trunc(Math.random() * n));
                setD3(Math.trunc(Math.random() * n));
                setA4(Math.trunc(Math.random() * n));
                setB4(Math.trunc(Math.random() * n));
                setC4(Math.trunc(Math.random() * n));
                setD4(Math.trunc(Math.random() * n));
                setA5(Math.trunc(Math.random() * n));
                setB5(Math.trunc(Math.random() * n));
                setC5(Math.trunc(Math.random() * n));
                setD5(Math.trunc(Math.random() * n));
                start = new Date();
            }
        }, 5000);
        window.scrollTo(0, document.body.scrollHeight);
    }

    // if (!isLogged) return <Redirect to='/'/>

    return (
        <div>
            <br/>
            {n === 10 && <>
                <Example arr={arr} a={A1} b={B1} c={C1} d={D1} colorsArray={colorsArray}/>
                <Example arr={arr} a={A2} b={B2} c={C2} d={D2} colorsArray={colorsArray}/>
                <Example arr={arr} a={A3} b={B3} c={C3} d={D3} colorsArray={colorsArray}/>
                <Example arr={arr} a={A4} b={B4} c={C4} d={D4} colorsArray={colorsArray}/>
                <Example arr={arr} a={A5} b={B5} c={C5} d={D5} colorsArray={colorsArray}/>
            </>}
            {n === 20 && <>
                <Example arr={arr} a={A1 + 10} b={B1 + 10} c={C1 + 10} d={D1 + 10} colorsArray={colorsArray}/>
                <Example arr={arr} a={A2 + 10} b={B2 + 10} c={C2 + 10} d={D2 + 10} colorsArray={colorsArray}/>
                <Example arr={arr} a={A3 + 10} b={B3 + 10} c={C3 + 10} d={D3 + 10} colorsArray={colorsArray}/>
                <Example arr={arr} a={A4 + 10} b={B4 + 10} c={C4 + 10} d={D4 + 10} colorsArray={colorsArray}/>
                <Example arr={arr} a={A5 + 10} b={B5 + 10} c={C5 + 10} d={D5 + 10} colorsArray={colorsArray}/>
            </>}
            <div className='row align-items-center text-center'>
                <span className='col-lg-4 col-md-12 col-sm-12 col-xs-12 fs-4 fst-italic p-1 time' ref={time}></span>
                <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                    <button className='btn btn-success' onClick={showResult}
                            ref={button}>Принять
                    </button>
                </div>
                {/*<span className='col-lg-6 col-md-12 col-sm-12 col-xs-12 result' ref={result}></span>*/}
            </div>
            <div>
                <img className='helper' src={helper} alt='helper'/>
            </div>
            <Contacts/>
        </div>
    )
}

export default Examples