
/** 호이스팅이란 변수 선언과 동시에 초기화가 이루어져 스코프에서 즉시 접근가능해져
 * 에러를 발생시키지 않고 초기에 undefined의 값을 가지고 변수가 존재하는 라인을 지나며
 * 값이 할당되고 이후로는 undefined가 아닌 할당된 값으로 접근이 가능해진다. */
export default function Hoisting() {

    const func = () => {
        if (constant) console.log(constant);
        if (!constant) console.log('constant is not exist ---!');
        if (letVar) console.log(letVar);
        if (!letVar) console.log('letVar is not exist ---!');
        if (variable) console.log(variable);
        if (!variable) console.log(`origin variable is not exist ---! : ${variable}`);
    }

    // // const는 상수 선언이기 때문에 호이스팅 되지 않음.
    // // 함수가 실행되기 전 선언되어야 함.
    // // 때문에 초기화되지 않았다는 에러 발생
    // func();

    const constant = "I'm a const!";

    // // constant 초기화 에러는 발생하지 않지만
    // // let으로 선언한 변수 역시 호이스팅이 일어나지 않아 초기화 오류 발생 시킴
    // func();

    let letVar = "I'm a let variable";

    // // var로 선언한 variable은 호이스팅만 일어남
    // // 호이스팅으로 초기화 단계가 적용되어 값은 undefined로 지정되어 있다.
    // func();

    var variable = "i'm a origin variable!";

    // 정상적으로 모든 변수들이 할당된 채 실행
    func();

    // 결과적으로 const, let 두 선언자 모두 호이스팅이 일어나지만
    // 실질적으로 코드의 절차적 실행 순서에 의해서 활용할 수 없는 호이스팅으로서
    // 실행 개발 불가능 형태로 적용되어진다.

    // 컴파일 단계에서 이루어지는 로직에 대해 이해할 것

    return (
        <div>
            Hoisting
        </div>
    )
}