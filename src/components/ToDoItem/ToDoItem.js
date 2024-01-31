
function TodoItem({task, created, completed}) {
    return (
        <div className="margin-8-0 padding-8-16 bc-white border-radius-4">
            <div className="flex-container">
                <input
                    type="checkbox"
                    checked={completed}
                    className="margin-right-8"
                />
                <div>
                    <b className="color-gray">{task}</b>
                    <br/>
                    <span className="color-black h-opac">{created}</span>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;
