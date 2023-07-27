import { useState } from "react";

function Apple(): JSX.Element {

    let [apple, setApple] = useState("Яблоко");

    function click(): void {

        (apple === "Яблоко") ? setApple("Упс! Съели яблочкооо!") : setApple("Яблоко");
    }
    return (
        <>
            <h2>Задание 1</h2>
            <button type="button" onClick={click} className="btn">{apple}</button>
        </>
    );
}

export default Apple;