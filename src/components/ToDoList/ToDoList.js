import TodoItem from "../ToDoItem/ToDoItem";

const tasks = [
    {
        task: 'Create a new task',
        created: '01/01/2024',
        completed: true
    }
];

function TodoList() {
    return (
        <div className="margin-auto" style={{maxWidth: '600px', paddingTop: '100px'}}>
            <h1 className="text-center h-font font-42 font-weight-700 color-light-black">TODO LIST</h1>
            <br/>
            <div className="flex-container flex-space-between">
                <button className="h-button bc-blue color-white border-radius-4 hover-gray">Add Task</button>
                <div className="padding-0-4"></div>
                <input type="text" placeholder="Enter task that you want to do!" className="h-input border-radius-4"/>
            </div>
            <br/>
            <div className="padding-8-16 bc-blue border-radius-4">
                {tasks.map(task =>
                    <TodoItem
                        task={task.task}
                        created={task.created}
                        completed={task.completed}
                    >

                    </TodoItem>
                )}
            </div>
        </div>
    );
}

export default TodoList;