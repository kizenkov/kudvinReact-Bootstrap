import tg from "../../files/icontg.png";
import ig from "../../files/iconig.png";
import vk from "../../files/iconvk.png";
import viber from "../../files/viber.png";

function Contacts() {
    return (
        <div className='contacts'>
                <h3>Контакты для отзывов и предложений: </h3>
            <div className='row'>
                <a class='col' href="http://t.me/umnikill">
                    <img  class='contact' src={tg} alt=""/>
                </a>
                <a  class='col' href="viber://chat?number=%2B375336950899">
                    <img class='contact' src={viber} alt=""/>
                </a>
                <a  class='col' href="http://instagram.com/kizenkov_">
                    <img class='contact' src={ig} alt=""/>
                </a>
                <a  class='col' href="https://vk.me/kotenok_kuzya">
                    <img class='contact' src={vk} alt=""/>
                </a>
            </div>
        </div>
    )
}

export default Contacts