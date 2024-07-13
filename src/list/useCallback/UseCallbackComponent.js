import {useCallback, useEffect, useState} from "react";
import PaintComponent from "./PaintComponent";

const UseCallbackComponent = () => {
    const [number, setNumber] = useState(0);

    // 일반 함수에 대한 재생성 여부를 위한 함수
    const checkActionUseCallback = () => {
        console.log("parent : none useCallback");
    }

    // 의존성 배열에 아무것도 넣지 않아 리렌더링이 일어나도 재생성되지 않아
    // setState 를 통해서 리렌더링이 되어도 useEffect 에 의해서 실행되지않음
    const callback = useCallback(() => {
        console.log("parent : Run useCallback");
    }, []);

    const countIndepsCallback = useCallback(() => {
        console.log("------ parent: count is useCallback deps!!!!!!!! ------");
    }, [number])

    // checkActionUseCallback 함수가 재생성 될 때 실행됨.
    // 이후 setNumber 를 통해서 상태를 변경했을 때 리렌더링 되면서 함수가 재생성되어 실행됨
    useEffect(() => {
        checkActionUseCallback();
    }, [checkActionUseCallback]);

    // 위와 같이 useCallback 의 재생성 여부를 확인하기 위한 useEffect
    useEffect(() => {
        callback();
    }, [callback]);

    // 의존성 배열에 number 를 넣은 useCallback 에 대한 재생성 여부를 위한 useEffect
    useEffect(() => {
        countIndepsCallback();
    }, [countIndepsCallback]);


    // 결과적으로 useCallback 은 props 또는 state 모두 에 대해서 의존성을 통해
    // 함수의 생성을 제어할 수 있어 최적화가 가능하다.
    // 하지만 실질적으로 함수에 활용되는 메모리용량은 전체적인 리소스의 적은 부분을 차지하기 때문에
    // 눈에 띄는 효과는 바랄 수 없지만 그래도 함수를 실행 시킬 때만 생성하여 실행시키는 것은
    // devops 철학에 있어 중요한 개념이라고 생각한다.

    return (
        <div>
            <p>UseCallbackComponent</p>
            <button
                type="button"
                style={{ color: "white", padding: "4px", backgroundColor: "black" }}
                onClick={() => setNumber(number + 1)}
            >
                count up!
            </button>
            <PaintComponent countNum={number}/>
        </div>
    )
}

export default UseCallbackComponent;
