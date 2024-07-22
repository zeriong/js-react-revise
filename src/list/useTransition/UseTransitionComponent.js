import {useState} from "react";

export default function UseTransitionComponent() {
    const [inputVal, setInputVal] = useState("");
    return (
        <div>
            <p>UseTransitionComponent</p>
            <div>
                <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
            </div>
        </div>
    )
}