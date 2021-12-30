import ReuseCounter from "./Counter";
const CounterExample = (props) => {
  const { counterValue } = props;
  return (
    <div>
      <h1>Increment and Decrement Counter</h1>
      <span className="controls">
        <span data-testid="label__counter" className="counter__label">
          {counterValue}
        </span>
      </span>
    </div>
  );
};

export default ReuseCounter(CounterExample);
