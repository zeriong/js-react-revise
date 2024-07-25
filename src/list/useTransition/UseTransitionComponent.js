import {useState, useTransition} from "react";
import {users} from "../../mock/users";

export default function UseTransitionComponent() {
    const [isPending, startTransition] = useTransition();
    const [inputVal, setInputVal] = useState("");
    const [filtered, setFiltered] = useState([]);

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
