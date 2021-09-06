import React, {useRef, useEffect} from 'react';
import yes from './../../files/yes.mp3';
import no from './../../files/no.mp3';
import helper from './../../files/helper.gif';
import Contacts from '../Contacts/Contacts';
// import {Redirect} from 'react-router-dom';

function Tasks({isLogged, showKey, right}) {
    const task = useRef();
    const result = useRef();
    const button = useRef();
    const inputAnswer = useRef();
    const scoreTrue = useRef();
    const scoreFalse = useRef();
    const answer = useRef();

    let tasks = [];
    tasks.push('Маша засушила 3 кленовых листика, а дубовых – на 2 листика больше. Сколько всего листиков засушила Маша?');
    tasks.push('У Пети 4 флажка, а у Вани на 3 флажка больше. Сколько флажков у обоих мальчиков?');
    tasks.push('Мама испекла 9 пирожков, а булочек – на 4 меньше. Сколько булочек испекла мама?');
    tasks.push('У Кати 6 матрёшек, а у Даши на 4 матрёшки больше. Сколько матрёшек у Даши?');
    tasks.push('В большой башне 8 окон, а в маленькой башне на 4 окна меньше. Сколько окон в маленькой башне?');
    tasks.push('Рыбак поймал 6 ершей, а окуней – на 4 меньше. Сколько окуней поймал рыбак?');
    tasks.push('Длина красного карандаша 10см, а синий карандаш на 3см длиннее. Какой длины синий карандаш?');
    tasks.push('Таня вырастила фиалку и кактус. Высота фиалки 7см, а кактус на 3см ниже фиалки. Какой высоты фиалка?');
    tasks.push('В Московском поезде 9 вагонов, а в Тульском на 3 вагона меньше. Сколько вагонов в обоих поездах?');
    tasks.push('На арене цирка выступают 7 жонглёров, а клоунов – на 4 меньше. Сколько всего циркачей выступает на арене?');
    tasks.push('Столяр починил 3 стола, а стульев – на 4 больше. Сколько столов починил столяр?');
    tasks.push('На крыше беседки висят 4 сосульки, а на крыше дома – на 6 сосулек больше. 3 сосульки растаяли. Сколько всего сосулек осталось висеть на крышах?');
    tasks.push('Мультфильм в кинотеатре начался в 5 часов, а закончился в 7. Сколько часов шёл мультфильм?');
    tasks.push('На Новый год в вазу положили 10 мандаринов. 4 мандарина съел папа, 3 мандарина съела мама и еще 3 - бабушка. Сколько мандаринов осталось в вазе?');
    tasks.push('Катя слепила 5 снежков, а сережа - 7. По 3 снежка они бросили друг в друга. Сколько всего снежков осталось у ребят?');
    tasks.push('У Саши есть 3 рубля, а пачка мороженого стоит 1 рубль. Сколько пачек мороженого сможет купить Саша?');

    let results = [8, 11, 5, 10, 4, 2, 13, 7, 15, 10, 3, 11, 2, 0, 6, 3];

    let i = Math.round(Math.random() * (tasks.length - 1));
    let scoreTrueValue = 0;
    let scoreFalseValue = 0;

    useEffect(
        () => {
            task.current.innerHTML = tasks[i];
        }, [i]
    );


    function isNumber() {
        let val = inputAnswer.current['value'];
        if (isNaN(val) || val === ' ') {
            inputAnswer.current.value = null;
        }
    }

    function getResult() {
        let audioYes = new Audio();
        let audioNo = new Audio();
        audioYes.src = yes;
        audioNo.src = no;

        if (inputAnswer.current['value'] === '') {
            window.scrollTo(0, document.body.scrollHeight);
            result.current.innerHTML = 'ВВЕДИТЕ ОТВЕТ';
            result.current['style'].color = 'gold';
            setTimeout(() => {
                if (result.current) {
                    window.scrollTo(document.body.scrollWidth, 0);
                    result.current.innerHTML = null
                }

            }, 2000)
        } else {
            if (+inputAnswer.current['value'] === results[i]) {
                audioYes.play();
                if (scoreTrueValue >= right) {
                    showKey();
                }
                scoreTrue.current.innerHTML = ++scoreTrueValue;
                inputAnswer.current.disabled = 'disabled'
                button.current.disabled = true;
                result.current.innerHTML = 'ВЕРНО &#128521';
                result.current['style'].color = 'green';
                setTimeout(function () {
                    if (result.current) {
                        window.scrollTo(document.body.scrollWidth, 0);
                        inputAnswer.current.disabled = null;
                        button.current.disabled = false;
                        tasks.splice(i, 1);
                        results.splice(i, 1);
                        result.current.innerHTML = null;
                        inputAnswer.current.value = null;
                        if (tasks.length) {
                            i = Math.round(Math.random() * (tasks.length - 1))
                            task.current.innerHTML = tasks[i];
                        } else {
                            task.current.innerHTML = 'ЗАДАЧКИ ЗАКОНЧИЛИСЬ';
                            answer.current.innerHTML = null;
                        }
                    }

                }, 3000)
            } else {
                audioNo.play();
                scoreFalse.current.innerHTML = ++scoreFalseValue;
                inputAnswer.current.disabled = 'disabled'
                button.current.disabled = true;
                result.current.innerHTML = 'НЕПРАВИЛЬНО &#128553';
                result.current['style'].color = 'red';
                setTimeout(function () {
                    if (result.current) {
                        window.scrollTo(document.body.scrollWidth, 0);
                        inputAnswer.current.disabled = null;
                        button.current.disabled = false;
                        result.current.innerHTML = null;
                        inputAnswer.current.value = null;
                    }

                }, 3000)
            }
        }
        window.scrollTo(0, document.body.scrollHeight);
    }

    // if (!isLogged) return <Redirect to='/'/>

    return (
        <div className='container text-center'>
            <div className='task'>
                <div className='fs-1' ref={task}></div>
            </div>
            <div className='container'>
                <div className='row justify-content-center text-center align-items-center'>
                    <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12'>
                        <table className='table table-bordered border-dark '>
                            <thead>
                            <tr>
                                <th>✓</th>
                                <th>❌</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td ref={scoreTrue}>0</td>
                                <td ref={scoreFalse}>0</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12 fs-1'>
                        <span>Ответ: </span>
                        <input type='text' maxLength='2' onKeyUp={isNumber} ref={inputAnswer}/>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                        <button className='btn btn-success' onClick={getResult} ref={button}>Принять</button>
                    </div>
                </div>
                <br/>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <p className='taskResult fs-1 fw-bold ms-4' ref={result}></p>
                    </div>
                </div>
                <div>
                    <img className='helper' src={helper} alt='helper'/>
                </div>
            </div>
            <Contacts/>
        </div>
    )
}

export default Tasks
