import {useEffect, useRef} from 'react';

function Block({lop, score, changeScore, setScore, color}) {

    let block = useRef();

    useEffect(() => {
            block.current['style'].backgroundColor = color
    }, [color])

    if (score === 36) {
        setTimeout(() => {
            block.current['style'].backgroundColor = color;
            block.current.disabled = false;
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
        block.current['style'].backgroundColor = 'white';
        block.current.disabled = true;
        changeScore();
    }

    return (
        <button className='popitBlock' ref={block} onClick={lopPop}></button>
    )
}

export default Block