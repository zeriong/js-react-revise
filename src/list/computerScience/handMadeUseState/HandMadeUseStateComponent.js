import React from 'react';
import {useState} from './HandMadeUseState';

/** 직접 만든 useState 실행 확인 */
export default function HandMadeUseState() {
    // initState를 설정
    const [state, setState] = useState(1);

    console.log('컴포넌트 렌더링')

    // 클릭 시 setState를 통해 리렌더링 + state 값 변경
    const onClick = () => {
        setState(state + 1);
        console.log(state);
    }

    return (
        <div>
            HandMadeUseState
            <button onClick={onClick}>convert state</button>
            <p>{state}</p>
        </div>
    )
}