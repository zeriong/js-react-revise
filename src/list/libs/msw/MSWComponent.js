import React, {useState} from 'react';

/**
 *  npx msw init public/ --save
 *  위 명령어를 통해 public 폴더에 initial setting
 *
 *  src/mock/msw 폴더 내부에 handlers.js, workers.js 를 생성하여
 *  index.js 에서 웹어플리케이션이 실행될 때 msw가 실행될 수 있도록 환경 구성
 *  */

export default function MswComponent() {
    const [user, setUser] = useState();

    // mock get 함수
    const getUserInfo = async () => {
        await fetch("/name").then(r => r.json()).then(data => setUser(data));
    }

    return (
        <div>
            <button type="button" className="px-5 py-1 rounded-2xl text-white bg-black" onClick={getUserInfo}>request "get" my name</button>
            {user && <p>{`name: ${user?.name}`}</p>}
        </div>
    );
}