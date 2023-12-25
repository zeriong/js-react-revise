import {useEffect, useLayoutEffect, useState} from 'react';

export const ReactRenderingOrder = () => {
    console.log('a')

    const [state, setState] = useState(false);
    console.log('b')

    useEffect(() => {
        console.log('c')
        setTimeout(() => {
            setState(true);
            console.log('d')
        }, 1000)
    }, []);

    // 렌더링 순서는
    // a b c d a b 이다.
    // setState함수에는 render함수가 내포되어있어 컴포넌트를 재실행 시켜준다.
    // ** (render 매서드가 내포 되어있다는 것을 잊지말 것)

    // useLayoutEffect는 useEffect보다 먼저 실행됨 (paint이전에 layout단계에서 실행되기 떄문)
    useLayoutEffect(() => {
        console.log('A')
        setTimeout(() => {
            setState(false)
        },3000)
    }, []);

    return (
        <div>
            ReactRenderingOrder
        </div>
    )
}