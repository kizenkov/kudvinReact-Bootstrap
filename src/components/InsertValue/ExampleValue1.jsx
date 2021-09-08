import {useRef, useEffect} from 'react';

function ExampleValue1({a, b, c, d, arr, colorsArray}) {

    const numFirst1 = useRef();
    const numFirst2 = useRef();
    const numSecond1 = useRef();
    const numSecond2 = useRef();
    const input1 = useRef();
    const input2 = useRef();
    const result1 = useRef();
    const result2 = useRef();
    const sign1 = useRef();
    const sign2 = useRef();

    let f, e, x, y;
    if (a > b) {
        y = a;
        x = b;
    } else if (a < b) {
        x = a;
        y = b;
    } else {
        y = a + 1;
        x = b;
    }
    if (c > d) {
        f = c;
        e = d;
    } else if (c < d) {
        f = d;
        e = c;
    } else {
        f = c + 1;
        e = d;
    }

    useEffect(
        () => {
            numFirst1.current.innerHTML = x;
            numSecond1.current.innerHTML = ' = ' + y;
            numFirst2.current.innerHTML = f;
            numSecond2.current.innerHTML = ' = ' + e;
            numFirst1.current['style'].color = numSecond1.current['style'].color = sign1.current['style'].color = input1.current['style'].color = colorsArray[Math.floor(Math.random() * colorsArray.length)]
            numFirst2.current['style'].color = numSecond2.current['style'].color = sign2.current['style'].color = input2.current['style'].color = colorsArray[Math.floor(Math.random() * colorsArray.length)]
        },
        [x, y, f, e, colorsArray],
    );

    arr.push([x, y, f, e, input1, input2, result1, result2]);

    function isNumber() {
        let val1 = input1.current['value'];
        let val2 = input2.current['value'];
        if (isNaN(val1) || val1 === ' ') {
            input1.current.value = null;
        }
        if (isNaN(val2) || val2 === ' ') {
            input2.current.value = null;
        }
    }

    return (
        <div className='row justify-content-around text-center'>
            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 fs-1 p-4'>
                <span ref={numFirst1}></span>
                <span ref={sign1}>+</span>
                <input type='text' ref={input1} onKeyUp={isNumber} maxLength={2}/>
                <span ref={numSecond1}></span>
                <span> </span><b ref={result1}></b>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 fs-1 p-4'>
                <input type='text' ref={input2} onKeyUp={isNumber} maxLength={2}/>
                <span ref={sign2}>-</span>
                <span ref={numFirst2}></span>
                <span ref={numSecond2}></span>
                <span> </span><b ref={result2}></b>
            </div>
        </div>
    )
}

export default ExampleValue1