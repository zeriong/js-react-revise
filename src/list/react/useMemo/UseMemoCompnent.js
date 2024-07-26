import {useMemo, useState} from "react";

const UseMemoComponent = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => setCount(count + 1);

    // 의존성 배열에 존재하는 state 또는 props 의 변경이 감지 될 떄 마다
    // useMemo 를 할당한 usingMemoState 변수는 내부 함수를 실행시키고
    // 반환한 값을 그대로 반환하게 된다.
    // 특정 값이 변경 될 때 의존성을 가진 state의 변화가 필요한 경우 활용할 수 있다.

    // useEffect + useState 를 합친 개념과 유사하다고 볼 수 있다.
    const usingMemoState = useMemo(() => {
        return count * 5;
    }, [count]);

    return(
        <div>
            <p>
                UseMemoComponent
            </p>

            <div style={{
                backgroundColor: "black",
                padding: "12px",
                color: "white",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                width: "fit-content",
                height: "fit-content",
            }}>
                <button type="button" onClick={increaseCount}>
                    Increase Count
                </button>
                <div style={{display: "flex"}}>
                    <p>count: </p>
                    <p>{` ${count}`}</p>
                </div>
                <div style={{display: "flex"}}>
                    <p>using memo state (count x 5): </p>
                    <p>{usingMemoState}</p>
                </div>
            </div>
        </div>
    );
}

export default UseMemoComponent;
