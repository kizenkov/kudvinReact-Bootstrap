import {NavLink} from 'react-router-dom';
import {useRef, useState} from "react";

function Navbar({isLogged, setLogged}) {

    const okMessage = useRef();
    const input = useRef();
    const form = useRef();
    const menu = useRef();
    const [code, setCode] = useState('');
    const checkCode = (e) => {
        e.preventDefault();
        let time = new Date() < new Date(2021, 8, 18, 14, 20);

        if (code === 'q') {
            if (time) {
                setLogged();
                okMessage.current.innerHTML = 'Пароль верный! Выберите раздел!';
                setTimeout(() => {
                    okMessage.current.innerHTML = ''
                }, 2000)
                form.current.innerHTML = '';
            } else {
                setCode('');
                okMessage.current.innerHTML = 'Срок действия пароля истек'
                setTimeout(() => {
                    okMessage.current.innerHTML = ''
                }, 2000)
            }
        } else {
            if (code === '') {
                okMessage.current.innerHTML = 'Введите пароль!';
                setTimeout(() => {
                    okMessage.current.innerHTML = ''
                }, 2000)
            } else {
                setCode('');
                okMessage.current.innerHTML = 'Пароль неверный! Попробуйте еще раз'
                setTimeout(() => {
                    okMessage.current.innerHTML = ''
                }, 2000)
            }
        }
    }

    function notShowMenu() {
        menu.current.classList.remove('show')
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand">ЗАНИМАШКИ</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div ref={menu} class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='letters' className="nav-link" onClick={notShowMenu}>Буквы</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='syllables' className="nav-link" onClick={notShowMenu}>Слоги</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='numbers' className="nav-link" onClick={notShowMenu}>Счёт</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link " href="#" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Примеры<i className="bi bi-caret-down"></i>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink to='examples' className="dropdown-item"
                                             onClick={notShowMenu}>Лёгкие</NavLink></li>
                                <li><NavLink to='hardExamples' className="dropdown-item"
                                             onClick={notShowMenu}>Сложные</NavLink></li>
                                <li><NavLink to='insertValue' className="dropdown-item" onClick={notShowMenu}>Вставить
                                    число</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to='tasks' className="nav-link" onClick={notShowMenu}>Задачи</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Отдых<i className="bi bi-caret-down"></i>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink to='popit' className="dropdown-item"
                                             onClick={notShowMenu}>Popit</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    {/*<div ref={okMessage} className='okMessage'></div>*/}
                    <ul className="navbar-nav">
                        <li className="nav-item d-flex">
                            <NavLink to='contacts' className="nav-link" onClick={notShowMenu}>Контакты</NavLink>
                        </li>
                    </ul>
                    {/*{!isLogged ? <form className="d-flex" onSubmit={checkCode} ref={form}>*/}
                    {/*    <input className="form-control me-1" type="search" placeholder="Введите ключ" aria-label="Search" value={code} onChange={(e) => setCode(e.target.value)} ref={input}/>*/}
                    {/*    <button className="btn btn-outline-success" type="submit">Отправить</button>*/}
                    {/*</form> : null}*/}

                </div>
            </div>
        </nav>

    )
}

export default Navbar