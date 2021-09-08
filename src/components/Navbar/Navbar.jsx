import {NavLink} from 'react-router-dom';
import {useRef} from 'react';
import clover from '../../files/clover.png';

function Navbar({isLogged, setLogged, keyForNavbar, setLang, lang}) {

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

    function notShow() {
        menu.current.classList.remove('show');
    }

    function setLangAndNotShow(lang) {
        setLang(lang);
        menu.current.classList.remove('show');
    }

    return (

        <nav className='navbar navbar-expand-lg navbar-dark bg-dark fs-5'>
            <div className='container-fluid px-1'>
                <NavLink to='/' className='navbar-brand fs-2 fst-italic' onClick={notShow}><img src={clover}
                                                                                                alt='clover'/> CleverKUDViN</NavLink>
                {keyForNavbar && <span className='nav-link fs-6 text-center'>
                    {lang === 'ru' && <>Ключ</>}
                    {lang === 'en' && <>Key</>}:
                    <br/>{keyForNavbar}
                </span>}
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'
                        aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div ref={menu} className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item m-2'>
                        </li>
                        <li className='nav-item m-2'>
                            <NavLink to='letters' className='nav-link' onClick={notShow}>
                                {lang === 'ru' && <>Буквы</>}
                                {lang === 'en' && <>Letters</>}
                            </NavLink>
                        </li>
                        {lang === 'ru' && <li className='nav-item m-2'>
                            <NavLink to='syllables' className='nav-link' onClick={notShow}>
                                Слоги
                            </NavLink>
                        </li>}
                        <li className='nav-item m-2'>
                            <NavLink to='numbers' className='nav-link' onClick={notShow}>
                                {lang === 'ru' && <>Счёт</>}
                                {lang === 'en' && <>Numbers</>}
                            </NavLink>
                        </li>
                        <li className='nav-item m-2'>
                            <NavLink to='tasks' className='nav-link' onClick={notShow}>
                                {lang === 'ru' && <>Задачи</>}
                                {lang === 'en' && <>Tasks</>}
                            </NavLink>
                        </li>
                        <li className='nav-item dropdown m-2'>
                            <a className='nav-link' href='/' id='navbarDropdown' role='button'
                               data-bs-toggle='dropdown' aria-expanded='false'>
                                {lang === 'ru' && <>Примеры</>}
                                {lang === 'en' && <>Examples</>}
                            </a>
                            <ul className='dropdown-menu dropdown-menu-dark bg-dark' aria-labelledby='navbarDropdown'>
                                <li><NavLink to='examples' className='nav-link m-2' onClick={notShow}>
                                    {lang === 'ru' && <>Лёгкие</>}
                                    {lang === 'en' && <>Easy</>}
                                </NavLink></li>
                                <li><NavLink to='hardExamples' className='nav-link m-2' onClick={notShow}>
                                    {lang === 'ru' && <>Сложные</>}
                                    {lang === 'en' && <>Complex</>}
                                </NavLink></li>
                                <li><NavLink to='insertValue' className='nav-link m-2' onClick={notShow}>
                                    {lang === 'ru' && <>Вставить число</>}
                                    {lang === 'en' && <>Insert number</>}
                                </NavLink></li>
                            </ul>
                        </li>
                        <li className='nav-item dropdown m-2'>
                            <a className='nav-link' href='/' id='navbarDropdown' role='button'
                               data-bs-toggle='dropdown' aria-expanded='false'>
                                {lang === 'ru' && <>Отдых</>}
                                {lang === 'en' && <>Relax</>}
                            </a>
                            <ul className='dropdown-menu dropdown-menu-dark bg-dark' aria-labelledby='navbarDropdown'>
                                <li><NavLink to='popit' className='nav-link m-2' onClick={notShow}>
                                    Pop-it
                                </NavLink></li>
                            </ul>
                        </li>
                    </ul>

                    <ul className='navbar-nav'>
                        <li className='nav-item m-2'>
                            <hr className='dropdown-divider text-white'/>
                        </li>
                        <li className='nav-item dropdown m-2'>
                            <a className='nav-link' href='/' id='navbarDropdown' role='button'
                               data-bs-toggle='dropdown' aria-expanded='false'>
                                <i className="bi bi-globe"></i>
                            </a>
                            <ul className='dropdown-menu dropdown-menu-dark bg-dark' aria-labelledby='navbarDropdown'>
                                <li><a type='button' className='nav-link m-2' href='/' onClick={() => setLangAndNotShow('ru')}>
                                    RU
                                </a></li>
                                <li><a type='button' className='nav-link m-2' href='/' onClick={() => setLangAndNotShow('en')}>
                                    EN
                                </a></li>
                            </ul>
                        </li>
                        <li className='nav-item m-2'>
                            <a className='nav-link' href='/' data-bs-toggle='offcanvas' data-bs-target='#offcanvasBottom'
                               aria-controls='offcanvasBottom'>
                                {lang === 'ru' && <>Контакты</>}
                                {lang === 'en' && <>Contacts</>}
                            </a>
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