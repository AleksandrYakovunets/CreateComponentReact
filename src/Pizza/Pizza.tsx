import { useState } from "react";

function Pizza(): JSX.Element {

    let [cheese, setCheese] = useState(0);
    let [tomato, setTomato] = useState(0);
    let [sausage, setSausage] = useState(0);
    let [mushroom, setMushroom] = useState(0);
    let [alcohol, setAlcohol] = useState(0);

        function addProduct(event:any): void {
            let id = event.target.id;

            switch (id) {
                case "id_cheese": setCheese(++cheese);
                    break;
                case "id_tomato": setTomato(++tomato);
                    break;
                case "id_sausage": setSausage(++sausage);
                    break;
                case "id_mushroom": setMushroom(++mushroom);
                    break;
                case "id_alcohol": setAlcohol(++alcohol);
                    break;
            }
        }

        function clear():void{
            setCheese(0);
            setTomato(0);
            setSausage(0);
            setMushroom(0);
            setAlcohol(0);
        }

    return (
        <>
            <h2>Задание 2</h2>
            <div className="pizza">
                <button id="id_cheese" type="button" className="btn" onClick={addProduct}>Добавить сыр</button>
                <button id="id_tomato"type="button" className="btn" onClick={addProduct}>Добавить томат</button>
                <button id="id_sausage"type="button" className="btn" onClick={addProduct}>Добавить колбасу</button>
                <button id="id_mushroom" type="button" className="btn" onClick={addProduct}>Добавить грибы</button>
                <button id="id_alcohol" type="button" className="btn" onClick={addProduct}>Добавить 50 грамм под пиццу!</button>
            </div>
            <div className="result">
                <h2>В вашем заказе:</h2>
                Сыр - {cheese} порц.; <br />
                Томат - {tomato} порц.; <br />
                Колбаса - {sausage} порц.; <br />
                Грибы - {mushroom} порц.; <br />
                Алкоголь - {alcohol} порц.;

                <button type="button" className="btn" onClick={clear}>Очистить заказ!</button>
            </div>
        </>
    );
}
export default Pizza;

function getElementById() {
    throw new Error("Function not implemented.");
}
