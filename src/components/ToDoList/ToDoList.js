import TodoItem from "../ToDoItem/ToDoItem";
import {useState} from "react";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [id, setId] = useState(0);

    function handleSubmitTask() {
        const created = (new Date()).toLocaleDateString('en-GB');
        const completed = false;
        const summitedTask = {
            id,
            task,
            created,
            completed
        };

        setId(prevId => prevId + 1);
        setTasks(prevTasks => [summitedTask, ...prevTasks]);
    }

    const handleDeleteTaskById = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    const handleCompleteTaskById = (id) => {
        const updatedTasks = tasks.map(task => {
            task.completed = task.id === id ? !task.completed : task.completed;
            return task;
        })

        setTasks(updatedTasks);
    };

    return (
        <div className="margin-auto" style={{maxWidth: '600px', paddingTop: '100px'}}>
            <h1 className="text-center h-font font-42 font-weight-700 color-light-black">TODO LIST</h1>
            <br/>
            <div className="flex-container flex-space-between">
                <input
                    type="text"
                    placeholder="Enter task that you want to do!"
                    className="h-input margin-right-8 border-radius-4"
                    onChange={e => setTask(e.target.value)}
                />
                <button
                    className="h-button bc-blue color-white border-radius-4 hover-gray"
                    onClick={handleSubmitTask}
                >
                    Add Task
                </button>
            </div>
            <br/>
            {tasks.length !== 0 && (
                <div className="padding-8-16 bc-blue border-radius-4">
                    {tasks.map(task =>
                        <TodoItem
                            key={task.id}
                            id={task.id}
                            task={task.task}
                            created={task.created}
                            completed={task.completed}
                            onDelete={() => handleDeleteTaskById(task.id)}
                            onCompleted={() => handleCompleteTaskById(task.id)}
                        >

                        </TodoItem>
                    )}
                </div>
            )}
        </div>
    );
}

export default TodoList;