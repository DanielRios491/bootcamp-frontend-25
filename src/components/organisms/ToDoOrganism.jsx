import { useState } from 'react';
import ToDoMolecule from '../molecules/ToDoMolecule'

export default function ToDoOrganism() {

    const toDoListArray = [
        { id: 1, name: "Visit Kafka Museum", done: true},
        { id: 2, name: "Watch Wall pic", done: false },
    ];

    const [ toDoList, setToDoList ] = useState({})

    function doneToDo () {

    }

    function editToDo () {

    }

    function deleteToDO () {

    }

    return (
        <div>
            {
                toDoListArray.map((element, index) => {
                    return (
                        <div key={element.id} >
                            <ToDoMolecule 
                                onChangeBox={doneToDo(element.id)} 
                                selected={element.done} 
                                toDoText={element.name} 
                                editToDoOnChange={editToDo(element.id)} 
                                deleteOnChange={deleteToDO(element.id)} 
                            />
                        </div>
                    );
                })
            }
        </div>
    );
}