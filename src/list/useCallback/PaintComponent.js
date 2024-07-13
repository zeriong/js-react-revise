import {useCallback, useEffect} from "react";

const PaintComponent = ({ countNum }) => {

    // 빈배열을 할당해주었으므로 상위 컴포넌트에서 내려준 props 로 인한
    // 리렌더링이 일어나도 함수를 재생성하지 않음
    // (의존성 배열에 props 를 넣는다면 해당 props 가 변경된다면 재생성됨)
    const callback = useCallback(() => {
        console.log("useCallback!!");
    }, []);

    //
    const noneCallback = () => {
        console.log("is none callback function");
    }

    // callback -> watch 하여 변경 시 마다 실행하는 것으로 useCallback 실행 여부를 판단
    useEffect(() => {
        callback();
    }, [callback]);

    // 함수를 의존성 배열에 넣어서 리렌더링(함수 재생성) 여부를 판단
    useEffect(() => {
        noneCallback();
    }, [noneCallback])

    return (
        <div style={{display: "flex", gap: "8px"}}>
            <p>countNum: </p>
            <p>{countNum}</p>
        </div>
    )
}

export default PaintComponent;
