import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const Page1 = () => {

    const [summ, setSumm] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [savedData, setSavedData] = useState<any[]>([]);

    const saveData = () => {
        if (!summ || !category || !date) {
            alert('Введите данные');
            return;
        }
        const data = { summ, category, date };
        const existingData = JSON.parse(localStorage.getItem("formData") || "[]");
        const updatedData = [...existingData, data];
        localStorage.setItem("formData", JSON.stringify(updatedData));
        setSavedData(updatedData);
    };

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("formData") || "[]");
        setSavedData(storedData);
    }, []);

    const calculateTotal = () => {
        return savedData.reduce((total, item) => total + parseFloat(item.summ || "0"), 0);
    };

    return (
        <div className="page1">
            <div className="page1__box">
                <input placeholder="Сумма" className="page1__box__inp" type="text" value={summ} onChange={(e) => setSumm(e.target.value)}
                />
                <Form.Select className="page1__box__inp" aria-label="Default select example" value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>Категории</option>
                    <option value="Машины">Машины</option>
                    <option value="Смартфоны">Смартфоны</option>
                </Form.Select>
                <input className="page1__box__inp" type="date" value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button className="page1__box__btn" onClick={saveData}>
                    Добавить
                </button>
            </div>
            <div className="table">
                <div className="table__tab">Сумма</div>
                <div className="table__tab">Категории</div>
                <div className="table__tab">Дата</div>
            </div>
            <div>
                {savedData.map((item, index) => (
                    <div className="table__box" key={index}>
                        <div className="table__tab">{item.summ}</div>
                        <div className="table__tab">{item.category}</div>
                        <div className="table__tab">{item.date}</div>
                    </div>
                ))}
                <div className="table__box">
                    <div className="table__tab">Итого</div>
                    <div className="table__tab"></div>
                    <div className="table__tab">{calculateTotal()}</div>
                </div>
            </div>
        </div>
    );
};

export default Page1;