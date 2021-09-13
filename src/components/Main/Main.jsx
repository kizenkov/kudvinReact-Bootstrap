import Contacts from '../Contacts/Contacts';
import letters from '../../files/letters.png';
import syllables from '../../files/syllables.png';
import numbers from '../../files/numbers.png';
import task from '../../files/task.png';
import examples from '../../files/examples.png';
import insertValue from '../../files/insertValue.png';
import helper from '../../files/helper3.gif';
import {useRef} from 'react';

function Main({lang}) {
    const buttonUp = useRef();

    function toUp() {
        window.scrollTo(document.body.scrollWidth, 0);
    }

    return (
        <div id='start'><br/><br/>
            <h1 className='text-center'>
                {lang === 'ru' && <>Дорогие родители и их дети!</>}
                {lang === 'en' && <>Dear parents and their children!</>}
            </h1><br/><br/>
            <div className='row justify-content-center main'>
                <div className='col-11 '>
                    <p className='fs-4 mainText'>
                        {lang === 'ru' && <>Сегодня не всем удаётся полностью изолировать своих чад от
                            современных гаджетов. И, чтобы скоротать время, сидя в очереди, или не заскучать в машине,
                            дети просят телефон.
                            Так пусть они проведут это время с пользой! Перед Вами простой и понятный набор упражнений
                            для детей от 3х до 8ми лет, благодаря которым
                            мои дети выучили буквы, слоги и тренируются в счёте и задачах! А с веселыми помощниками
                            обучение
                            будет проходить вдвойне интересней!</>}
                        {lang === 'en' && <>Today, not everyone manages to completely isolate their children from
                            modern gadgets. And to pass the time, sitting in line, or not to get bored in the car,
                            children ask for a phone.
                            So let them make good use of this time! Here is a simple and understandable set of exercises
                            for children from 3 to 8 years old, thanks to which
                            my kids have learned letters, syllables and are practicing counting and problems! And with
                            fun helpers, learning
                            will be doubly interesting!</>}
                        <img src={helper} className='helperForMain' alt='helper'/>
                    </p>
                    <p className='fs-4 mainText'>
                        {lang === 'ru' && <>В разделе «Буквы», выбрав те, которые ребёнок не выговаривает, Вы будете
                            изучать алфавит уже
                            без них. Не забывайте, что должно проводиться звуковое обучение: произносится звук, а не
                            буква (буква «В» произносится как звук «В», а не «ВЭ»; буква «М» - звук «М», а не «ЭМ»).</>}
                        {lang === 'en' && <>In the section «Letters», choosing those that the child does not pronounce,
                            you will learn the alphabet already
                            without them. Do not forget that sound training must be carried out: the sound is
                            pronounced, not
                            letter.</>}
                    </p>
                    {lang === 'ru' &&
                    <div id='carousel1' className='carousel carousel-dark slide ' data-bs-ride='carousel'>
                        <div className='carousel-inner text-center'>
                            <div className='carousel-item active'>
                                <img src={letters} alt='letters'/>
                            </div>
                            <div className='carousel-item'>
                                <img src={syllables} alt='syllables'/>
                            </div>
                        </div>
                        <button className='carousel-control-prev' type='button' data-bs-target='#carousel1'
                                data-bs-slide='prev'>
                            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                        </button>
                        <button className='carousel-control-next' type='button' data-bs-target='#carousel1'
                                data-bs-slide='next'>
                            <span className='carousel-control-next-icon' aria-hidden='true'></span>
                        </button>
                    </div>}

                    {lang === 'en' &&
                    <div id='carousel1' className='carousel carousel-dark slide ' data-bs-ride='carousel'>
                        <div className='carousel-inner text-center'>
                            <div className='carousel-item active'>
                                <img src={letters} alt='letters'/>
                            </div>
                        </div>
                    </div>}

                    {lang === 'ru' && <p className='fs-4 mainText'>
                        Слоговая таблица во вкладке «Слоги». Слог активируется нажатием на него, деактивируется
                        вторым нажатием.
                    </p>}
                    <p className='fs-4 mainText'>
                        {lang === 'ru' && <>Учить цифры лучше в игре и когда ребёнок к этому расположен. Так что, если у
                            Вас хорошее
                            настроение, заходите в раздел «Счёт». Он в себе содержит числа от 1 до 21, а также 0, так
                            как это основные числа для запоминания.</>}
                        {lang === 'en' && <>It is better to learn numbers in the game and when the child is disposed to
                            it. So if you have a good
                            mood, go to the «Account» section. It contains numbers from 1 to 21, as well as 0, so
                            how are these basic numbers to remember.</>}
                    </p>

                    <div id='carousel2' className='carousel carousel-dark slide' data-bs-ride='carousel'>
                        <div className='carousel-inner text-center'>
                            <div className='carousel-item active'>
                                <img src={numbers} alt='numbers'/>
                            </div>
                            <div className='carousel-item'>
                                <img src={task} alt='task'/>
                            </div>
                        </div>
                        <button className='carousel-control-prev' type='button' data-bs-target='#carousel2'
                                data-bs-slide='prev'>
                            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                        </button>
                        <button className='carousel-control-next' type='button' data-bs-target='#carousel2'
                                data-bs-slide='next'>
                            <span className='carousel-control-next-icon' aria-hidden='true'></span>
                        </button>
                    </div>

                    <p className='fs-4 mainText'>
                        {lang === 'ru' && <>Заметьте, что «Задачки» не только на вычисление, но и на внимательность. Не
                            торопитесь.</>}
                        {lang === 'en' && <>Please note that «Tasks» are not only for calculation, but also for
                            attentiveness. Do not hurry.</>}
                    </p>
                    <p className='fs-4 mainText'>
                        {lang === 'ru' && <>«Примеры» делятся на простые и сложные, в которых используются цифры от 0 до
                            10 и от 10 до
                            30 соответственно. В разделе «Примеры» идет счёт затраченного времени, а в разделе «Вставить
                            число» таймер отсчитывает 1 минуту, в течение которой необходимо успеть справиться с
                            заданием.</>}
                        {lang === 'en' && <>«Examples» are divided into simple and complex, which use numbers from 0 to
                            10 and from 10 to
                            30 respectively. In the «Examples» section, the time spent is counted, and in the «Insert
                            number» the timer counts down 1 minute, during which it is necessary to have time to cope
                            with the task.</>}
                    </p>

                    <div id='carousel3' className='carousel carousel-dark slide' data-bs-ride='carousel'>
                        <div className='carousel-inner text-center'>
                            <div className='carousel-item active'>
                                <img src={insertValue} alt='insertValue'/>
                            </div>
                            <div className='carousel-item'>
                                <img src={examples} alt='examples'/>
                            </div>
                        </div>
                        <button className='carousel-control-prev' type='button' data-bs-target='#carousel3'
                                data-bs-slide='prev'>
                            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                        </button>
                        <button className='carousel-control-next' type='button' data-bs-target='#carousel3'
                                data-bs-slide='next'>
                            <span className='carousel-control-next-icon' aria-hidden='true'></span>
                        </button>
                    </div>
                </div>
            </div>
            <br/>
            <h1 className='text-center'>
                {lang === 'ru' && <>Успехов!</>}
                {lang === 'en' && <>Good luck!</>}
            </h1>
            <button className='buttonUp btn btn-success py-1 px-2 m-3' onClick={toUp} ref={buttonUp}>
                <i className='bi bi-arrow-up'></i>
            </button>
            <Contacts lang={lang}/>
        </div>
    )
}

export default Main