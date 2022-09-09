
import React, { useState } from 'react'
import { Text } from 'react-native'

// components
import Header from './Header'
import ListItems from './ListItems'
import InputModal from './InputModal'

function Home() {

// initialize to-do items
const initialTodos = [ 
    {
        title: "Get some snacks",
        date: "Fri, 09 Sep 2022 16:32:11 EST",
        key: "1"
    },
    {
        title: "Grocery Store",
        date: "Fri, 09 Sep 2022 16:32:11 EST",
        key: "2"
    },
    {
        title: "Work out",
        date: "Fri, 09 Sep 2022 16:32:11 EST",
        key: "3"
    }
]

//States
// This will set the initial state of the to do list items
const [todos, setTodos] = useState(initialTodos)

// Modal visibility, which will change state if the modal has been clicked/pressed
const [modalVisible, setModalVisible] = useState(false)
// Modal input value, which will be updated in real time as the user types in to-do list items
const [todoInputValue, setTodoInputValue] = useState()

// Functions
// handleClearTodos will remove the entire list when you press the trash button in the header
const handleClearTodos = () => {
    // We will set the value of todos to an empty array
    setTodos([])
}



  return (
    <>
        <Header 
            handleClearTodos={handleClearTodos}
        />
        <ListItems 
            todos={todos}
            setTodos={setTodos}
        />
        <InputModal 
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            todoInputValue={todoInputValue}
            setTodoInputValue={setTodoInputValue}
        />
    </>
  )
}

export default Home