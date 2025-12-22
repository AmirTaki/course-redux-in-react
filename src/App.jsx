import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { postFetch } from './redux/postSlice'
import { useEffect } from 'react'

function App() {
  const dispatch =  useDispatch()
  const {posts, status} = useSelector((state) => state)

  useEffect(() => {
    dispatch(postFetch())
    return() => {}
  }, [])
  
  if(status === 'Loading...'){
    return <h3 className='text-blue-500' >عملیات در حال انجام است</h3>
  }
  if(status === 'Failed...'){
    return <h3 className='text-red-500'>عملیات با خطا مواجه شد</h3>
  }
  
  return (
    <div className="text-rose-400">
      <ul>
        {
          posts.map((post) => (
            <li key = {post.id}>{post.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
