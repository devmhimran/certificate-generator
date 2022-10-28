import { Button, Card } from '@material-tailwind/react'
import { useState } from 'react'
import CardItem from './Component/CardItem/CardItem'


function App() {

  return (
    <div className="App">
      <div className="container">
        <div className='py-8'>
          <Button className='mx-4'>Image</Button>
          <Button className='mx-4'>Pdf</Button>
          <Button className='mx-4'>Png</Button>

        </div>
        <CardItem />
      </div>
    </div>
  )
}

export default App
