import {ReactRenderingOrder} from './list/ReactRenderingOrder';
import {DeepCopy} from './list/DeepCopy';
import {Hoisting} from './list/Hoisting';

function App() {
  return (
    <div>
        <h1>
            Hello World!
        </h1>
        {/*<ReactRenderingOrder/>*/}
        {/*<DeepCopy/>*/}
        <Hoisting/>
    </div>
  );
}

export default App;
