import Contacts from '../Contacts/Contacts';
import letters from '../../files/letters.png';
import syllables from '../../files/syllables.png';
import numbers from '../../files/numbers.png';
import task from '../../files/task.png';
import examples from '../../files/examples.png';
import insertValue from '../../files/insertValue.png';

function Main() {

    return (
        <div className='main'><br/><br/>
            <h1 className='text-center'>Дорогие родители и их дети!</h1><br/><br/>
            <div className='row justify-content-center'>
                <p className='col-10'>
                    <h4>Сегодня не всем удаётся полностью изолировать своих чад от современных гаджетов.
                        И, чтобы скоротать время, сидя в очереди, или не заскучать в машине, дети просят телефон. Так
                        пусть они проведут это время с пользой!
                        Перед Вам простой и понятный набор упражнений для детей от 3х до 8ми лет, благодаря которым мои
                        дети выучили буквы, слоги и тренируются в счёте и задачах! А с веселыми помощниками обучение
                        будет проходить вдвойне интересней!
                    </h4><br/>
                    <h4>
                        В разделе «Буквы», выбрав те, которые ребёнок не выговаривает, Вы будете изучать алфавит уже
                        без них. Не забывайте, что должно проводиться звуковое обучение: произносится звук, а не буква
                        (буква В произносится как звук В, а не ВЭ; буква М - звук М, а не ЭМ).
                    </h4><br/>

                    <div id="carousel1" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                        </div>
                        <div className="carousel-inner text-center">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={letters}  alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={syllables}  alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel1"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel1"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div><br/>

                    <h4>
                        Слоговая таблица во вкладке «Слоги». Слог активируется нажатием на него, деактивируется вторым
                        нажатием.
                    </h4><br/>
                    <h4>
                        Учить цифры лучше в игре и когда ребёнок к этому расположен. Так что, если у Вас хорошее
                        настроение, заходите в раздел «Счет». Он в себе содержит числа от 1 до 21, а также 0, так как
                        это
                        основные числа для запоминания.
                    </h4><br/>

                    <div id="carousel2" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carousel2" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel2" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                        </div>
                        <div className="carousel-inner text-center">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={numbers} alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={task} alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel2"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel2"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div><br/>

                    <h4>
                        Заметьте, что «Задачки» не только на вычисление, но и на внимательность. Не торопитесь.
                    </h4><br/>
                    <h4>
                        «Примеры» делятся на простые и сложные, в которых используются цифры от 0 до 9 и от 7 до 15
                        соответственно. В разделе «Примеры» идет счёт затраченного времени, а в разделе «Вставить число»
                        таймер отсчитывает 1 минуту, в течение которой необходимо успеть  справиться с заданием.
                        После нажатия кнопки «Принять» ребёнок получает оценку.
                    </h4><br/>

                    <div id="carousel3" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carousel3" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel3" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                        </div>
                        <div className="carousel-inner text-center">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={examples} alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={insertValue} alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel3"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel3"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div><br/><br/>

                    <h2 className='text-center'>
                        Всем удачи!
                    </h2><br/><br/>
                </p>
            </div>
            <Contacts/>
        </div>
    )
}

export default Main