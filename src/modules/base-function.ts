import { data, desc, notes, title } from "./variables";

export function createId() {
  return Date.now().toString(36) + Math.random().toString(36)
}

export function formatDateFrom(dateString: string) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function findNoteById(id) {
  return notes.value.find((note) => note.notesId === id);
};

export const DeleteLine = () => {
  title.value = ''
  desc.value = ''
  data.value = ''
}