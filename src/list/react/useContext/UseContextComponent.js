import React, {createContext, useContext, useState} from 'react';
import UseContextRenderComponent from "./RenderComponent";

// createContext 매개변수로 initState를 지정할 수 있다. (isOption)
export const MemberContext = createContext();

export default function UseContextComponent() {
    const [user, setUser] = useState({ name: "zeriong", job: "Frontend Developer" });

    return (
        <div className="mt-[30px] ml-[40px]">
            <div className="flex">
                <p className="w-12">name: </p>
                <input
                    type="text"
                    value={user.name}
                    onChange={(e) => {
                        setUser((prev) => ({job: prev.job, name: e.target.value}));
                    }}
                />
            </div>
            <div className="flex">
                <p className="w-12">job: </p>
                <input
                    type="text"
                    value={user.job}
                    onChange={(e) => {
                        setUser((prev) => ({job: e.target.value, name: prev.name }));
                    }}
                />
            </div>

            {/*
                생성된컨텍스트.Provider의 value에 전달되는 state는
                하위 컴포넌트에서 useContext를 통해서 전달받아 활용 가능하다.
             */}
            <MemberContext.Provider value={user}>
                <UseContextRenderComponent/>


                {/*
                    Consumer를 활용해 변화를 감지하며 이런방식의 접근도 가능하지만,
                    번거롭고 복잡해지는 것을 방지하기 위해 보편적으로 하위 컴포넌트에서 useContext를 활용하는 경우가 많다.
                */}
                <MemberContext.Consumer>
                    {(userContext) => {
                        return (
                            <div className="mt-[60px] p-[20px] bg-black text-white w-fit">
                                <p className="mb-[20px]">{`<Context.Consumer> 컴포넌트를 활용`}</p>
                                <p>내이름은 {userContext?.name}</p>
                                <p>나의 직업은 {userContext?.job}</p>
                            </div>
                        )
                    }}
                </MemberContext.Consumer>

            </MemberContext.Provider>
        </div>
    );
}
