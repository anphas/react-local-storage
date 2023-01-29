import { TaskRow } from "./TaskRow"

export const TaskTable = ({ tasks, toogleTask , showCompleted = false}) => {
    const taskTableRows = (doneValue) => {
        return (
            tasks
            .filter(task => task.done === doneValue)
            .map(task => (
                <TaskRow task={task} key={task.name} toogleTask={toogleTask} />
            ))
        )
    }
    return (
        <table className="table table-dark table-bordered">
            <thead>
                <tr>
                    <th>Tasks</th>
                </tr>
            </thead>
            <tbody>
                {
                    taskTableRows(showCompleted)
                }
            </tbody>
        </table>
    )
}