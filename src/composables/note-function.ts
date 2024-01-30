import { createId } from "@/modules/base-function"
import { notes } from "@/modules/variables"
import type { typingNotes } from "@/shared/type"

export function useNoteFunction() {
    const AddNoteItem = (title: string, desc: string, data: string) => {
        const newNote: typingNotes = {
            notesId: createId(),
            noteTitle: title,
            noteDescriptions: desc,
            noteData: data,
            subtasksFlag: false,
            formFlag: false,
        }
        notes.value.push(newNote)
        return newNote
    }
    return {
        AddNoteItem
    }
}