import React, {useContext} from 'react';
import {MemberContext} from "./UseContextComponent";

export default function UseContextRenderComponent() {
    const userInfo = useContext(MemberContext);
    return (
        <div className="mt-10 border-2 rounded-md w-[300px] p-[12px] ml-[20px]">
            <p className="text-center text-2xl font-bold">user info</p>
            <div className="flex gap-4">
                <p className="font-extrabold w-12">name: </p>
                {userInfo.name}
            </div>
            <div className="flex gap-4">
                <p className="font-extrabold w-12">job: </p>
                {userInfo.job}
            </div>
        </div>
    );
}
