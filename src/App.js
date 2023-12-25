import {ReactRenderingOrder} from './list/ReactRenderingOrder';
import {DeepCopy} from './list/DeepCopy';

function App() {
  return (
    <div>
        <h1>
            Hello World!
        </h1>
        <ReactRenderingOrder/>
        <DeepCopy/>
    </div>
  );
}

export default App;
