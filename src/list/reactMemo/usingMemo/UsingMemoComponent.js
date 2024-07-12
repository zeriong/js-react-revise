import React, {useEffect, useLayoutEffect, useState} from 'react';
import UsingMemoInput from "./UsingMemoInput";

const UsingMemoComponent = () => {
    console.log('Using Memo Component was render')

    const [value, setValue] = useState("");
    const [propsValue, setPropsValue] = useState("");

    return (
        <div style={{ backgroundColor: "#eee", marginBottom: "60px", padding: "20px", borderRadius: "30px", width: "fit-content" }}>
            <p style={{ backgroundColor: "skyblue", padding: "8px", width: "fit-content", fontWeight: "bolder" }}>ReactMemoComponent</p>
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

            <UsingMemoInput state={propsValue}/>
        </div>
    )
}

export default UsingMemoComponent;
