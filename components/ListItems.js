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

    return (
        <SwipeListView 
            data={todos}
            renderItem={(data) => {
                const RowText = data.item.key == swipedRow ? SwipedTodoText : TodoText
                return (
                    <ListView>
                        <>
                            <RowText>{data.item.title}</RowText>
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
        onRowOpen={(rowKey) => {
            setSwipedRow(rowKey)
        }}
        onRowClose={() => {
            setSwipedRow(null)
        }}
    />
  )
}

export default ListItems