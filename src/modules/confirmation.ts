import { CloseFormItem, DeleteForm } from "./open-edit-note"
import { confirmationDisplay } from "./variables"

export const deleteNote = () => {
    DeleteForm()
    confirmationDisplay.value = false
}
export const closeNote = () => {
    confirmationDisplay.value = false
}

export const confirmationNote = () => {
    CloseFormItem()
    confirmationDisplay.value = false
}