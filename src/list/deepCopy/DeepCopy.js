/**
 * 원시타입(number, string, boolean, symbol, null, undefined ...)의 경우는 변수에 할당 될 때
 * 메모리상에 값이 직접적으로 할당된다.
 * -------------------------------------------------------------------------------------------------------
 * 참조타입(object, array, function, Data, Set, Map 등)의 경우는 값이 메모리상에 모두 할당되는 것이 아닌
 * 메모리 공간에 값의 주소가 할당되어 참조하는 형태로 메모리에 할당된다.
 *
 * 참조타입은 단순하게 새로운 변수에 할당한다고 해서 온전히 독립적인 형태의 변수가 되지 않는다.
 * 이는 즉, 단순 변수할당으로 복사한 object의 특정 값을 변경한다고 가정했을 때
 * [ 복사 변수 ], [ origin 변수 ] 모두 동시에 변경된다.
 * -------------------------------------------------------------------------------------------------------
 * 깊은 복사는 새로운 변수 메모리에 온전히 독립적인 값을 가지도록 복사한 것을 의미한다.
 * -------------------------------------------------------------------------------------------------------
 * 얕은 복사는 참조타입처럼 메모리공간의 주소를 참조하는 형태로 할당된 변수를 복사할 때, 모든 값이
 * 독립적으로 복사되지 않고 저장되어있는 메모리의 주소(위치)에 대한 값만 복사가 되어 원본과 복사본 모두
 * 같은의 메모리 주소를 가리키게 되어 둘 중 하나라도 값을 변경하면 두 변수가 동시에 같은 값으로 변경되는 형태로
 * 복사가 된 형태를 뜻한다.
 *
 * 얕은 복사를 하기 위한 방법론은 아래 컴포넌트 참조!
 * */

export default function DeepCopy() {
    /*
      얕은 복사가 아닌 완전히 독립적인 오브젝트로 복사하기 위해서는
      스프레드함수(...)와 배열은 slice, 객체는 assign 매서드를 사용할 수 있다.
    */
    console.log('----------- 스프레드 연산자를 활용한 obj 복사 예시 ------------');

    let obj = { str: 100, dex: 200, int: 1 };
    console.log('원본 객체 obj: ', obj);

    let copyObj = {...obj};
    console.log('obj를 스프레드연산자를 통해 변수 copyObj에 할당');
    console.log('obj: ', obj);
    console.log('copyObj: ', copyObj);

    console.log('---------------------------------------------------------');

    obj.dex = 4444;
    obj.str = 4444;
    obj.int = 4444;
    console.log('obj 내부 모든 키에 숫자 4444를 할당');
    console.log('obj: ', obj);
    console.log('copyObj: ', copyObj);

    console.log('---------------------------------------------------------');

    copyObj.dex = 9999;
    console.log('copyObj의 "dex" value에 9999를 할당');
    console.log('obj: ', obj);
    console.log('copyObj: ', copyObj);

    console.log('---------------------------------------------------------');

    console.log('결과적으로 완벽히 독립적으로 값이 변경된 것을 확인');
    console.log('obj: ', obj);
    console.log('copyObj: ', copyObj);


    console.log('\n\n\n');
    console.log('-------------- Object의 assign을 활용한 복사 ---------------');

    let copyObj2 = Object.assign({}, copyObj);
    console.log('이전에 복사한 copyObj를 copyObj2 라는 변수에 Object.assign을\n활용하여 복사 할당');
    console.log('copyObj: ', copyObj);
    console.log('copyObj2: ', copyObj2);

    copyObj2.dex = 0;
    copyObj2.int = 100000;
    console.log('copyObj2 내부 dex, int에 각각 0, 100000 값을 할당');
    console.log('objCopy: ', copyObj);
    console.log('objCopy2: ', copyObj2);


    console.log('\n\n\n');
    console.log('-------- 스프레드 연산자를 활용한 배열 복사 ---------');

    let arr = ['Hi!', obj, 123, true];
    let copyArr = [...arr];
    console.log('arr을 스프레드연산자를 통해 변수 copyArr에 할당');
    console.log('arr: ', arr);
    console.log('copyArr: ', copyArr);

    console.log('--------------------------------------------------------');

    arr.pop();
    copyArr.shift();
    console.log('arr은 pop(), copyArr는 shift() 하여 배열 변경');
    console.log('arr: ', arr);
    console.log('copyArr: ', copyArr);


    console.log('\n\n\n');
    console.log('-------------- slice를 활용한 배열 복사 ------------');

    let copyArr2 = copyArr.slice();
    console.log('copyArr에 slce 매서드를 사용하여 재구성시켜\ncopyArr2 변수에 할당');
    console.log('copyArr: ', copyArr);
    console.log('copyArr2: ', copyArr2);

    console.log('--------------------------------------------------------');

    copyArr2.push(false);
    console.log('copyArr2에만 false를 push하여 결과적으로\n독립된 배열을 확인');
    console.log('copyArr: ', copyArr);
    console.log('copyArr2: ', copyArr2);

    return (
        <div>
            DeepCopy
            <p style={{ backgroundColor: "red", color: "white", padding: "4px", width: "fit-content", fontWeight: "bold" }}>Check the console log</p>
        </div>
    )
}