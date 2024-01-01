import {ReactRenderingOrder} from './list/ReactRenderingOrder';
import {DeepCopy} from './list/DeepCopy';
import {Hoisting} from './list/Hoisting';
import {SwapValue} from './list/SwapValue';
import {UseRefAndUseState} from './list/UseRefAndUseState';

function App() {
  return (
    <div>
        <h1>
            Hello World!
        </h1>
        {/*<ReactRenderingOrder/>*/}
        {/*<DeepCopy/>*/}
        {/*<Hoisting/>*/}
        {/*<SwapValue/>*/}
        <UseRefAndUseState/>
    </div>
  );
}

export default App;
