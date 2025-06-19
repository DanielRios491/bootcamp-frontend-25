import ButtonAtom from '../atoms/ButtonAtom';
import CheckboxAtom from '../atoms/CheckboxAtom';
import ToDoTextAtom from '../atoms/ToDoTextAtom';

export default function ToDoMolecule({onChangeBox, selected, toDoText, editOnChange, deleteOnChange}) {
    return (
        <div>
            <CheckboxAtom onChange={ onChangeBox } selected={ selected } />
            <ToDoTextAtom>{ toDoText }</ToDoTextAtom>
            <ButtonAtom onChange={ editOnChange } >Edit</ButtonAtom>
            <ButtonAtom onChange={ deleteOnChange } >Delete</ButtonAtom>
        </div>
    );
}