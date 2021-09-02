import tg from '../../files/icontg.png';
import ig from '../../files/iconig.png';
import vk from '../../files/iconvk.png';
import viber from '../../files/viber.png';

function Contacts() {

    return (
        <div className='offcanvas offcanvas-bottom' tabIndex='-1' id='offcanvasBottom'
             aria-labelledby='offcanvasBottomLabel'>
            <div className='offcanvas-header'>
                <h5 className='offcanvas-title text-start' id='offcanvasBottomLabel'>Контакты для отзывов и предложений</h5>
                <button type='button' className='btn-close text-reset' data-bs-dismiss='offcanvas'
                        aria-label='Close'></button>
            </div>
            <div className='row offcanvas-body small align-items-center '>
                <a className='col text-center' href='http://t.me/umnikill'>
                    <img className='contact' src={tg} alt=''/>
                </a>
                <a className='col text-center' href='viber://chat?number=%2B375336950899'>
                    <img className='contact' src={viber} alt=''/>
                </a>
                <a className='col text-center' href='http://instagram.com/kizenkov_'>
                    <img className='contact' src={ig} alt=''/>
                </a>
                <a className='col text-center' href='https://vk.me/kotenok_kuzya'>
                    <img className='contact' src={vk} alt=''/>
                </a>
            </div>
        </div>
    )
}

export default Contacts