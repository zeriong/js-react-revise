/** 직접 만든 useState */

import {root} from '../../../index';
import App from '../../../App';

// 이전 상태를 기억할 수 있도록 확장
let cursor = 0;
const states = [];

export function useState(initState) {
    let localCursor = cursor;

    if (cursor === states.length) states.push(initState);

    const state = states[cursor];

    function setState(newState) {
        states[localCursor] = newState;
        root.render(<App/>); // setState내부 렌더 매서드 예시 구현
    }

    return [state, setState];
}
