import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import Add from "./Add";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariables";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";

function Assignment4() {
  function sayHello() {
    alert("Hello");
  }
  return (
    <div>
      <h1>Assignment 4</h1>
      <Add a={1} b={2} />
      <PassingFunctions theFunction={sayHello} />
      <EventObject></EventObject>
      <Counter></Counter>
      <BooleanStateVariables></BooleanStateVariables>
      <StringStateVariables></StringStateVariables>
      <DateStateVariable></DateStateVariable>
      <ObjectStateVariable></ObjectStateVariable>
      <ArrayStateVariable></ArrayStateVariable>



      <ReduxExamples/>
      ...
    </div>
  );
}
export default Assignment4;