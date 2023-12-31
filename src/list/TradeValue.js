/**
 * 두 변수의 값을 교환하여 할당하는 방법
 * */

export const TradeValue = () => {
    let data1 = 'str 입니다.';
    let data2 = 10000;

    console.log(`data1 : ${data1}`);
    console.log(`data2 : ${data2}`);

    // 구조분해할당을 사용하여 서로 할당된 값을 교환할 수 있다.
    [data1, data2] = [data2, data1];

    console.log(`data1 : ${data1}`);
    console.log(`data2 : ${data2}`);


    return (
        <div>
            TradeValue
        </div>
    )
}