import {useEffect, useRef} from 'react';

function Block({lop, score, changeScore, setScore, colorsArray}) {

    let colorBlock = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    let div = useRef();

    useEffect(() => {
        {div.current['style'].backgroundColor = colorBlock}
    }, [])

    if (score === 36) {
        setTimeout(() => {
            div.current['style'].backgroundColor = colorBlock;
            div.current.disabled = false;
            setScore(0)
        }, 2000)
    }
    const lopPop = () => {
        const playPromise = lop.play()
        if (playPromise !== undefined) {
            playPromise.then(function () {
                // Automatic playback started!
            }).catch(function (error) {
                // Automatic playback failed.
                // Show a UI element to let the user manually start playback.
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