import {useEffect, useRef} from 'react';

function Block({lop, score, changeScore, setScore, color}) {

    let div = useRef();

    useEffect(() => {
        {div.current['style'].backgroundColor = color}
    }, [])

    if (score === 36) {
        setTimeout(() => {
            div.current['style'].backgroundColor = color;
            div.current.disabled = false;
            setScore(0)
        }, 2000)
    }
    const lopPop = () => {
        const playPromise = lop.play()
        if (playPromise !== undefined) {
            playPromise.then(function () {
            }).catch(function (error) {
            });
        }
        div.current['style'].backgroundColor = 'white';
        div.current.disabled = true;
        changeScore();
    }

    return (
        <button className='popitBlock' ref={div} onClick={lopPop}></button>
    )
}

export default Block