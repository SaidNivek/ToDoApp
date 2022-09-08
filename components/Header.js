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

function Header() {
  return (
    <HeaderView>
        <HeaderTitle>To Do Items</HeaderTitle>
        <HeaderButton>
            <Entypo name="trash" size={25} color={colors.tertiary} />
        </HeaderButton>
    </HeaderView>
  )
}

export default Header