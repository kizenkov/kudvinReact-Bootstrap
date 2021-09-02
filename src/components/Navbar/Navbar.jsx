import {NavLink} from 'react-router-dom';
import {useRef, useState} from 'react';

function Navbar({isLogged, setLogged}) {

    const menu = useRef();
    // const okMessage = useRef();
    // const input = useRef();
    // const form = useRef();
    // const [code, setCode] = useState('');
    // const checkCode = (e) => {
    //     e.preventDefault();
    //     let time = new Date() < new Date(2021, 8, 18, 14, 20);
    //
    //     if (code === 'q') {
    //         if (time) {
    //             setLogged();
    //             okMessage.current.innerHTML = 'Пароль верный! Выберите раздел!';
    //             setTimeout(() => {
    //                 okMessage.current.innerHTML = ''
    //             }, 2000)
    //             form.current.innerHTML = '';
    //         } else {
    //             setCode('');
    //             okMessage.current.innerHTML = 'Срок действия пароля истек'
    //             setTimeout(() => {
    //                 okMessage.current.innerHTML = ''
    //             }, 2000)
    //         }
    //     } else {
    //         if (code === '') {
    //             okMessage.current.innerHTML = 'Введите пароль!';
    //             setTimeout(() => {
    //                 okMessage.current.innerHTML = ''
    //             }, 2000)
    //         } else {
    //             setCode('');
    //             okMessage.current.innerHTML = 'Пароль неверный! Попробуйте еще раз'
    //             setTimeout(() => {
    //                 okMessage.current.innerHTML = ''
    //             }, 2000)
    //         }
    //     }
    // }

    return (

        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <NavLink to='/' className='navbar-brand'>=Z=</NavLink>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'
                        aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div ref={menu} class='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink to='letters' className='nav-link'>
                                <span className='w-100 text-start' type='button' data-bs-toggle='collapse'
                                      data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'>
                                Буквы
                                </span>
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='syllables' className='nav-link'>
                                <span className='w-100 text-start' type='button' data-bs-toggle='collapse'
                                      data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'>
                                Слоги
                                </span>
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='numbers' className='nav-link'>
                                <span className='w-100 text-start' type='button' data-bs-toggle='collapse'
                                      data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'>
                                Счёт
                                </span>
                            </NavLink>
                        </li>

                        <li className='nav-item'>
                            <a className="nav-link" data-bs-toggle="collapse" href="#collapseExamples"
                               role="button" aria-expanded="false" aria-controls="collapseExamples">
                                Примеры <i className='bi bi-caret-down  fs-6'></i>
                            </a>
                        </li>
                        <div className="collapse " id="collapseExamples">
                            <div className="card card-body bg-dark ms-4">
                                <NavLink to='examples' className='nav-link'>
                                    <span className='w-100 text-start' type='button' data-bs-toggle='collapse'
                                          data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'>
                                Лёгкие
                                </span> </NavLink>
                            </div>
                            <div className="card card-body bg-dark ms-4">
                                <NavLink to='hardExamples' className='nav-link'>
                                <span className='w-100 text-start' type='button' data-bs-toggle='collapse'
                                      data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'>
                                Сложные
                                </span>
                                </NavLink>
                            </div>
                            <div className="card card-body bg-dark ms-4">
                                <NavLink to='insertValue' className='nav-link'>
                                <span className='w-100 text-start' type='button' data-bs-toggle='collapse'
                                      data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'>
                                Вставить число
                                </span>
                                </NavLink>
                            </div>
                        </div>

                        <li className='nav-item'>
                            <NavLink to='tasks' className='nav-link'>
                                <span className='w-100 text-start' type='button' data-bs-toggle='collapse'
                                      data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'>
                                Задачи
                                </span>
                            </NavLink>
                        </li>

                        <li className='nav-item'>
                            <a className="nav-link" data-bs-toggle="collapse" href="#collapseRelax"
                               role="button" aria-expanded="false" aria-controls="collapseRelax">
                                Отдых <i className='bi bi-caret-down  fs-6'></i>
                            </a>
                        </li>
                        <div className="collapse " id="collapseRelax">
                            <div className="card card-body bg-dark ms-4">
                                <NavLink to='popit' className='nav-link'>
                                <span className='w-100 text-start' type='button' data-bs-toggle='collapse'
                                      data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'>
                                Popit
                                </span>
                                </NavLink>
                            </div>
                        </div>

                    </ul>
                    <ul className='navbar-nav'>
                        <li>
                            <hr className='dropdown-divider text-white'/>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' data-bs-toggle='offcanvas' data-bs-target='#offcanvasBottom'
                               aria-controls='offcanvasBottom'>Контакты</a>
                        </li>
                    </ul>
                    {/*<div ref={okMessage} className='okMessage'></div>*/}
                    {/*{!isLogged ? <form className='d-flex' onSubmit={checkCode} ref={form}>*/}
                    {/*    <input className='form-control me-1' type='search' placeholder='Введите ключ' aria-label='Search' value={code} onChange={(e) => setCode(e.target.value)} ref={input}/>*/}
                    {/*    <button className='btn btn-outline-success' type='submit'>Отправить</button>*/}
                    {/*</form> : null}*/}
                </div>
            </div>
        </nav>

    )
}

export default Navbar