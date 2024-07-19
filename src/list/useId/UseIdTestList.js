import {useId} from "react";

export const UseIdTestList = ({ title }) => {
    const uuid = useId();
    return (
        <div style={{ padding: "6px", border: "2px solid lightGray" }}>
            <p>id: <span style={{ color: "white", backgroundColor: "black" }}>{uuid}</span></p>
            <p>{title}</p>
        </div>
    )
}
