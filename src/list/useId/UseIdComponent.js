import {UseIdTestList} from "./UseIdTestList";

const UseIdComponent = () => {

    // 하위 컴포넌트인 <UseIdTestList /> 컴포넌트에서
    // 해당 컴포넌트가 생성될 때마다 useId 훅을 활용하여 각 id를 생성
    // 해당 id는 페이지 내에서 절대로 중복되지 않는 문자열을 반환함
    // useId는 ssr에서도 불일치 에러를 반환하지 않고 제대로 작동하도록 구성되어 있다.

    // todo: 추 후 next 또는 remix 프레임워크를 활용하여 해당 기능 검증예정

    return (
        <div>
            <p>
                UseIdComponent
            </p>
            <button
                type="button"
                style={{ backgroundColor: "lightskyblue", color: "white", padding: "8px", width: "fit-content", marginBottom: "12px", cursor: "pointer" }}
                onClick={() => window.location.reload()}
            >
                refresh page!
            </button>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                    "ITEM 1",
                    "ITEM 2",
                    "ITEM 3",
                    "ITEM 4",
                    "ITEM 5",
                    "ITEM 6",
                ].map(item => (
                    <UseIdTestList key={item} title={item}/>
                ))
            }
            </div>
        </div>
    )
}
export default UseIdComponent;
