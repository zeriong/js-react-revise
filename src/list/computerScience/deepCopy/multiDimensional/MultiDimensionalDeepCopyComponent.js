export default function MultiDimensionalDeepCopyComponent() {


    console.log('----- 스프레드 연산자를 통해 다차원 배열을 복사 -----');

    const userInfo = [
        { username: "Mr. Zero Stone", hobby: "sing a song", yearsOld: 43 },
        { username: "Mr. Beaver", hobby: "play with zero stone", yearsOld: 41 },
    ];
    const shallowCopy = [...userInfo];
    console.log('userInfo 라는 다차원 배열을 shallowCopy 변수에 할당');
    console.log('userInfo: ', userInfo);
    console.log('shallowCopy: ', shallowCopy);

    console.log('--------------------------------------------------------');

    shallowCopy[0].hobby = "coding";
    console.log('shallowCopy 배열의 index == 0 인 객체에서\n' +
        '{ hobby: "coding" } 으로 변경함으로 2depth 객체를 변경.\n' +
        '두 변수 객체값이 동시에 변하는 것을 확인');
    console.log('userInfo: ', userInfo);
    console.log('shallowCopy: ', shallowCopy);

    console.log('--------------------------------------------------------');

    const userInfo2 = [
        { username: "Mr. Zero Stone", hobby: "sing a song", yearsOld: 43 },
        { username: "Mr. Beaver", hobby: "play with zero stone", yearsOld: 41 },
    ];
    const shallowCopy2 = [...userInfo2];
    userInfo2.pop();
    console.log('새롭게 userInfo2와 shallowCopy2를 생성.\n' +
        'userInfo2에 pop() 매서드를 실행.\n' +
        '1depth에서 변경이 일어난다면 해당 변경에 대해서는\n' +
        '깊은 복사가 된 것을 알 수 있음. (대상에 의한 오염 X)\n');
    console.log('userInfo2: ', userInfo2);
    console.log('shallowCopy2: ', shallowCopy2);

    console.log('--------------------------------------------------------');

    userInfo2.push({ username: "Zeriong", hobby: "eating pizza", yearsOld: 30 });
    console.log('userInfo2에 push() 매서드를 통해 새로운 객체를 추가.\n' +
        '이전 pop() 매서드를 활용한 것과 같이 깊은 복사가 이루어져있음.\n' +
        '1depth에서 추가, 변경이 일어난다면 해당 변경에 대해서는\n' +
        '깊은 복사가 된 것을 알 수 있음. (대상에 의한 오염 X)\n');
    console.log('userInfo2: ', userInfo2);
    console.log('shallowCopy2: ', shallowCopy2);

    console.log('--------------------------------------------------------');

    console.log('정리: 다차원 배열이라도 1depth 에서 일어나는\n' +
        '추가, 변경, 삭제 등은 깊은 복사가 이루어지지만 2depth 즉,\n' +
        '객체 내부의 있는 객체로 접근한 추가, 변경, 삭제는 스프레드연산자를 통한\n' +
        '복사는 얕은복사가 되어있어 추가, 변경, 삭제 시 복사된 모든 변수에 동시 오염이 발생함.\n');

    console.log('\n\n\n');
    console.log('------- 다차원 객체(배열) 깊은 복사 -------');

    const members = [
        {
            group: "Q",
            members: [
                { username: "Mr. Zero Stone", hobby: "sing a song", yearsOld: 43 },
                { username: "Ms. Jungom", hobby: "watch a baseball game", yearsOld: 28 },
                { username: "Mr. Chanan", hobby: "learning Japanese", yearsOld: 30 },
            ]
        },
        {
            group: "S",
            members: [
                { username: "Mr. Beaver", hobby: "play with zero stone", yearsOld: 41 },
                { username: "Mr. Kim", hobby: "watch a baseball game", yearsOld: 29 },
                { username: "Mr. Hwang", hobby: "weight training", yearsOld: 29 },
            ]
        }
    ];
    const deepCopy = JSON.parse(JSON.stringify(members));
    console.log('members 라는 다차원 배열을 deepCopy 변수에 JSON.stringify 후\n' +
        'JSON.parse 하여 객체(배열)애 대한 다중 메모리를 해제 후에\n' +
        '할당 재구성하여 전체적으로 새로운 메모리에 할당되도록 하여 깊은 복사');
    console.log('members: ', members);
    console.log('deepCopy: ', deepCopy);

    console.log('--------------------------------------------------------');

    const cacheMembers = JSON.parse(JSON.stringify(deepCopy));
    cacheMembers.pop();
    console.log('cacheMembers 라는 변수에 deepCopy 를 깊은 복사\n' +
        'cacheMembers.pop() 매서드를 실행.\n' +
        'members, deepCopy, cacheMembers 모두 1depth 변경에\n' +
        '영향을 받지 않는 것을 확인');
    console.log('members: ', members);
    console.log('deepCopy: ', deepCopy);
    console.log('cacheMembers: ', cacheMembers);

    console.log('--------------------------------------------------------');

    members[0].members.map(item => item.username = "Mr. Zero Stone");
    console.log('members 배열에 map() 매서드를 통해\n' +
        'group: Q 의 members의 username을 모두 동일하게 변경\n' +
        '깊은 복사를 한 나머지 변수들이 모두 오염되지 않는 것을 확인');
    console.log('members: ', members);
    console.log('deepCopy: ', deepCopy);
    console.log('cacheMembers: ', cacheMembers);

    console.log('--------------------------------------------------------');

    return (
        <div>
            <p>Multi Dimensional Deep-Copy Component</p>
            <p style={{backgroundColor: "red", color: "white", padding: "4px", width: "fit-content", fontWeight: "bold"}}>Check the console log</p>
        </div>
    )
}