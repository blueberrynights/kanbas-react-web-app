

function FunctionParenthesisAndParameters() {
    const square = a => a * a;
    const plusOne = a => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    return (
        <div>
            <h4>Function Parenthesis And Parameters</h4>
            twoSquared = {twoSquared};
            threePlusOne = {threePlusOne};
        </div>
    )
}

export default FunctionParenthesisAndParameters;