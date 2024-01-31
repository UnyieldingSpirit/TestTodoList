<template>
    <div class="card">
        <div class="container">
            <div class="card_item">
                <div class="card__content">
                    <div class="card__header">
                        <div class="check-container">
                            <div class="card__content-details">
                                <h4>
                                    {{ histor.noteTitle }}
                                </h4>
                                <h6>
                                    {{ histor.noteDescriptions }}
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card__content_button" @click="recoveryHistory">
                    <el-button type="primary">Востоновить</el-button>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { recoveryNoteItem } from '../modules/open-edit-note'

const props = defineProps(['histor']);
const recoveryHistory = () => {
    recoveryNoteItem(props.histor.notesId);
};
</script>


<style scoped>
.el-button {
    padding: 18px 20px;
}
</style>