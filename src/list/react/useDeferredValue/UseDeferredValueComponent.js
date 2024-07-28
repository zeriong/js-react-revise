import React, {useDeferredValue, useEffect, useState} from 'react';

export default function UseDeferredValueComponent() {
    const [state1, setState1] = useState(0);
    const [state2, setState2] = useState(0);
    const [state3, setState3] = useState(0);
    const [state4, setState4] = useState(0);
    const deferred_state1_value = useDeferredValue(state1);

    // click handler
    const changeAllState = () => {
        setState1(state1 + 1);
        setState2(state2 + 1);
        setState3(state3 + 1);
        setState4(state4 + 1);
    }

    /** useDeferredValue의 우선순위 를 확인하기 위한 useEffects */

    // deferred_state1_value effect
    useEffect(() => console.log("deferred_state1_value: ", deferred_state1_value), [deferred_state1_value]);

    // state1 effect
    useEffect(() => console.log("state1: ", state1), [state1]);

    // state2 effect
    useEffect(() => console.log("state2: ", state2), [state2]);

    // state3 effect
    useEffect(() => console.log("state3: ", state3), [state3]);

    // state4 effect
    useEffect(() => console.log("state4: ", state4), [state4]);

    /*
    * 초기 렌더링을 제외하고는 useDeferredValue로 state1을 감싼 deferred_state1_value 변수의 변화가
    * 일괄 스테이스 변경 시 가장 늦게 호출되는 것을 useEffect subscribe를 통해 확인
    *
    * 실질적으로 state1의 변화 우선순위를 가장 낮게 받고 useDeferredValue를 통해 감싼 후
    * 할당한 변수를 활용해야 한다.
    * */

    return (
        <div>
            <p>
                UseDeferredValueComponent
            </p>
            <div>
                <button type="button" onClick={changeAllState}>
                    changeAllState
                </button>
                <p className="bg-red-600 p-1 w-fit font-bold text-white">Check the console log</p>
            </div>
        </div>
    );
}