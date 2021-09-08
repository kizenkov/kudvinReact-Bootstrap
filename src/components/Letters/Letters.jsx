import {useRef} from 'react';
import Contacts from '../Contacts/Contacts';
// import helper from '../../files/helper3.gif';
// import {Redirect} from 'react-router-dom';

function Letters({isLogged, colorsArray, showKey, lang}) {

    const ref = useRef();
    let words = [];
    if ( lang === 'ru') {
        words.push('А', 'Б', 'В', 'Г', 'Д', 'Е');
        words.push('Ё', 'Ж', 'З', 'И', 'Й', 'К');
        words.push('Л', 'М', 'Н', 'О', 'П', 'Р');
        words.push('С', 'Т', 'У', 'Ф', 'Х', 'Ц');
        words.push('Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь');
        words.push('Э', 'Ю', 'Я');
    }
    if ( lang === 'en') {
        words.push('А', 'B', 'C', 'D', 'E', 'F');
        words.push('G', 'H', 'I', 'J', 'К');
        words.push('L', 'М', 'N', 'О', 'Р');
        words.push('Q', 'R', 'S', 'T', 'U','V', 'W');
        words.push('X', 'Y', 'Z');
    }

    function disabled(e) {
        words.splice(words.indexOf(e.currentTarget.innerHTML), 1);
        e.currentTarget.disabled = true;
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
            showKey();
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

    // if (!isLogged) return <Redirect to='/'/>

    return (
        <div className='container text-center'><br/>
            <h2>
                {lang === 'ru'&& <>Выберите буквы, которые Вы НЕ выговариваете</>}
                {lang === 'en'&& <>Select letters that you DO NOT pronounce:</>}:
            </h2><br/>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>А</>}{lang === 'en'&& <>А</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>Б</>}{lang === 'en'&& <>B</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>В</>}{lang === 'en'&& <>C</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>Г</>}{lang === 'en'&& <>D</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>Д</>}{lang === 'en'&& <>E</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>Е</>}{lang === 'en'&& <>F</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>Ё</>}{lang === 'en'&& <>G</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>Ж</>}{lang === 'en'&& <>H</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>З</>}{lang === 'en'&& <>I</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>И</>}{lang === 'en'&& <>J</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>Й</>}{lang === 'en'&& <>K</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>К</>}{lang === 'en'&& <>L</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>Л</>}{lang === 'en'&& <>M</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>М</>}{lang === 'en'&& <>N</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>Н</>}{lang === 'en'&& <>O</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>О</>}{lang === 'en'&& <>P</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>П</>}{lang === 'en'&& <>Q</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>Р</>}{lang === 'en'&& <>R</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>С</>}{lang === 'en'&& <>S</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>Т</>}{lang === 'en'&& <>T</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>У</>}{lang === 'en'&& <>U</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>Ф</>}{lang === 'en'&& <>V</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>Х</>}{lang === 'en'&& <>W</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>Ц</>}{lang === 'en'&& <>X</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>Ч</>}{lang === 'en'&& <>Y</>}</button>
            <button className='btn btn-sm btn-warning' onClick={disabled}>{lang === 'ru'&& <>Ш</>}{lang === 'en'&& <>Z</>}</button>
            {lang === 'ru' && <button className='btn btn-sm btn-warning' onClick={disabled}>Щ</button> }
            {lang === 'ru' && <button className='btn btn-sm btn-warning' onClick={disabled}>Ъ</button> }
            {lang === 'ru' && <button className='btn btn-sm btn-warning' onClick={disabled}>Ы</button> }
            {lang === 'ru' && <button className='btn btn-sm btn-warning' onClick={disabled}>Ь</button> }
            {lang === 'ru' && <button className='btn btn-sm btn-warning' onClick={disabled}>Э</button> }
            {lang === 'ru' && <button className='btn btn-sm btn-warning' onClick={disabled}>Ю</button> }
            {lang === 'ru' && <button className='btn btn-sm btn-warning' onClick={disabled}>Я</button> }
            <div className='row align-items-center'>
                <div className='col'>
                    <button className='btn btn-warning' onClick={showPrevWord}>
                        <i className='bi bi-chevron-left'></i>
                    </button>
                </div>
                <span className='col letter fw-bold' ref={ref}>A</span>
                <div className='col'>
                    <button className='btn btn-warning' onClick={showNextWord}>
                        <i className='bi bi-chevron-right'></i>
                    </button>
                </div>
            </div>
            {/*<div>*/}
            {/*    <img className='helper' src={helper} alt='helper'/>*/}
            {/*</div>*/}
            <Contacts lang={lang}/>
        </div>
    )
}

export default Letters