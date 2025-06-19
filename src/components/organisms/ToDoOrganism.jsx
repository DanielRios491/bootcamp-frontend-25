import { useState } from 'react';
import ToDoMolecule from '../molecules/ToDoMolecule';
import NewToDoMolecule from '../molecules/ToDoMolecule';

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
        const item = toDoList.find(i => i.id === id);
        
        if (item.done) {
            alert("This todo is already done. You can’t edit it.");
            return;  
        }
        
        setToDoList(prev =>
            prev.map(item =>
            item.id === id
                ? { ...item, editable: !item.editable }
                : item
            )
        );
    }

    function updateText(id, text) {
        setToDoList(prev =>
            prev.map(item =>
                item.id === id ? { ...item, name: text } : item
            )
        );
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
            <NewToDoMolecule />
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