import React from 'react'

//styled components
import {
    HeaderView,
    HeaderTitle,
    HeaderButton,
    colors 
} from "./../styles/appStyles"

// import icons
import { Entypo } from "@expo/vector-icons"

function Header({handleClearTodos}) {
  return (
    <HeaderView>
        <HeaderTitle>To Do Items</HeaderTitle>
        <HeaderButton
        // Pass the param handleClearTodos to the onPress function to clear the to do list items on pressing the trash button 
            onPress={handleClearTodos}
        >
            <Entypo name="trash" size={25} color={colors.tertiary} />
        </HeaderButton>
    </HeaderView>
  )
}

export default Header