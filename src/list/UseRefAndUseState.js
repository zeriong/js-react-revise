import {useRef, useState} from 'react';

export const UseRefAndUseState = () => {
    const inputRef = useRef('');
    const [input, setInput] = useState('');
    return (
        <div>
            UseRefAndUseState
            <input/>
        </div>
    )
}