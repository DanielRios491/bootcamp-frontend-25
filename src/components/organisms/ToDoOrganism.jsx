import { useState } from 'react';
import ToDoMolecule from '../molecules/ToDoMolecule'

export default function ToDoOrganism() {

    const toDoListArray = [
        { id: 1, name: "Visit Kafka Museum", done: true, editable: false},
        { id: 2, name: "Watch Wall pic", done: false, editable: false },
    ];

    const [ toDoList, setToDoList ] = useState(toDoListArray)

    function doneToDo (id) {
        setToDoList(prev =>
            prev.map(item =>
                item.id === id ? { ...item, done: !item.done } : item
            )
        );
    }

    function editToDo(id) {
        console.log("edit");
        setToDoList(prev =>
            prev.map(item =>
                item.id === id && !item.done
                ? { ...item, editable: !item.editable }
                : item
            )
        );
    }

    function updateText(params) {
        
    }

    function deleteToDO (id) {
        setToDoList(prev =>
            prev.filter( item =>
                item.id !== id
            )
        )
    }

    return (
        <div>
            {
                toDoList.map((element, index) => {
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