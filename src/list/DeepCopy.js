export const DeepCopy = () => {
    let obj = { str: 100, dex: 200, int: 1 }
    // 완전히 별도의 오브젝트를 만들기 위해서는 스프레드함수(...)을 사용할 수 있다.
    let copyObj = {...obj};

    obj.dex = 4444;
    obj.str = 4444;
    obj.int = 4444;

    copyObj.dex = 9999;

    console.log(copyObj)

    return (
        <div>
            DeepCopy
        </div>
    )
}