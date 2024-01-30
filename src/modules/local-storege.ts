import { notes } from "./variables";

export function saveLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(notes.value));
}