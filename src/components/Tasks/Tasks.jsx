import React, {useRef, } from 'react';
import yes from './../../files/yes.mp3';
import no from './../../files/no.mp3';
import helper from './../../files/helper.gif';
import Contacts from '../Contacts/Contacts';
import {connect} from "react-redux";
import {incrementScoreFalse, incrementScoreTrue, tasksAndResultsSplice} from "../../store/appReducer";

// import {Redirect} from 'react-router-dom';

function Tasks({isLogged, showKey, right, lang, taskI, resultI, tasksAndResultsSplice, incrementScoreFalse, incrementScoreTrue, scoreTrue, scoreFalse}) {
    const task = useRef();
    const result = useRef();
    const button = useRef();
    const inputAnswer = useRef();
    const answerBlock = useRef();

    // let i = Math.round(Math.random() * (tasks.length - 1));
    // useEffect(() => {
        // task.current.innerHTML = tasks[i];
        // }, []);

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
            if (+inputAnswer.current['value'] === resultI) {
                audioYes.play();
                incrementScoreTrue();
                if (scoreTrue >= right) {
                    showKey();
                }
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
                        tasksAndResultsSplice();
                        result.current.innerHTML = null;
                        inputAnswer.current.value = null;
                        if (!taskI) {
                        //     i = Math.round(Math.random() * (tasks.length - 1))
                        //     task.current.innerHTML = tasks[i];
                        // } else {
                            if (lang === 'ru') {
                                task.current.innerHTML = 'ЗАДАЧКИ ЗАКОНЧИЛИСЬ';
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
                incrementScoreFalse();
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
                <div className='fs-1' ref={task}>{taskI}</div>
            </div>
            <div className='container'>
                <div className='row justify-content-center text-center align-items-center' ref={answerBlock}>
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
                                <td>{scoreTrue}</td>
                                <td>{scoreFalse}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12 fs-1'>
                        <span>
                            {lang === 'ru' && <>Ответ </>}
                            {lang === 'en' && <>Answer </>}
                        </span>
                        <form onSubmit={getResult} className='inline'>
                            <input type='text' maxLength='2' onKeyUp={isNumber} ref={inputAnswer}/>
                        </form>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                        <button className='btn btn-success' onClick={getResult} ref={button}>
                            {lang === 'ru' && <>Подтвердить</>}
                            {lang === 'en' && <>Confirm</>}
                        </button>
                    </div>
                </div>
                <br/>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <p className='taskResult fs-1 fw-bold ms-4' ref={result}/>
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

const mapStateToProps = (state) => {
    return {
        taskI: state.app.tasks[0],
        resultI: state.app.results[0],
        scoreFalse: state.app.scoreFalse,
        scoreTrue: state.app.scoreTrue,
    }
}

export default connect(mapStateToProps, {tasksAndResultsSplice, incrementScoreTrue, incrementScoreFalse})(Tasks)