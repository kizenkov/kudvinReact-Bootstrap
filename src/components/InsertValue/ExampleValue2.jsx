import {useRef, useEffect} from 'react';

function ExampleValue2({a, b, c, d, arr, colorsArray}) {
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

    useEffect(
        () => {
            numFirst1.current.innerHTML = x;
            numSecond1.current.innerHTML = ' = ' + y;
            numFirst2.current.innerHTML = f;
            numSecond2.current.innerHTML = ' = ' + e;
            numFirst1.current['style'].color = numSecond1.current['style'].color = sign1.current['style'].color = input1.current['style'].color = colorsArray[Math.floor(Math.random() * colorsArray.length)]
            numFirst2.current['style'].color = numSecond2.current['style'].color = sign2.current['style'].color = input2.current['style'].color = colorsArray[Math.floor(Math.random() * colorsArray.length)]
        },
        [a, b, c, d],
    );

    let f, e, x, y;
    if (a > b) {
        y = a;
        x = b;
    } else if (a < b) {
        x = a;
        y = b;
    } else {
        y = a + 2;
        x = b;
    }
    if (c > d) {
        f = c;
        e = d;
    } else if (c < d) {
        f = d;
        e = c;
    } else {
        f = c + 2;
        e = d;
    }
    arr.push([x, y, f, e, input1, input2, result1, result2, true]);

    return (
        <div className='row justify-content-around text-center'>
            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 example'>
                <input type='text' ref={input1}/>
                <span ref={sign1}>+</span>
                <span ref={numFirst1}></span>
                <span ref={numSecond1}></span>
                <span> </span><b ref={result1}></b>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 example'>
                <span ref={numFirst2}></span>
                <span ref={sign2}>-</span>
                <input type='text' ref={input2}/>
                <span ref={numSecond2}></span>
                <span> </span><b ref={result2}></b>
            </div>
        </div>
    )
}

export default ExampleValue2