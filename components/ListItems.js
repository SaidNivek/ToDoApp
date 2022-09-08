import React from 'react'

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
  return (
    <SwipeListView 
        data={todos}
        renderItem={(data) => {
            return (
                <ListView>
                    <>
                        <TodoText>{data.item.title}</TodoText>
                        <TodoDate>{data.item.date}</TodoDate>
                    </>
                </ListView>
            )
        }}
        renderHiddenItem={() => {
            return (
                <ListViewHidden>
                    <HiddenButton>
                        <Entypo name="trash" size={25} color={colors.secondary} />
                    </HiddenButton>
                </ListViewHidden>
            )
        }}
        leftOpenValue={80}
        previewRowKey={"1"}
        previewOpenValue={80}
        previewOpenDelay={3000}
        disableLeftSwipe={true}
        showsVerticalScrollIndicator={false}
        style={{
            flex: 1, paddingBottom: 30, marginBottom: 40
        }}
    />
  )
}

export default ListItems