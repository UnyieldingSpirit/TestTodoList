import type { typingNotes } from '@/shared/type';
import { findNoteById } from './base-function'
import { saveLocalStorage } from './local-storege';
import { data, desc, noteIndicator, notes, title } from './variables';

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
        notes.value.splice(noteIndex, 1);
        saveLocalStorage();
    }
}

export function CloseFormItem() {
    notes.value.forEach((note) => {
        note.formFlag = false;
    });
}

