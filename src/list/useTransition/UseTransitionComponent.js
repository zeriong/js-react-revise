import {useState, useTransition} from "react";

export default function UseTransitionComponent() {
    const [isPending, startTransition] = useTransition();
    const [inputVal, setInputVal] = useState("");

    const handleInputChange = (evt) => {
        startTransition(() => {

        });
    }

    return (
        <div>
            <p>UseTransitionComponent</p>
            <div>
                <input type="text" onChange={handleInputChange} />
            </div>
            {isPending ?
                <p style={{ fontSize: "30px", fontWeight: "bold" }}>Pending...</p>
                : inputVal}
        </div>
    )
}