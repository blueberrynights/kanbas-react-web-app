
function WorkingWithArrays() {

    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
    ];

    return (
        <div>
            <h4>Working with Arrays</h4>
            numberArray1 = {[1, 2, 3, 4, 5]};
            stringArray1 = {['string1', 'string2']};
            variableArray1 = {[
            functionScoped,   blockScoped,
            constant1,        numberArray1,   stringArray1
            ]};
        </div>
    )

}


export default WorkingWithArrays;