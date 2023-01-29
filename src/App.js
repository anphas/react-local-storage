import { useState, useEffect } from 'react';
import './App.css';
import { TaskCreator } from './components/TaskCreator';
import { TaskTable } from './components/TaskTable';
import { VisibilityControl } from './components/VisibilityControl';

function App() {

  const [taskItems, setTaskItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  function createNewTask(taskName) {
    if (!taskItems.find(tasks => tasks.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  const toggleTask = task => {
    setTaskItems(
      taskItems.map(t => (t.name === task.name) ? { ...t, done: !t.done } : t)
    )
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks');
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, [])

  const cleanTask = () => {
    setTaskItems(taskItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  return (
    <main className='bg-dark text-white w-100'>
      <div className='container col-md-4 offset-md-4'>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toogleTask={toggleTask} />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTask={cleanTask}
        />

        {
          showCompleted === true && (
            <TaskTable
              tasks={taskItems}
              toogleTask={toggleTask}
              showCompleted={showCompleted} />
          )
        }
      </div>
    </main>
  );
}

export default App;
