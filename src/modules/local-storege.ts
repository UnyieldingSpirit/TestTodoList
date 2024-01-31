import { history, notes } from "./variables";

export function saveLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(notes.value));
    localStorage.setItem('history', JSON.stringify(history.value));
}