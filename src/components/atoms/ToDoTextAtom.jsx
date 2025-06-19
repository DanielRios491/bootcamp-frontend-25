export default function ToDoTextAtom({toDoText, readOnly, updateText}) {
    if (readOnly) {
        return <span>{toDoText}</span>;
    }

    return (
        <input
            type="text"
            value={toDoText}
            onChange={e => updateText(e.target.value)}
        />
    );
}