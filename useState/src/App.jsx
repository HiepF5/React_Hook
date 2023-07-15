import React from 'react'
import Form from './components/Form'
import Counter from './components/Counter'
import Textfield from './components/Textfield'
import Checkbox from './components/Checkbox'
import Updater from './components/Updater'
import Directly from './components/Directly'
import FormFirst from './components/FormFirst'
import FormSecond from './components/FormSecond'
import TaskApp from './components/TaskApp'
import BucketList from './components/BucketList'
import TodoList from './components/TodoList'
import Version from './components/Version'
import CountApp from './components/CountApp'

function App() {
  return (
    <>
    <Counter/>
    <hr/>
    <Textfield/>
    <hr/>
    <Checkbox/>
    <hr/>
    <Form/>
    <hr/>
    <Updater/>
    <hr/>
    <Directly/>
    <hr/>
    <FormFirst/>
    <hr/>
    <FormSecond/>
    <hr/>
    <TaskApp/>
    <hr/>
    <BucketList/>
    <hr/>
    <TodoList/>
    <hr/>
    <Version/>
    <hr/>
    <CountApp/>
    </>

  )
}

export default App