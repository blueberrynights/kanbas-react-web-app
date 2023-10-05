

function ImpliedReturn() {
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    return (
        <div>
            <h4>Implied Return</h4>
            fourTimesFive = {fourTimesFive};
        </div>
    )
}

export default ImpliedReturn;