import {ReactRenderingOrder} from './list/renderingOrder/ReactRenderingOrder';
import {DeepCopy} from './list/deepCopy/DeepCopy';
import {Hoisting} from './list/hoisting/Hoisting';
import {SwapValue} from './list/swapValue/SwapValue';
import {UseRefAndUseState} from './list/useRefAndUseState/UseRefAndUseState';
import {HandMadeUseState} from './list/handMadeUseState/HandMadeUseStateComponent';
import NoneMemoComponent from "./list/reactMemo/noneMemo/NoneMemoComponent";
import UsingMemoComponent from "./list/reactMemo/usingMemo/UsingMemoComponent";
import ReactMemoLearnComponent from "./list/reactMemo/ReactMemoLearnComponent";
import UseCallbackComponent from "./list/useCallback/UseCallbackComponent";
function App() {
  return (
    <div>
        <h1>
            Hello World!
        </h1>

        <UseCallbackComponent/>
        {/*<ReactMemoLearnComponent/>*/}
        {/*<ReactRenderingOrder/>*/}
        {/*<DeepCopy/>*/}
        {/*<Hoisting/>*/}
        {/*<SwapValue/>*/}
        {/*<UseRefAndUseState/>*/}
        {/*<HandMadeUseState/>*/}
    </div>
  );
}

export default App;
