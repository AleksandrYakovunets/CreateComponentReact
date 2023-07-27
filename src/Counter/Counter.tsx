import { useState } from "react";

function Counter(): JSX.Element {

    const[counter, setCounter] = useState(0);

    function add():void{
        setCounter(counter+1);
    }

    // let counter: number = 100;
    // function add(): void {
    //     counter++;
    //     console.log(counter);
    // }




    return (
        <>
            <button type="button" onClick={add}>Click Me!</button>
            <h2>Количество нажатий: {counter}</h2>
        </>
    );
}

export default Counter;