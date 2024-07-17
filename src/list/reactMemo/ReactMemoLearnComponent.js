import UsingMemoComponent from "./usingMemo/UsingMemoComponent";
import NoneMemoComponent from "./noneMemo/NoneMemoComponent";

const ReactMemoLearnComponent = () => {

    // 컴포넌트를 React.memo 를 활용해서 리렌더링 최적화가 가능한 것은 오직
    // "부모 요소로 부터 받은 전달 받은 props 에 의한 리렌더링" 을 방지해주는 것이 궁극적이고
    // 컴포넌트를 세부화 한다면 React.memo 를 활용해서 더 많은 최적화를 할 수 있을 것이다.

    // 그렇기 때문에 React.memo 를 활용한 컴포넌트는 각 인풋에 문자열을 입력할 경우
    // 각 인풋이 가진 콘솔 로그만을 실행하게 되고, [ Parent Input ] 요소에서 submit 했을 때만
    // 동시에 로그가 찍히게 된다.

    // 반면 React.memo 를 활용하지 않은 컴포넌트에서는
    // [ Parent Input ] 요소에서 문자열을 입력할 경우 하위 컴포넌트인
    // [ Input ] 컴포넌트에서도 콘솔로그를 실행시키게 된다.

    // [ Parent Input ] 요소에서 입력하고 submit 한 state 를
    // [ Input ] 컴포넌트에 props 로 내려주어 "Submit Content" 영역에
    // submit 이 실행 됐을 때만 리렌더링 되면 되기 때문에

    // 특정 action 에서만 하위 컴포넌트에 props 로 내려준 값이 리렌더링되어야 하는 경우
    // React.memo 를 활용하면 최적화 가능하다.

    return (
        <>
            <UsingMemoComponent/>
            <NoneMemoComponent/>
        </>
    )
}

export default ReactMemoLearnComponent;
