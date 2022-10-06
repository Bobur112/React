import { useState } from "react";

function Todo() {

    const [todos, setTodos] = useState([
        {
            id:1,
            title: "todo 1",
            isComplated: false
        },
        {
            id:2,
            title: "todo 2",
            isComplated: false
        }
    ])
    
    return(
        <>
            <input type="text"
                placeholder="todos..." 
                onKeyUp={
                    (evt) => {
                        evt.preventDefault()

                        if (evt.keyCode === 13) {
                            let newObj = {
                                id: todos[todos.length -1].id+1 || 1,
                                title: evt.target.value,
                                isComplated: false
                            }
                            setTodos([newObj, ...todos])
                            console.log(todos[todos.length -1].id+1 || 1 );
                        }

                        // console.log(newObj);
                    }
                }
            />

            <ul>
                {
                    todos.map(todo => (
                       <li key={todo.id}>
                            <span>TodoName</span>
                            <button
                                onClick={(e)=>
                                    setTodos(
                                        todos.filter(item => item.id !== todo.id)
                                        )
                                }
                            >x</button>
                        </li>
                    ))
                }
                
            </ul>
        </>
    )
}

export default Todo;