import React, { useState, useEffect } from 'react';

function useCount() {
    // Объявляем новую переменную состояния "count"
    const [count, setCount] = useState(0);

    // По принципу componentDidMount и componentDidUpdate:
    useEffect(() => {
        // Обновляем заголовок документа, используя API браузера
        document.title = `Вы нажали ${count} раз`;
    }, [count]); // [count] Перезапускать эффект только если count поменялся

    return (
        <div>
            <p>You clicked <b>{count}</b> times</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>
        </div>
    );
}
export default useCount;
