import {useRef, useEffect} from 'react';

function Example({a, b, c, d, arr}) {
    const example1 = useRef();
    const example2 = useRef();
    const input1 = useRef();
    const input2 = useRef();
    const result1 = useRef();
    const result2 = useRef();
    let colorsArray = ['deeppink', 'blueviolet', 'green', 'orange', 'blue', 'saddlebrown', 'gold'];

    useEffect(
        () => {
            example1.current.innerHTML = a + ' + ' + b + ' = ';
            example2.current.innerHTML = f + ' - ' + e + ' = ';
            example1.current.style.color = example2.current.style.color = input1.current.style.color = input2.current.style.color = colorsArray[Math.floor(Math.random() * colorsArray.length)]
        },
        [a, b, c, d],
    );

    let f;
    let e;
    if (c > d) {
        f = c;
        e = d;
    } else if (c < d) {
        f = d;
        e = c;
    } else {
        f = c + 3;
        e = d;
    }

    arr.push([a, b, f, e, input1, input2, result1, result2]);

    return (
        <div className="row justify-content-around text-center">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12  example">
                <span ref={example1}></span>
                <input type='text' ref={input1}/>
                <span> </span><span ref={result1}></span>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12  example">
                <span ref={example2}></span>
                <input type='text' ref={input2}/>
                <span> </span><span ref={result2}></span>
            </div>
        </div>
    )
}

export default Example