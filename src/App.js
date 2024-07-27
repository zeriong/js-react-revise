import ReactRenderingOrder from './list/react/renderingOrder/ReactRenderingOrder';
import SingleDimensionalDeepCopyComponent from './list/computerScience/deepCopy/singleDimensional/SingleDimensionalDeepCopyComponent';
import Hoisting from './list/computerScience/hoisting/Hoisting';
import SwapValue from './list/computerScience/swapValue/SwapValue';
import UseRefAndUseState from './list/react/useRefAndUseState/UseRefAndUseState';
import HandMadeUseState from './list/computerScience/handMadeUseState/HandMadeUseStateComponent';
import NoneMemoComponent from "./list/react/reactMemo/noneMemo/NoneMemoComponent";
import UsingMemoComponent from "./list/react/reactMemo/usingMemo/UsingMemoComponent";
import ReactMemoLearnComponent from "./list/react/reactMemo/ReactMemoLearnComponent";
import UseCallbackComponent from "./list/react/useCallback/UseCallbackComponent";
import UseMemoComponent from "./list/react/useMemo/UseMemoCompnent";
import UseIdComponent from "./list/react/useId/UseIdComponent";
import MultiDimensionalDeepCopyComponent from "./list/computerScience/deepCopy/multiDimensional/MultiDimensionalDeepCopyComponent";
import UseTransitionComponent from "./list/react/useTransition/UseTransitionComponent";
import MswComponent from "./list/libs/MSWComponent";

function App() {
  return (
    <div>
        <h1>
            Hello World!
        </h1>
        <MswComponent/>
        {/*<UseTransitionComponent/>*/}
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
