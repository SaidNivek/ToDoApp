
import React, { useState } from 'react'
import { Text } from 'react-native'

// components
import Header from './Header'
import ListItems from './ListItems'

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

const [todos, setTodos] = useState(initialTodos)

  return (
    <>
        <Header />
        <ListItems 
            todos={todos}
            setTodos={setTodos}
        />
    </>
  )
}

export default Home