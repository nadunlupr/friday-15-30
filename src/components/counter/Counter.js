import { useState, useEffect, useReducer } from 'react';
import Reducer from '../../reducer/reducer';

function Counter(props) {

    const [count, setCount] = useState(0);
    const [age, setAge] = useState(0);
    const initialState = {
        marks: 0,
        address: ''
    };

    const [state, dispatch] = useReducer(Reducer, initialState);

    useEffect(() => {
        console.log('inside useEffect');
    }, []);

    return (
        <div>
            <button onClick={() => setCount(count => count + 1)} >Count +1</button>
            <button onClick={() => setAge(age => age + 5)}> Age + 5</button>
            <button onClick={() => dispatch({
                type: 'change_address',
                payload: { address: 'new address' },
            })} >Send Address Action</button>
            <div>
                Count: {count}
            </div>
            <div>
                Age: {age}
            </div>
            <div>
                Address: {state.address}
            </div>
        </div>
    )
}

export default Counter;