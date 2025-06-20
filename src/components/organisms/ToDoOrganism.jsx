import { useReducer, useState } from 'react';
import ToDoMolecule from '../molecules/ToDoMolecule';
import NewToDoMolecule from '../molecules/NewToDoMolecule';

export default function ToDoOrganism() {

    const initialState = {
        toDoListArray : [
            { id: 1, name: "Visit Kafka Museum", done: true, editable: false},
            { id: 2, name: "Watch Wall pic", done: false, editable: false },
        ],
        newToDo: ""
    }

    // const [ toDoList, setToDoList ] = useState(toDoListArray)
    const [ toDoList,  dispatch ] = useReducer(toDoReducer, initialState)
    const [ newToDo, setNewToDo ] = useState("");

    function toDoReducer(state, action) {
        switch (action.type) {
            case 'add':
                const text = state.newToDo.trim();
                if (!text) return state;
                return {
                    toDoListArray: [
                        ...state.toDoListArray,
                        { 
                            id: Date.now(),
                            name: text,
                            done: false,
                            editable: false
                        }
                    ],
                    newToDo: ""
                };
                break;
            case 'editCheckBox':
                return state.toDoListArray.map(item =>
                        item.id === action.payload.id ? { ...item, done: !item.done } : item
                    )
                break;
            case 'editEditable':
                return state.toDoListArray.map(item =>
                        item.id === action.payload
                        ? { ...item, editable: !item.editable }
                        : item
                    )
                break;
            case 'update':
                return state.toDoListArray.map(todo =>
                        todo.id === action.payload.id ? { ...todo, name: action.payload.text } : todo
                    )
                break;
            case 'delete':
                return {
                    ...state,
                    toDoListArray: state.toDoListArray.filter(item =>
                        item.id !== action.payload
                    )
                }
                break;
            case 'resetNewtodo':
                return {
                    ...state,
                    newToDo: ""
                };
                break;
            case 'changeInput':
                return {
                    ...state,
                    newToDo: action.payload
                };
            default:
                break;
        }
    }

    function doneToDo (id) {
        /* setToDoList(prev =>
            prev.map(item =>
                item.id === id ? { ...item, done: !item.done } : item
            )
        ); */
        dispatch({
            type: 'editCheckBox',
            payload: id
        });
    }

    function editToDo(id) {
        const item = toDoList.toDoListArray.find(i => i.id === id);
        
        if (item.done) {
            alert("This todo is already done. You can’t edit it.");
            return;  
        }
        
        /* setToDoList(prev =>
            prev.map(item =>
            item.id === id
                ? { ...item, editable: !item.editable }
                : item
            )
        ); */
        dispatch({
            type: 'editEditable',
            payload: id
        });
    }

    function updateText(id, text) {
        /* setToDoList(prev =>
            prev.map(item =>
                item.id === id ? { ...item, name: text } : item
            )
        ); */
        dispatch({
            type: 'update',
            payload: {id, text}
        });
    }

    function deleteToDO (id) {
        /* setToDoList(prev =>
            prev.filter( item =>
                item.id !== id
            )
        ) */
        dispatch({
            type: 'delete',
            payload: id
        });
    }

    function addToDo(){
        /* setToDoList(prev => [...prev, next]); */
        dispatch({
            type: "add",
        });
        /* setNewToDo(''); */
    }

    function SetNewToDo (value) {
        dispatch({
            type: 'changeInput',
            payload: value
        })
    }

    return (
        <div>
            <NewToDoMolecule 
                toDoText={toDoList.newToDo} 
                updateText={(e) => SetNewToDo(e)} 
                addToDo={() => addToDo()} 
            />
            {
                toDoList.toDoListArray.map((element, index) => {
                    return (
                        <div key={index} >
                            <ToDoMolecule 
                                onChangeBox={() => doneToDo(element.id)} 
                                selected={element.done} 
                                toDoText={element.name} 
                                readOnly={!element.editable}
                                updateText={(text) => updateText(element.id, text)}
                                editClick={() => editToDo(element.id)} 
                                deleteClick={() => deleteToDO(element.id)} 
                            />
                            <span>{ `${element.editable}` }</span>
                        </div>
                    );
                })
            }
        </div>
    );
}