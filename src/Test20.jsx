import { useEffect, useState } from 'react';
import list_products from './data';
import styles from './Test20.module.css'

function Test20() {
    const [start, setStart] = useState(0);
    const [showProduct, setShowProduct] = useState([]);

    const show = (e) => {
        const i = parseInt(e.target.innerHTML - 1);
        setStart(start => i * 3);
        console.log(start, start + 3);

    };

    useEffect(() => {
        setShowProduct(list_products.slice(start, start + 3));
    }, [start])

    const prevHandler = () => {
        console.log(start);
        if (start <= 0) setStart(0);
        else
            setStart(start => start - 3)

    }

    const nextHandler = () => {
        console.log(start);
        if (start >= list_products.length - 3)
            setStart(list_products.length - 3 - 2);
        else
            setStart(start => start + 3)
    }





    return (
        <>
            <div className={styles.products}>
                {showProduct.map((item, index) => <p key={item.id} className={styles.cart}>{item.id}</p>)}
            </div>
            <div className={styles.pagination}>
                <button onClick={prevHandler}>Prev</button>
                {showProduct.map((item, index) => <span onClick={show} key={item.id} className={styles.page}>{index + 1}</span>)}
                <button onClick={nextHandler}>next</button>
            </div>
        </>
    )
}

export default Test20
