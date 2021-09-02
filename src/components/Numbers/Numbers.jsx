import {useRef} from 'react';
import helper from '../../files/helper2.gif';
import {Redirect} from 'react-router-dom';
import Contacts from '../Contacts/Contacts';

function Numbers({isLogged, colorsArray}) {

    const ref = useRef();
    let words = [];
    for (let i = 0; i <= 21; i++) {
        words.push(i);
    }

    function getRand() {
        ref.current['style'].color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    }

    let i = 0;

    function showNextWord() {
        getRand();
        i++;
        if (i >= (words.length)) {
            i = 0
        }
        ref.current.innerHTML = words[i];
    }

    function showPrevWord() {
        getRand();
        i--;
        if (i === -1 || i === -2) {
            i = words.length - 1;
        }
        ref.current.innerHTML = words[i];
    }

    if (!isLogged) return <Redirect to='/'/>

    return (
        <div className='container text-center numbers'>
            <div className='row align-items-center'>
                <div className='col'>
                    <button className='btn btn-success' onClick={showPrevWord}>
                        <i className='bi bi-chevron-left'></i>
                    </button>
                </div>
                <span className='col letter' ref={ref}>0</span>
                <div className='col'>
                    <button className='btn btn-success' onClick={showNextWord}>
                        <i className='bi bi-chevron-right'></i>
                    </button>
                </div>
            </div>
            <div>
                <img className='helper' src={helper} alt='helper'/>
            </div>
            <Contacts />
        </div>
    )
}

export default Numbers