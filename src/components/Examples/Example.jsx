import {useRef, useEffect} from 'react';

function Example({a, b, c, d, arr, colorsArray}) {

    const example1 = useRef();
    const example2 = useRef();
    const input1 = useRef();
    const input2 = useRef();
    const result1 = useRef();
    const result2 = useRef();

    useEffect(
        () => {
            example1.current.innerHTML = a + ' + ' + b + ' = ';
            example2.current.innerHTML = f + ' - ' + e + ' = ';
            example1.current['style'].color = example2.current['style'].color = input1.current['style'].color = input2.current['style'].color = colorsArray[Math.floor(Math.random() * colorsArray.length)]
        },
        [a, b, c, d],
    );

    let f;
    let e;
    if (a === 0 && b === 0) {
        b = 4
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

    arr.push([a, b, f, e, input1, input2, result1, result2]);

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
                <span ref={example1}></span>
                <input type='text' ref={input1} onKeyUp={isNumber} maxLength={2}/>
                <span> </span><span ref={result1}></span>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 fs-1 p-4'>
                <span ref={example2}></span>
                <input type='text' ref={input2} onKeyUp={isNumber} maxLength={2}/>
                <span> </span><span ref={result2}></span>
            </div>
        </div>
    )
}

export default Example