/**
 * input에 useState와 useRef를 활용하여 두 훅의 차이점 확인
 * */

import {useRef, useState} from 'react';

export const UseRefAndUseState = () => {
    const colorList = ['red', 'potato', 'tomato', 'skyBlue', 'gray', 'black', 'yellow', 'blue', 'green'];

    const inputRef = useRef(null);
    const [input, setInput] = useState('');

    // useState를 활용한 인풋 변경 시 실행되어 value 값 변경
    const onStateChange = ({ target }) => {
        setInput(target.value);

        const random = Math.round(Math.random() * 10);
        target.style.color = colorList[random];

        console.log(random)
    };

    // 컴포넌트 리렌더링 시 콘솔로그 발생
    console.log('re-rendering');

    // setState를 활용하면 리렌더링이 일어난다.
    // useRef를 활용하면 리렌더링이 일어날 필요가 없어진다.

    // useState를 활용해서 input 값을 컨트롤하는 방식이 오히려 리액트다운 방식이라고 볼 수 있다.
    // 굳이 리렌더링을 왜 시켜줄까 라고 생각한다면 과연 그 방식이 큰 비용을 소모하는가? 확장성이 있는가?
    // 에 대해서 고민해본다면 setState를 활용해서 value를 세팅하는 것이 더 나은 방식일 수 있다.
    // useRef는 DOM에 직접 접근할 수 있고 current라는 바구니를 통해 변수를 저장할 수 있는 훅이라고 볼 수 있다.

    return (
        <div>
            <div style={{fontSize: "20px", marginBottom: "16px"}}>UseRefAndUseState</div>
            <div>
                <div>state input</div>
                <input value={input} onChange={onStateChange}/>
            </div>
            <div>
                <div>ref input</div>
                <input ref={inputRef}/>

                <button type='button' onClick={e => {
                    e.preventDefault();
                    console.log(inputRef.current.value);
                }}>
                    Check inputRef value
                </button>
            </div>
        </div>
    )
}