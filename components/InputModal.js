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

function InputModal(modalVisible, setModalVisible) {

    // Functions
    // handleCloseModal will set the modal visibility to false, which will close the modal
    const handleCloseModal = () => {
        setModalVisible(false)
    }
  return (
    <>
        <ModalButton onPress={() => {}}>
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
            
        </Modal>
    </>
  )
}

export default InputModal