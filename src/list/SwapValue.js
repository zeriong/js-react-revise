/**
 * 두 변수의 값을 교환하여 할당하는 방법
 * */

export const SwapValue = () => {
    let data1 = 'str 입니다.';
    let data2 = 10000;

    console.log(`data1 : ${data1}`);
    console.log(`data2 : ${data2}`);
    console.log('--------------------------------------------------------');

    // 구조분해할당을 사용하여 서로 할당된 값을 교환할 수 있다.
    // 구조 분해할당이 가능한 것은 이터러블(반복 가능한) 객체만 가능하다 (Set, Array, )
    [data1, data2] = [data2, data1];

    console.log(`data1 : ${data1}`);
    console.log(`data2 : ${data2}`);
    console.log('--------------------------------------------------------');

    // 레거시한 방법
    let newVar = data1;
    data1 = data2;
    data2 = newVar;

    console.log(`data1 : ${data1}`);
    console.log(`data2 : ${data2}`);
    console.log('--------------------------------------------------------');

    // 필요하지 않은 데이터는 , 를 사용해서 건너뛰기가 가능하다.
    let array = ["A", "B", "C", "D", "E"];
    let [A, , C, ,E] = array;

    console.log(A) // "A"
    console.log(C) // "C"
    console.log(E) // "E"

    // 할당 연산자 우측에 배열 뿐 아니라 모든 이터러블(반복 가능한 객체)이 올 수 있다.
    let [a, b, c] = "all";
    let [on, tw, th] = new Set([1, 2, 3]);

    console.log(a, b, c) // a l l
    console.log(on, tw, th) // 1 2 3

    return (
        <div>
            TradeValue
        </div>
    );
}