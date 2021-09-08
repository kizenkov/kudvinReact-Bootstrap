import tg from '../../files/icontg.png';
import ig from '../../files/iconig.png';
import vk from '../../files/iconvk.png';
import viber from '../../files/viber.png';
import clover from '../../files/clover.png';

function Contacts({lang}) {

    return (
        <div className='offcanvas offcanvas-bottom' tabIndex='-1' id='offcanvasBottom'
             aria-labelledby='offcanvasBottomLabel'>
            <div className='offcanvas-header'>
                <span className='offcanvas-title text-start fs-5' id='offcanvasBottomLabel'>
                    {lang === 'ru' && <>Контакты для отзывов и предложений для улучшения имеющихся и создания новых разделов сайта</>}
                    {lang === 'en' && <>Contacts for feedback and suggestions for improving existing and creating new sections of the site</>}
                </span>
                <button type='button' className='btn-close text-reset' data-bs-dismiss='offcanvas'
                        aria-label='Close'></button>
            </div>
            <div className='row offcanvas-body small align-items-center'>
                <a className='col text-center' href='http://t.me/cleverkudvin'>
                    <img className='contact' src={tg} alt='tg'/>
                </a>
                <a className='col text-center' href='viber://chat?number=%2B375336950899'>
                    <img className='contact' src={viber} alt='viber'/>
                </a>
                <a className='col text-center' href='http://instagram.com/clever_kudvin'>
                    <img className='contact' src={ig} alt='ig'/>
                </a>
                <a className='col text-center' href='https://vk.com/im?sel=-133509116'>
                    <img className='contact' src={vk} alt='vk'/>
                </a>
                <span className='text-center label fs-6'><img src={clover} alt='clover'/> 2021 CleverKUDViN </span>
            </div>
        </div>
    )
}

export default Contacts