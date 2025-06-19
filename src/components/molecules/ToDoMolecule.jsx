import ButtonAtom from '../atoms/ButtonAtom';
import CheckboxAtom from '../atoms/CheckboxAtom';
import ToDoTextAtom from '../atoms/ToDoTextAtom';

export default function ToDoMolecule({onChangeBox, selected, toDoText, editOnChange, deleteOnChange}) {
    return (
        <div>
            <CheckboxAtom onChange={ onChangeBox } selected={ selected } />
            <ToDoTextAtom toDoText={toDoText} />
            <ButtonAtom onClick={ editOnChange } >Edit</ButtonAtom>
            <ButtonAtom onClick={ deleteOnChange } >Delete</ButtonAtom>
        </div>
    );
}