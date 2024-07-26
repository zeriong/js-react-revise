import {useState, useTransition} from "react";
import {users} from "../../../mock/users";

export default function UseTransitionComponent() {
    const [isPending, startTransition] = useTransition();
    const [inputVal, setInputVal] = useState("");
    const [filtered, setFiltered] = useState([]);

    // 인풋에서 onChange 가 실행되면 mock users data에서 이름에 input value가 포함되는 객체를
    // 필터링하여 카드섹션으로 렌더링된다.

    // useTransition 이 우선순위를 낮추어 isPending이 실행되는 것을
    // 시각적으로 구현하기 위해서 faker.js 라이브러리를 활용해서
    // filter를 통해 복잡한 연산을 구현하였고 이를 통해서 시각적으로
    // 확인할 수 있게 됨.

    // 유의사항: startTransition는 반드시 setState를 래핑해야 하고
    // 내부에서 promise 및 async/await 을 포함하는 코드는
    // 작성할 수 없도록 되어있다.

    // 불가능한 예시
    // setStartTransition(setState(async () => {
    //  const res = await fetch("https://server.api.endpoint");
    //  return res.data
    // ))

    const handleInputChange = ({ target: { value } }) => {
        setInputVal(value);
        startTransition(() => {
            setFiltered(() => {
                if (value.trim() === "") return [];
                return users.filter((item) => item.name.includes(value));
            });
        });
    };

    console.log(users);

    return (
        <div>
            <p>UseTransitionComponent</p>
            <div>
                <p>search user name</p>
                <input type="text" value={inputVal} onChange={handleInputChange} />
            </div>
            <section className="flex justify-center">
                {isPending ?
                    // 펜딩인 경우 문구 표시
                    <p style={{ fontSize: "30px", fontWeight: "bold" }}>Pending...</p>
                    :
                    // 펜딩이 끝난 경우 list 생성
                    <ul className="grid grid-cols-3 gap-5 w-[1000px]">
                        {filtered.map((item) => {

                            return (
                                <li
                                    key={item.id}
                                    className="relative isolate h-[300px] p-3 rounded-lg shadow-xl overflow-hidden flex flex-col items-center
                                     after:absolute after:-z-[1] after:inset-0 after:bg-black/50
                                     "
                                    style={{ background: `url("${item.background}")` }}
                                >
                                    <figure className="overflow-hidden rounded-lg border-4">
                                        <img src={item.avatar} alt="user avatar" className="w-[100px] h-[150px]"/>
                                    </figure>
                                    <p className="text-white font-extrabold text-2xl">{item.name}</p>

                                </li>
                            )
                        })}
                    </ul>
                }
            </section>

        </div>
    )
}
