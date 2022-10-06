import { Fragment, useState } from "react" 

function Calc() {
 
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)


    // console.log(number);

    return(
        <Fragment>
           {/* <h1>{x} + {y} = {(x-0)+(y-0)}</h1> */}
           <h1>{x} + {y} = {x+y}</h1>
           <input
                type="text"
                onChange={(x) => {
                    setX(x.target.value)
                }}
           />

            <input
                type="text"
                onChange={(y) => {
                    setY(y.target.value)
                }}
           />

        </Fragment>
    )
}

export default Calc

// function useState(currentValue) {
//     const state = {
//         value: currentValue

//         setValue: function (x) {
//             this.value = x 
//         }
//     }
    
//     return [state.value, state.setValue]
// }