import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import ESSFunctions from "./ESSFunctions";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import WorkingWithFunctions from "./WorkingWithFunctions/WorkingWithFunctions";
import TempalateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructuring"
import FunctionDestructing from "./FunctionDestructuring"

function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          
          <VariableTypes></VariableTypes>
          
          <BooleanVariables></BooleanVariables>
          
          <IfElse></IfElse>

          <TernaryOperator></TernaryOperator>

          <ESSFunctions></ESSFunctions>
          
          <ArrowFunctions></ArrowFunctions>
          
          <WorkingWithFunctions/>

          <TempalateLiterals/>

          <House/>

          <Spread/>

          <Destructing/>

          <FunctionDestructing/>

       </div>
    );
 }
 export default JavaScript