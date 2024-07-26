import React, {useState} from "react";
import UsingMemoInput from "../usingMemo/UsingMemoInput";
import NoneMemoInput from "./NoneMemoInput";

const NoneMemoComponent = () => {
    console.log('None Memo Component was render')

    const [value, setValue] = useState("");
    const [propsValue, setPropsValue] = useState("");

    return (
        <div style={{ backgroundColor: "#eee", marginBottom: "60px", padding: "20px", borderRadius: "30px", width: "fit-content" }}>
            <p style={{ backgroundColor: "orangered", padding: "8px", width: "fit-content", fontWeight: "bolder" }}>NoneMemoComponent</p>
            <form onSubmit={(e) => {
                e.preventDefault();
                setPropsValue(value);
            }}>
                <label style={{display: "flex", alignItems: "center"}}>
                    <p style={{height: "fit-content", marginRight: "8px"}}>Parent Input:</p>
                    <input
                        type="text"
                        value={value}
                        style={{
                            border: "1px solid black",
                            backgroundColor: "white",
                            padding: "4px",
                            height: "fit-content",
                            marginRight: "8px"
                        }}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <button type="submit">Submit!</button>
                </label>
            </form>

            <NoneMemoInput state={propsValue}/>
        </div>
    )
}

export default NoneMemoComponent;
