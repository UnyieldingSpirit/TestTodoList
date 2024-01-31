import type { typingNotes } from "@/shared/type";
import { findNoteById } from "./base-function";
import { confirmationDisplay, confirmationFlag, confirmationText, formActivete, noteIndicator } from "./variables";
import { CloseFormItem, OpeningEditingForm } from "./open-edit-note";

export const OpenDeleteForm = (id: string, note: typingNotes) => {
    const noteEdit = findNoteById(id);
    noteIndicator.value = noteEdit.notesId;
    confirmationFlag.value = true;
    confirmationDisplay.value = true;
    confirmationText.value = note?.noteTitle || '';
};

export const OpenEndingForm = (id: string, note: typingNotes) => {
    CloseFormItem()
    OpeningEditingForm(id)
    note.formFlag = true
    formActivete.value = false;
    confirmationFlag.value = false
    confirmationText.value = note.noteTitle
};
