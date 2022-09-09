import React from 'react'
import { Modal } from "react-native"
import {
    ModalButton,
    ModalContainer,
    ModalView,
    StyledInput,
    ModalModalAction,
    ModalActionGroup,
    ModalIcon,
    HeaderTitle,
    colors
} from "../styles/appStyles"

import { AntDesign } from "@expo/vector-icons"

function InputModal(modalVisible, setModalVisible, todoInputValue, setTodoInputValue) {

    // Functions
    // handleCloseModal will set the modal visibility to false, which will close the modal
    const handleCloseModal = () => {
        setModalVisible(false)
    }

    // handleSubmit will 
    const handleSubmit = () => {
        
    }
  return (
    <>
        {/* Must pass setModalVisibile to the  onPress handler to get the modal to open when pressing the '+' sign 
            Passing in 'true' will make the modal appear when the '+' is clicked */}
        <ModalButton onPress={() => {setModalVisible(true)}}>
            <AntDesign name="plus" size={30} color={colors.secondary} />
        </ModalButton>

        <Modal
            animationType="slide"
            transparent={true}
            // Takes a boolean variable and we will utilize useState in the Home.js file and pass it down
            visible={modalVisible}
            // Take a function which will run when the user presses on the back button
            onRequestClose={handleCloseModal}
        >
            <ModalContainer>
                <ModalIcon>
                    <AntDesign name="edit" size={30} color={colors.tertiary} />
                </ModalIcon>

                <StyledInput 
                    placeholder="Add a to-do item"
                    placeholderTextColor={colors.alternative}
                    selectionColor={colors.secondary}
                    autoFocus={true}
                    // Takes the text that has been input and uses the setState function to set the todoInputValue to what has been enetered
                    onChangeText={(text) => setTodoInputValue(text)}
                    // Sets the value of the text field to match the value of the todoInputValue, which is set, above
                    value={todoInputValue}
                    onSubmitEditing={handleSubmit}
                />
            </ModalContainer>
        </Modal>
    </>
  )
}

export default InputModal