import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@material-tailwind/react'
import { addAge } from '../redux/slices/homeSlice'

const Home = () => {
  const { users } = useSelector(reducer => reducer.myNum)

  const dispatch = useDispatch()

  return (
    <div className='flex flex-col justify-center items-center pt-4 gap-[4em]'>
      <h1>Home</h1>
      <h1>User details</h1>
      <h1>Mohamed</h1>
      {users.map(({ name, age, id }, index) => (
        <div
          key={index}
          className='flex justify-evenly items-center p-4 w-full bg-blue-gray-700 text-white font-bold'
        >
          <h1>User : {name}</h1>
          <h1>Age : {age}</h1>
          <Button onClick={() => dispatch(addAge(id))}>inc</Button>
        </div>
      ))}
    </div>
  )
}

export default Home
