import React, {useRef, useEffect} from 'react';
import yes from './../../files/yes.mp3';
import no from './../../files/no.mp3';
import helper from './../../files/helper.gif';
import Contacts from '../Contacts/Contacts';

// import {Redirect} from 'react-router-dom';

function Tasks({isLogged, showKey, right, lang}) {
    const task = useRef();
    const result = useRef();
    const button = useRef();
    const inputAnswer = useRef();
    const scoreTrue = useRef();
    const scoreFalse = useRef();
    const answerBlock = useRef();

    let tasks = [];
    if (lang === 'ru') {
        // tasks.push('Маша засушила 3 кленовых листика, а дубовых – на 2 листика больше. Сколько всего листиков засушила Маша?');
        // tasks.push('У Пети 4 флажка, а у Вани на 3 флажка больше. Сколько флажков у обоих мальчиков?');
        // tasks.push('Мама испекла 9 пирожков, а булочек – на 4 меньше. Сколько булочек испекла мама?');
        // tasks.push('У Кати 6 матрёшек, а у Даши на 4 матрёшки больше. Сколько матрёшек у Даши?');
        // tasks.push('В большой башне 8 окон, а в маленькой башне на 4 окна меньше. Сколько окон в маленькой башне?');
        // tasks.push('Рыбак поймал 6 ершей, а окуней – на 4 меньше. Сколько окуней поймал рыбак?');
        // tasks.push('Длина красного карандаша 10см, а синий карандаш на 3см длиннее. Какой длины синий карандаш?');
        // tasks.push('Таня вырастила фиалку и кактус. Высота фиалки 7см, а кактус на 3см ниже фиалки. Какой высоты фиалка?');
        // tasks.push('В Московском поезде 9 вагонов, а в Тульском на 3 вагона меньше. Сколько вагонов в обоих поездах?');
        // tasks.push('На арене цирка выступают 7 жонглёров, а клоунов – на 4 меньше. Сколько всего циркачей выступает на арене?');
        // tasks.push('Столяр починил 3 стола, а стульев – на 4 больше. Сколько столов починил столяр?');
        // tasks.push('На крыше беседки висят 4 сосульки, а на крыше дома – на 6 сосулек больше. 3 сосульки растаяли. Сколько всего сосулек осталось висеть на крышах?');
        // tasks.push('Мультфильм в кинотеатре начался в 5 часов, а закончился в 7. Сколько часов шёл мультфильм?');
        // tasks.push('На Новый год в вазу положили 10 мандаринов. 4 мандарина съел папа, 3 мандарина съела мама и еще 3 - бабушка. Сколько мандаринов осталось в вазе?');
        // tasks.push('Катя слепила 5 снежков, а сережа - 7. По 3 снежка они бросили друг в друга. Сколько всего снежков осталось у ребят?');
        tasks.push('У Саши есть 3 рубля, а пачка мороженого стоит 1 рубль. Сколько пачек мороженого сможет купить Саша?');
    }
    if (lang === 'en') {
        tasks.push('Masha dried 3 maple leaves, and 2 more oak leaves. How many leaves Masha dried?');
        tasks.push('Pete has 4 flags, and Ivan has 3 more flags. How many flags do both boys have?');
        tasks.push('Mom baked 9 pies and 4 fewer buns. How many buns did mom bake?');
        tasks.push('Kate has 6 nesting dolls, and Dasha has 4 more nesting dolls. How many nesting dolls does Dasha have?');
        tasks.push('The large tower has 8 windows, and the small tower has 4 fewer windows. How many windows are there in a small tower?');
        tasks.push('The fisherman caught 6 ruffs, and 4 fewer perches. How many perches the fisherman caught?');
        tasks.push('The red pencil is 10cm long and the blue pencil is 3cm longer. How long is the blue pencil?');
        tasks.push('Tanya has grown a violet and a cactus. The height of the violet is 7cm, and the cactus is 3cm below the violet. How high is the violet?');
        tasks.push('The Moscow train has 9 cars, and the Tula train has 3 fewer cars. How many cars are in both trains?');
        tasks.push('There are 7 jugglers on the circus arena, and 4 fewer clowns. How many circus performers perform in the arena?');
        tasks.push('The carpenter repaired 3 tables and 4 more chairs. How many tables did the joiner repair?');
        tasks.push('There are 4 icicles hanging on the roof of the gazebo, and 6 more icicles on the roof of the house. 3 icicles melted. How many icicles are left to hang on the roofs?');
        tasks.push("The cartoon in the cinema began at 5 o'clock and ended at 7. How many hours did the cartoon go?");
        tasks.push('For the New Year, 10 tangerines were put in a vase. Dad ate 4 tangerines, Mom ate 3 tangerines and grandma ate 3 more. How many tangerines are left in the vase?');
        tasks.push('Kate blinded 5 snowballs, and Sergey - 7. They threw 3 snowballs at each other. How many snowballs have the guys left?');
        tasks.push('Sasha has 3$, and a pack of ice cream costs 1$. How many packs of ice cream can Sasha buy?');
    }

    let results = [3];

    let i = Math.round(Math.random() * (tasks.length - 1));
    let scoreTrueValue = 0;
    let scoreFalseValue = 0;

    useEffect(() => {
            task.current.innerHTML = tasks[i];
        }, [i, tasks]
    );

    function isNumber() {
        let val = inputAnswer.current['value'];
        if (isNaN(val) || val === ' ') {
            inputAnswer.current.value = null;
        }
    }

    function getResult(e) {
        e.preventDefault();
        let audioYes = new Audio();
        let audioNo = new Audio();
        audioYes.src = yes;
        audioNo.src = no;

        if (inputAnswer.current['value'] === '') {
            window.scrollTo(0, document.body.scrollHeight);
            if (lang === 'ru') {
                result.current.innerHTML = 'ВВЕДИТЕ ОТВЕТ';
            }
            if (lang === 'en') {
                result.current.innerHTML = 'ENTER ANSWER';
            }
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
                if (lang === 'ru') {
                    result.current.innerHTML = 'ВЕРНО &#128521';
                }
                if (lang === 'en') {
                    result.current.innerHTML = 'RIGHT &#128521';
                }
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
                            if (lang === 'ru') {
                                task.current.innerHTML = 'Задачки закончились';
                            }
                            if (lang === 'en') {
                                task.current.innerHTML = 'TASKS ENDED';
                            }
                            answerBlock.current.innerHTML = null;
                        }
                    }
                }, 3000)
            } else {
                audioNo.play();
                scoreFalse.current.innerHTML = ++scoreFalseValue;
                inputAnswer.current.disabled = 'disabled'
                button.current.disabled = true;
                if (lang === 'ru') {
                    result.current.innerHTML = 'НЕПРАВИЛЬНО &#128553';
                }
                if (lang === 'en') {
                    result.current.innerHTML = 'NOT RIGHT &#128553';
                }
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
            <div className='container' ref={answerBlock}>
                <div className='row justify-content-center text-center align-items-center' >
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
                        <span>
                            {lang === 'ru' && <>Ответ </>}
                            {lang === 'en' && <>Answer </>}
                        </span>
                        <form onSubmit={getResult}>
                            <input type='text' maxLength='2' onKeyUp={isNumber} ref={inputAnswer}/>
                        </form>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                        <button className='btn btn-success' onClick={getResult} ref={button}>
                            {lang === 'ru' && <>Подтвердить</>}
                            {lang === 'en' && <>Confirm</>}
                        </button>
                    </div>
                </div >
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
