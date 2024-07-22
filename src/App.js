import ReactRenderingOrder from './list/renderingOrder/ReactRenderingOrder';
import SingleDimensionalDeepCopyComponent from './list/deepCopy/singleDimensional/SingleDimensionalDeepCopyComponent';
import Hoisting from './list/hoisting/Hoisting';
import SwapValue from './list/swapValue/SwapValue';
import UseRefAndUseState from './list/useRefAndUseState/UseRefAndUseState';
import HandMadeUseState from './list/handMadeUseState/HandMadeUseStateComponent';
import NoneMemoComponent from "./list/reactMemo/noneMemo/NoneMemoComponent";
import UsingMemoComponent from "./list/reactMemo/usingMemo/UsingMemoComponent";
import ReactMemoLearnComponent from "./list/reactMemo/ReactMemoLearnComponent";
import UseCallbackComponent from "./list/useCallback/UseCallbackComponent";
import UseMemoComponent from "./list/useMemo/UseMemoCompnent";
import UseIdComponent from "./list/useId/UseIdComponent";
import MultiDimensionalDeepCopyComponent from "./list/deepCopy/multiDimensional/MultiDimensionalDeepCopyComponent";
import UseTransitionComponent from "./list/useTransition/UseTransitionComponent";

function App() {
  return (
    <div>
        <h1>
            Hello World!
        </h1>
        <UseTransitionComponent/>
        {/*<UseIdComponent/>*/}
        {/*<UseMemoComponent/>*/}
        {/*<UseCallbackComponent/>*/}
        {/*<ReactMemoLearnComponent/>*/}
        {/*<ReactRenderingOrder/>*/}
        {/*<MultiDimensionalDeepCopyComponent/>*/}
        {/*<SingleDimensionalDeepCopyComponent/>*/}
        {/*<Hoisting/>*/}
        {/*<SwapValue/>*/}
        {/*<UseRefAndUseState/>*/}
        {/*<HandMadeUseState/>*/}
    </div>
  );
}

export default App;
