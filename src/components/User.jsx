import { useDispatch, useSelector } from "react-redux";
import userSlices from "../slices/userSlice";
import { useState } from "react";

const User = () => {
    const [text, setText] = useState('')    
    const dispatch =  useDispatch()
    const {users}  =  useSelector((state) => state)
    const {addUser, removeUser} =  userSlices.actions

    return (
        <div className="text-gray-100 flex flex-col h-[50vh]  justify-around border-r-2 px-3">
            <h3>مدیریت کاربران</h3>

            <input type = 'text'
                className="border-2 border-amber-500 py-3 px-2"
                placeholder="افزودن کاربر"
                value = {text}
                onChange={(e) => {setText(e.target.value)}}
            />

            <button
                onClick={() => {dispatch(addUser({name: text}), setText(''))}}
            >اضافه کردن کاربر</button>


            <ul>
                {users.map((user) => (
                    <li key = {user.id} className="flex  items-center justify-center w-full">
                        <p className=" w-full">
                            {user.name}
                        </p>
                        
                        <button 
                            className="text-red-500"
                            onClick={() => {dispatch(removeUser({id: user.id}))}}
                        >
                            حذف</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default User;