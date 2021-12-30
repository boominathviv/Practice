import { useSelector, useDispatch } from "react-redux";
import Button from "./styledComponet/Button";

const ReuseCounter = (ConsumerComponent) => {
  const DecoratedComponent = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    return (
      <div className="container">
        <ConsumerComponent counterValue={counter} />
        <span className="controls">
          <Button onClick={() => dispatch({ type: "INCREMENT" })}>
            Increment
          </Button>
          <Button onClick={() => dispatch({ type: "DECREMENT" })}>
            Decrement
          </Button>
        </span>
      </div>
    );
  };
  return DecoratedComponent;
};

export default ReuseCounter;
