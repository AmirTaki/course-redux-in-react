import './App.css'
import Task from './components/Task'
import User from './components/User'
function App() {

  return (
    <div className="text-rose-400">
      <h2>پروژه جدید با ریداکس</h2>
      <hr />
      <div className="flex gap-3">
        <User />
        <Task />
      </div>
    </div>
  )
}

export default App
