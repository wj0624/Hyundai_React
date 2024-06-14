import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

function reducer(state, action) {
    if (action.type === 'up') {
        return { ...state, value: state.value + action.step }; // state 값(이전값)이랑 value(업데이트된값)이 다르면 rerendering
    }
    return state;
}

const initialState = { value: 0 };

const store = createStore(reducer, initialState);

function Counter() {
    const dispatch = useDispatch(); // store에 등록된 reducer가 한개뿐이므로 자동으로 위에서 만든 reducer를 찾아감
    const count = useSelector((state) => state.value); // state에 있는 value만 변경
    return (
        <div>
            <button
                onClick={() => {
                    dispatch({ type: 'up', step: 2 });
                }}
            >
                +
            </button>{' '}
            {count}
        </div>
    );
}

function App() {
    return (
        <Provider store={store}>
            <div>
                <Counter></Counter>
            </div>
        </Provider>
    );
}

export default App;
