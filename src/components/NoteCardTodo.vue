<template>
    <div class="note">
        <div class="container" v-if="!note.formFlag">
            <div class="note-card">
                <div class="note-card__content">
                    <div class="note-card__header">
                        <div class="check-container">
                            <div class="note-card__content-details">
                                <h4>
                                    {{ note.noteTitle }}
                                </h4>
                                <h6>
                                    {{ note.noteDescriptions }}
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="note-card__content_button">
                    <el-button :icon="Edit" @click="OpenEndingForm(note.notesId)" />
                    <el-button :icon="Delete" @click="OpenDeleteForm(note.notesId)" />
                </div>
            </div>
        </div>
        <NotesForm :note="note" v-else />
        <ConfirmationForm :note="note" />
    </div>
</template>

<script setup lang="ts">
import ConfirmationForm from "./ConfirmationForm.vue";
import {
    Edit,
    Delete,
} from '@element-plus/icons-vue';
import NotesForm from './NotesForm.vue';
import { confirmationDisplay, confirmationFlag, confirmationText, data, desc, formActivete, noteIndicator, notes, title } from "@/modules/variables";
import { findNoteById } from '../modules/base-function'
import { CloseFormItem, OpeningEditingForm } from '../modules/open-edit-note'
const props = defineProps(['note']);


const OpenEndingForm = (id: string) => {
    CloseFormItem()
    OpeningEditingForm(id)
    props.note.formFlag = true
    formActivete.value = false;
    confirmationFlag.value = false
    confirmationText.value = props.note.noteTitle
};



const OpenDeleteForm = (id: string) => {
    const noteEdit = findNoteById(id);
    noteIndicator.value = noteEdit.notesId;
    confirmationFlag.value = true;
    confirmationDisplay.value = true;
    confirmationText.value = props.note?.noteTitle || '';
};

</script>


<style scoped>
.note {
    display: flex;
    align-items: center;
    justify-content: center;
}

.note-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    padding: 10px 20px;
    margin: 0 auto;
    color: white;
    border-bottom: 1px rgb(79, 78, 78) solid;
}

.note-card__content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
}

.note-card__header {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-size: 20px;
    gap: 10px;
    cursor: pointer;
}

.check-container {
    display: flex;
    align-items: center;
    gap: 10px;

}

.el-button {
    background: #213d5b;
    color: white;
    border: #3b82ce 1px solid;
}




.card__item_text-title-clickable {
    cursor: pointer;
}






.note-card__content-details {
    display: flex;
    flex-direction: column;
    max-width: 350px;
    width: 100%;
    word-wrap: break-word;
}
</style>