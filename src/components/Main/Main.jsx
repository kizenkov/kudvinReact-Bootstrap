import Contacts from '../Contacts/Contacts';
import letters from '../../files/letters.png';
import syllables from '../../files/syllables.png';
import numbers from '../../files/numbers.png';
import task from '../../files/task.png';
import examples from '../../files/examples.png';
import insertValue from '../../files/insertValue.png';
import helper from '../../files/helper3.gif';

function Main() {

    return (
        <div><br/><br/>
            <h1 className='text-center'>Дорогие родители и их дети!</h1><br/><br/>
            <div className='row justify-content-center main'>
                <p className='col-11 ' >
                    <p className='fs-4 mainText'>Сегодня не всем удаётся полностью изолировать своих чад от современных гаджетов.
                        И, чтобы скоротать время, сидя в очереди, или не заскучать в машине, дети просят телефон. Так
                        пусть они проведут это время с пользой!
                        Перед Вами простой и понятный набор упражнений для детей от 3х до 8ми лет, благодаря которым мои
                        дети выучили буквы, слоги и тренируются в счёте и задачах! А с веселыми помощниками обучение
                        будет проходить вдвойне интересней! <img src={helper} className='helperForMain' alt=''/>
                    </p>
                    <p className='fs-4 mainText'>
                        В разделе «Буквы», выбрав те, которые ребёнок не выговаривает, Вы будете изучать алфавит уже
                        без них. Не забывайте, что должно проводиться звуковое обучение: произносится звук, а не буква
                        (буква «В» произносится как звук «В», а не «ВЭ»; буква «М» - звук «М», а не «ЭМ»).
                    </p>

                    <div id="carousel1" className="carousel carousel-dark slide " data-bs-ride="carousel">
                        <div className="carousel-inner text-center">
                            <div className="carousel-item active">
                                <img src={letters} className=" " alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={syllables} className=" " alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel1"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel1"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>

                    <p className='fs-4 mainText'>
                        Слоговая таблица во вкладке «Слоги». Слог активируется нажатием на него, деактивируется вторым
                        нажатием.
                    </p>
                    <p className='fs-4 mainText'>
                        Учить цифры лучше в игре и когда ребёнок к этому расположен. Так что, если у Вас хорошее
                        настроение, заходите в раздел «Счёт». Он в себе содержит числа от 1 до 21, а также 0, так как
                        это
                        основные числа для запоминания.
                    </p>

                    <div id="carousel2" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-inner text-center">
                            <div className="carousel-item active">
                                <img src={numbers} className=" " alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={task} className=" " alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel2"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel2"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>

                    <p className='fs-4 mainText'>
                        Заметьте, что «Задачки» не только на вычисление, но и на внимательность. Не торопитесь.
                    </p>
                    <p className='fs-4 mainText'>
                        «Примеры» делятся на простые и сложные, в которых используются цифры от 0 до 10 и от 10 до 30
                        соответственно. В разделе «Примеры» идет счёт затраченного времени, а в разделе «Вставить число»
                        таймер отсчитывает 1 минуту, в течение которой необходимо успеть  справиться с заданием.
                    </p>

                    <div id="carousel3" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-inner text-center">
                            <div className="carousel-item active">
                                <img src={insertValue} className=" " alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={examples} className=" " alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel3"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel3"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>
                </p>
            </div>
            <h1 className='text-center'>Успехов!</h1><br/><br/>
            <Contacts/>
        </div>
    )
}

export default Main