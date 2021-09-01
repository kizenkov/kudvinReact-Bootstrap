import tg from '../../files/icontg.png';
import ig from '../../files/iconig.png';
import vk from '../../files/iconvk.png';
import viber from '../../files/viber.png';

function Contacts() {

    return (
        <div className='contacts'>
            <h3>Контакты для отзывов и предложений: </h3>
            <div className='row'>
                <a className='col' href='http://t.me/umnikill'>
                    <img class='contact' src={tg} alt=""/>
                </a>
                <a className='col' href='viber://chat?number=%2B375336950899'>
                    <img className='contact' src={viber} alt=""/>
                </a>
                <a className='col' href='http://instagram.com/kizenkov_'>
                    <img className='contact' src={ig} alt=""/>
                </a>
                <a className='col' href="https://vk.me/kotenok_kuzya">
                    <img className='contact' src={vk} alt=""/>
                </a>
            </div>
        </div>
    )
}

export default Contacts