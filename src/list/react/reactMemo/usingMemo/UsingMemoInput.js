import React, {useState} from "react";

const UsingMemoInput = ({ state }) => {
    console.log("Memo Input render!");

    const [value, setValue] = useState("");
    return (
        <>
            <label style={{display: "flex", alignItems: "center"}}>
                <p style={{height: "fit-content", marginRight: "8px"}}>Input:</p>
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
            </label>
            <p style={{marginTop: "16px"}}>Submit Content</p>
            <div style={{
                backgroundColor: "black",
                padding: "12px",
                border: "1px solid black",
                width: "300px",
                wordBreak: "break-all",
                color: "white"
            }}>
                {state}
            </div>
        </>
    )
}

export default React.memo(UsingMemoInput);
