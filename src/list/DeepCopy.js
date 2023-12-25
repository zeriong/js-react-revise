export const DeepCopy = () => {
    let obj = { str: 100, dex: 200, int: 1 }
    let copyObj = obj;

    obj.dex = 4444;

    console.log(copyObj)

    return (
        <div>

        </div>
    )
}