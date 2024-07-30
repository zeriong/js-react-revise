import React, {useId, useReducer} from 'react';


// init state를 생성
const initialState = {
    inputs: {
        name: '',
        hobby: ''
    },
    users: [
        {
            id: 1,
            name: 'velopert',
            hobby: 'public.velopert@gmail.com',
        },
        {
            id: 2,
            name: 'tester',
            hobby: 'tester@example.com',
        },
        {
            id: 3,
            name: 'liz',
            hobby: 'liz@example.com',
        }
    ]
};

// redux-toolkit을 활용했을때와 마찬가지로 reducer를 만들어주어 활용
function reducer(state, action) {
    switch (action.type) {
        case 'ON_CHANGE' :
            return {
                ...state,
                inputs: {
                    name : action.name,
                    hobby : action.hobby,
                },
            }
        case 'ADD_USER':
            return {
                inputs: initialState.inputs,
                users: [ ...state.users, action.user ],
            };
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id),
            }
    }
}

export default function UseReducerComponent() {

    // 첫번째 인자로 위에서 생성한 reducer함수를 넣어주고
    // 두번째인자로 initState를 넣어준다.
    const [state, dispatch] = useReducer(reducer, initialState);

    // 별도의 useState없이 직접 useReducer의 dispatch를 활용
    const handleOnChange = (e) => {
        const nameVal = e.target[0];
        const hobbyVal = e.target[1];
        dispatch({
            type: 'ON_CHANGE',
            name: nameVal,
            hobby: hobbyVal,
        });
    }

    // 별도의 state없이 직접 useReducer의 dispatch를 활용
    const handleSubmit = (e) => {
        e.preventDefault();
        const nameVal = e.target[0].value.trim();
        const hobbyVal = e.target[1].value.trim();
        if (nameVal === "" || hobbyVal === "") return alert("please check name or hobby");
        dispatch({
            type: 'ADD_USER',
            user: { id: Date.now(), name: nameVal, hobby: hobbyVal }
        });
    }

    /*
    * 전반적인 활용방법은 redux 활용방법과 매우 유사하다.
    * 상태관리 라이브러리를 활용하지 않을 경우 useReducer를 활용하면
    * 복잡한 상태를 보다 편리하게 관리할 수 있다.
    * */

    return (
        <div>
            <p>UseReducerComponent</p>

            {/* form의 onChange와 onSubmit을 활용하여 input value를 가져와 user를 생성 */}
            <form
                onSubmit={handleSubmit}
                onChange={handleOnChange}
                className="my-10 flex flex-col items-center w-fit gap-3"
            >
                <div className="flex gap-3">
                    <p>user name: </p>
                    <input value={state.inputs.name} type="text"/>
                </div>
                <div className="flex gap-3">
                    <p>user name: </p>
                    <input value={state.inputs.hobby} type="text"/>
                </div>

                <button type="submit">
                    create user
                </button>
            </form>

            {/* users 배열을 컴포넌트로 생성 */}
            <ul className="grid gap-3">
                {state.users?.map(user => (
                    <li className="py-2 px-4 bg-gray-100 rounded-md w-[500px] overflow-hidden relative" key={user.id}>
                        <div className="flex gap-3">
                            Name: <p>{user.name}</p>
                        </div>
                        <div className="flex gap-3">
                            Hobby: <p>{user.hobby}</p>
                        </div>

                        {/* 유저 삭제 버튼 */}
                        <button
                            className="absolute right-2 translate-y-center"
                            onClick={() => dispatch({ type: "REMOVE_USER", id: user.id })}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}