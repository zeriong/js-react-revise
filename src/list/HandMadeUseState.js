/** 직접 만든 useState */

import {root} from '../index';
import App from '../App';

let _state;

export function useState(initState) {
    if (_state === undefined) _state = initState;

    const state = _state;

    function setState(newValue) {
        _state = newValue;
        root.render(<App/>); // setState내부 렌더 매서드 예시 구현
    }

    return [state, setState];
}