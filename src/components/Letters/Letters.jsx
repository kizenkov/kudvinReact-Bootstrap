import {useRef} from 'react';
import helper from "../../files/helper3.gif";
import {Redirect} from "react-router-dom";

function Letters({isLogged}) {

    const ref = useRef();

    let words = [];
    words.push('А', 'Б', 'В', 'Г', 'Д', 'Е');
    words.push('Ё', 'Ж', 'З', 'И', 'Й', 'К');
    words.push('Л', 'М', 'Н', 'О', 'П', 'Р');
    words.push('С', 'Т', 'У', 'Ф', 'Х', 'Ц');
    words.push('Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь');
    words.push('Э', 'Ю', 'Я');

    let colorsArray = ['green', 'blue', 'magenta', 'darkorange'];

    function disabled(e) {
        words.splice(words.indexOf(e.currentTarget.innerHTML), 1);
        e.currentTarget.disabled = true;
    }

    function getRand() {
        ref.current.style.color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
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

    if (!isLogged) return <Redirect to="/"/>

    return (
        <div class='container text-center'><br/>
            <h2>Выберите буквы, которые вы НЕ выговариваете:</h2><br/>
                <button class="btn btn-warning" onClick={disabled}>А</button>
                <button class="btn btn-warning" onClick={disabled}>Б</button>
                <button class="btn btn-warning" onClick={disabled}>В</button>
                <button class="btn btn-warning" onClick={disabled}>Г</button>
                <button class="btn btn-warning" onClick={disabled}>Д</button>
                <button class="btn btn-warning" onClick={disabled}>Е</button>
                <button class="btn btn-warning" onClick={disabled}>Ё</button>
                <button class="btn btn-warning" onClick={disabled}>Ж</button>
                <button class="btn btn-warning" onClick={disabled}>З</button>
                <button class="btn btn-warning" onClick={disabled}>И</button>
                <button class="btn btn-warning" onClick={disabled}>Й</button>
                <button class="btn btn-warning" onClick={disabled}>К</button>
                <button class="btn btn-warning" onClick={disabled}>Л</button>
                <button class="btn btn-warning" onClick={disabled}>М</button>
                <button class="btn btn-warning" onClick={disabled}>Н</button>
                <button class="btn btn-warning" onClick={disabled}>О</button>
                <button class="btn btn-warning" onClick={disabled}>П</button>
                <button class="btn btn-warning" onClick={disabled}>Р</button>
                <button class="btn btn-warning" onClick={disabled}>С</button>
                <button class="btn btn-warning" onClick={disabled}>Т</button>
                <button class="btn btn-warning" onClick={disabled}>У</button>
                <button class="btn btn-warning" onClick={disabled}>Ф</button>
                <button class="btn btn-warning" onClick={disabled}>Х</button>
                <button class="btn btn-warning" onClick={disabled}>Ц</button>
                <button class="btn btn-warning" onClick={disabled}>Ч</button>
                <button class="btn btn-warning" onClick={disabled}>Ш</button>
                <button class="btn btn-warning" onClick={disabled}>Щ</button>
                <button class="btn btn-warning" onClick={disabled}>Ъ</button>
                <button class="btn btn-warning" onClick={disabled}>Ы</button>
                <button class="btn btn-warning" onClick={disabled}>Ь</button>
                <button class="btn btn-warning" onClick={disabled}>Э</button>
                <button class="btn btn-warning" onClick={disabled}>Ю</button>
                <button class="btn btn-warning" onClick={disabled}>Я</button>
            <div class='row align-items-center'>
                <div class='col'>
                    <button class="btn btn-warning" onClick={showPrevWord}><i className="bi bi-chevron-left"></i></button>
                </div>
                    <span class='col letter' ref={ref}>A</span>
                <div class='col'>
                    <button class="btn btn-warning" onClick={showNextWord}><i className="bi bi-chevron-right"></i></button>
                </div>
            </div>
            <div>
                <img class='helper' src={helper} alt="helper"/>
            </div>
        </div>
    )
}

export default Letters