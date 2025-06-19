import ButtonAtom from "../atoms/ButtonAtom";
import ToDoTextAtom from "../atoms/ToDoTextAtom";

export default function NewToDoMolecul({toDoText, updateText, addToDo}) {
    return (
        <>
            <ToDoTextAtom toDoText={toDoText} readOnly={false} updateText={updateText} />
            <ButtonAtom onClick={addToDo}>Add</ButtonAtom>
        </>
    );
}