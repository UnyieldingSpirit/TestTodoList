import type { typingNotes } from '@/shared/type';
import { findNoteById } from './base-function'
import { saveLocalStorage } from './local-storege';
import { data, desc, history, noteIndicator, notes, title } from './variables';

export function EditNoteItems() {
    const noteId = findNoteById(noteIndicator?.value);
    
    if (noteId) {
        noteId.noteTitle = title.value;
        noteId.noteDescriptions = desc.value;
        noteId.noteData = data.value;
        saveLocalStorage();
    }
}

export function OpeningEditingForm(id: string) {
    const noteEdit = findNoteById(id);
    noteIndicator.value = noteEdit.notesId;
    if (noteIndicator.value) {
        title.value = noteEdit.noteTitle;
        desc.value = noteEdit.noteDescriptions;
        data.value = noteEdit.noteData;
    }
}

export function DeleteForm() {
    const noteIndex = notes.value.findIndex((note: typingNotes) => note.notesId === noteIndicator.value);
    if (noteIndex !== -1) {
        history.value.push(notes.value[noteIndex])
        notes.value.splice(noteIndex, 1);
        saveLocalStorage();
    }
}

export function CloseFormItem() {
    notes.value.forEach((note: typingNotes) => {
        note.formFlag = false;
    });
}

export function recoveryNoteItem(id: string) {
    const noteIndex = history.value.findIndex((note: typingNotes) => note.notesId === id);
    console.log(noteIndex);

    if (noteIndex !== -1) {
        notes.value.push(history.value[noteIndex])
        history.value.splice(noteIndex, 1);
        saveLocalStorage();
    }
}