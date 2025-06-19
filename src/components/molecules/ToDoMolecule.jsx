import ButtonAtom from '../atoms/ButtonAtom';
import CheckboxAtom from '../atoms/CheckboxAtom';
import ToDoTextAtom from '../atoms/ToDoTextAtom';

export default function ToDoMolecule({onChangeBox, toDoText, editOnChange, deleteOnChange}) {
    return (
        <div>
            <CheckboxAtom onChange={ onChangeBox }/>
            <ToDoTextAtom>{ toDoText }</ToDoTextAtom>
            <ButtonAtom onChange={ editOnChange } >Edit</ButtonAtom>
            <ButtonAtom onChange={ deleteOnChange } >Delete</ButtonAtom>
        </div>
    );
}