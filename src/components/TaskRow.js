export const TaskRow = ({ task, toogleTask }) => {
    return (
        <tr>
            <td className="d-flex justify-content-between">
                {task.name}
                <input
                    type='checkbox'
                    checked={task.done}
                    onChange={() => toogleTask(task)}
                />
            </td>
        </tr>
    )
}