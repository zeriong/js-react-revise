function useState(initVal) {
    let val = initVal;
    const state = val;
    const setState = (newVal) => {
        val = newVal
    }
    return function() {
        return [state, setState];
    };
}