import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";

function TodoItem({id, task, created, completed, onDelete, onCompleted}) {
    return (
        <div className="margin-8-0 padding-8-16 bc-white border-radius-4 flex-container flex-space-between">
            <div className="flex-container">
                <input
                    type="checkbox"
                    checked={completed}
                    className="margin-right-8"
                    onChange={() => onCompleted(id)}
                />
                <div>
                    <b className="color-gray">{task}</b>
                    <br/>
                    <span className="color-black h-opac">{created}</span>
                </div>
            </div>
            <div className="color-gray">
                <span className="margin-right-8 padding-8 bc-light-gray hover-gray">
                    <FontAwesomeIcon
                        icon={faTrash}
                        style={{marginTop: "14px"}}
                        onClick={() => onDelete(id)}
                    />
                </span>
                <span className="padding-8 bc-light-gray hover-gray">
                    <FontAwesomeIcon icon={faPenToSquare} style={{marginTop: "14px"}}/>
                </span>
            </div>
        </div>
    );
}

export default TodoItem;
