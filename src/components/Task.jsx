import { useDispatch, useSelector } from "react-redux";
import taskSlices from "../slices/taskSlice";
import { useState } from "react";

const Task = () => {
    const [text, setText] = useState('')
    const {tasks} =  useSelector((state) => state)
    const dispatch =  useDispatch()
    const {addTask, removeTask } = taskSlices.actions

    return (
        <div className="text-gray-100 flex flex-col h-[50vh]  justify-around border-l-2 px-3">
            <h3>مدیریت وظایف</h3>

            <input type = 'text'
                className="border-2 border-amber-500 py-3 px-2"
                placeholder="افزودن وطیفه"
                value = {text}
                onChange={(e) => {setText(e.target.value)}}
            />

            <button
                onClick={()=> {dispatch(addTask({name: text})); setText('')}}
            >اضافه کردن وظیفه</button>
            <ul>
                {tasks.map((task) => (
                    <li key = {task.id}  className="flex  items-center justify-center w-full">
                        <p 
                            className=" w-full"
                        >
                            {task.name}
                        </p>
                        <button
                          className="text-red-500"
                            onClick={() => {dispatch(removeTask({id: task.id}))}}
                        >حذف
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Task;