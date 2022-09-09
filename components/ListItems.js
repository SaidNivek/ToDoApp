import React, {useState } from 'react'

// import { Text } from "react-native"

import { SwipeListView } from "react-native-swipe-list-view"
import { Entypo } from "@expo/vector-icons"

// styled components
import {
    ListView,
    ListViewHidden,
    TodoText,
    TodoDate,
    HiddenButton,
    SwipedTodoText,
    colors
} from "../styles/appStyles"

function ListItems({todos, setTodos}) {

    // Style for the currently swiped to-do row
    const [swipedRow, setSwipedRow] = useState(null)

    // Functions
    // Funtion to delete the to-do item when the trash symbol is pressed
    // Maybe change this to move the item to the completed tasks page?
    const handleDeleteTodo = (rowMap, rowKey) => {
        // Set a new array with the information from the original todos array
        const newTodos = [...todos]
        // Set a variable with the index, using findIndex, which matches the todo.key with the rowKey
        // rowKey is set when the row is swiped, in the SwipeListView
        const todoIndex = todos.findIndex((todo) => todo.key === rowKey)
        // Splice out the index of the row item, by using the splice function, indicating 1 to remove 1 position
        newTodos.splice(todoIndex, 1)
        // Reset the to do list with the newTodos array, which just removed the deleted item
        setTodos(newTodos)
    }

    return (
        <>
        {/* Use the ternary operator to display a message if there are no items or display the items if they exist */}
        {todos.length == 0 ? <TodoText>You have no to-do items today.</TodoText> 
        :
        <SwipeListView 
            data={todos}
            renderItem={(data) => {
                const RowText = data.item.key == swipedRow ? SwipedTodoText : TodoText
                return (
                    <ListView
                        underlayColor={colors.primary}
                        onPress={() => {

                        }}
                    >
                        
                        <>
                            <RowText>{data.item.title}</RowText>
                            <TodoDate>{data.item.date}</TodoDate>
                        </>
                    </ListView>
                )
            }}
        // Need to pass the rowMap and data into the renderHiddenItem for the handleDeleteTodo function
        renderHiddenItem={(data, rowMap) => {
            return (
                <ListViewHidden>
                    <HiddenButton
                        // Use the rowMap and data.item.key to get the swiped row's info in order to delete things
                        onPress={() => handleDeleteTodo(rowMap, data.item.key)}
                    >
                        <Entypo name="trash" size={25} color={colors.secondary} />
                    </HiddenButton>
                </ListViewHidden>
            )
        }}
        leftOpenValue={80}
        // Preview the first row, which has a key of 1
        previewRowKey={"1"}
        // Preview the open by 80 pixels
        previewOpenValue={80}
        // Delay the open preview for 3 seconds, to show that you can swipe
        previewOpenDelay={3000}
        // Prevent swiping from right-to-left
        disableLeftSwipe={true}
        showsVerticalScrollIndicator={false}
        style={{
            flex: 1, paddingBottom: 30, marginBottom: 40
        }}
        onRowOpen={(rowKey) => {
            setSwipedRow(rowKey)
        }}
        onRowClose={() => {
            setSwipedRow(null)
        }}
    />}
    </>
  )
}

export default ListItems