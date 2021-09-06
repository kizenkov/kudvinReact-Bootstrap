import './Syllables.css';
import {useRef} from 'react';
import SyllablesLandscape1 from './SyllablesLandscape1';
import SyllablesPortrait1 from './SyllablesPortrait1';
import Contacts from '../Contacts/Contacts';
// import {Redirect} from 'react-router-dom';

function Syllables({isLogged, right, showKey}) {

    const syllable = useRef();
    let score = 0;

    function showSyllable(e) {
        score++;
        if (score >= right) {
            showKey();
        }
        syllable.current.innerHTML = e.currentTarget.innerHTML;
        syllable.current.className = 'newSyllable';
        syllable.current.onclick = () => {
            syllable.current.innerHTML = '';
            syllable.current.className = '';
        }
    }

    // if (!isLogged) return <Redirect to='/'/>

    return (
        <div className='syllables'>
            <SyllablesLandscape1 showSyllable={showSyllable}/>
            <SyllablesPortrait1 showSyllable={showSyllable}/>
            <div ref={syllable}></div>
            <Contacts/>
        </div>
    )
}

export default Syllables