import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";

function Assignment4() {
  function sayHello() {
    alert("Hello");
  }
  return (
    <div>
      <h1>Assignment 4</h1>
      <ReduxExamples/>
      <PassingFunctions theFunction={sayHello} />
      ...
    </div>
  );
}
export default Assignment4;