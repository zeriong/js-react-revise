// server/index.tsx
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import App from '/src/App';
import * as path from "node:path";
import * as fs from "node:fs";

const app = express();
// 클라이언트 사이드에서 빌드된 html을 읽어와 사용
const html = fs.readFileSync(path.resolve(__dirname, "../client/index.html"), "utf-8");

app.get("/", (req, res) => {
    // <App /> 을 렌더링
    const renderString = ReactDOMServer.renderToString(<App />);
    // <div id="root"></div> 내부에 삽입
    res.send(html.replace('<div id="root"></div>', `<div id="root">${renderString}</div>`));
});
// 위의 / 이외의 경로로 요청할 경우(js, css 등)
// dist/client 폴더에 있는 파일들 제공
app.use("/", express.static("dist/client"));

app.listen(4000, () => {
    console.log('Server is listening on port 4000');
});
