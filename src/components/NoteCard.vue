<template>
    <div class="card">
        <div class="container" v-if="!note.formFlag">
            <div class="card_item">
                <div class="card__content">
                    <div class="card__header">
                        <div class="check-container">
                            <div class="card__content-details">
                                <h4>
                                    {{ note.noteTitle }}
                                </h4>
                                <h6>
                                    {{ note.noteDescriptions }}
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div v-if="note.noteData">
                        {{ formatDateFrom(note.noteData) }}
                    </div>
                </div>
                <div class="card__content_button">
                    <el-button :icon="Edit" @click="OpenEndingForm(note.notesId, note)" />
                    <el-button :icon="Delete" @click="OpenDeleteForm(note.notesId, note)" />
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
import { formatDateFrom } from '../modules/base-function'
import { OpenDeleteForm, OpenEndingForm } from '../modules/opening-closing-item'
defineProps(['note']);
</script>


<style scoped>
.card {
    display: flex;
    align-items: center;
    justify-content: center;
}

.card_item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    padding: 10px 20px;
    margin: 0 auto;
    color: white;
    border-bottom: 1px rgb(79, 78, 78) solid;
}

.card__content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
}

.card__header {
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


.card__content-details {
    display: flex;
    flex-direction: column;
    max-width: 350px;
    width: 100%;
    word-wrap: break-word;
}
</style>