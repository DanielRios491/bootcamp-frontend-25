import ButtonAtom from '../atoms/ButtonAtom';
import CheckboxAtom from '../atoms/CheckboxAtom';
import ToDoTextAtom from '../atoms/ToDoTextAtom';

export default function ToDoMolecule({onChangeBox, selected, toDoText, readOnly, updateText, editClick, deleteClick}) {
    return (
        <div>
            <CheckboxAtom onChange={ onChangeBox } selected={ selected } />
            <ToDoTextAtom toDoText={toDoText} readOnly={readOnly} updateText={ updateText } />
            <ButtonAtom onClick={ editClick } >{readOnly? "Edit" : "Save"}</ButtonAtom>
            <ButtonAtom onClick={ deleteClick } >Delete</ButtonAtom>
        </div>
    );
}