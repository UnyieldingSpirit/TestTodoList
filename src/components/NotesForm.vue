<template>
  <div class="form" v-if="route.path == '/' || note.formFlag" @keyup.enter="FormChenge">
    <div class="form-input">
      <input type="text" placeholder="Название задачи" v-model="title">
      <input type="text" placeholder="Описание" v-model="desc">
    </div>
    <div class="form__calendar-button">
      <div class="block">
        <el-date-picker v-model="data" type="date" placeholder="Срок выполнения" />
      </div>
      <el-row class="mb-4">
        <el-button type="info" @click="CloseForm">Отмена</el-button>
        <el-button type="danger" @click="FormChenge" color="#E52F41" :disabled="title === ''">
          {{ !note.formFlag ? 'Добавить задачу' : 'Отредактировать задачу' }}
        </el-button>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { useNoteFunction } from '../composables/note-function'
import { saveLocalStorage } from "@/modules/local-storege";
import { title, desc, data, formActivete, confirmationFlag, confirmationDisplay } from '../modules/variables'
import { EditNoteItems } from "@/modules/open-edit-note";
import { DeleteLine } from '../modules/base-function'
const { AddNoteItem } = useNoteFunction()
const router = useRouter()
const route = useRoute()
const props = defineProps(['note'])




const CloseForm = () => {
  formActivete.value = true
  confirmationFlag.value = false
  confirmationDisplay.value = true
}

const FormChenge = () => {
  !props.note.formFlag ? AddNoteItems() : EditNote()
}

const EditNote = () => {
  EditNoteItems()
  props.note.formFlag = false;
}

const AddNoteItems = () => {
  if (title.value !== '') {
    AddNoteItem(title.value, desc.value, data.value)
    router.push('/active')
    saveLocalStorage()
    DeleteLine()
  }
}


</script>
 
 
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  border: 1px solid #7c90a5;
  background: #18222c;
  padding: 20px;
  max-width: 760px;
  width: 100%;

}

.form.active {
  position: absolute;
  width: 100%;
  transform: translate(-50%);
}

.form__input {
  display: flex;
  flex-direction: column;
}

.form__calendar-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-input input {
  padding: 8.3px 10px;
  border-radius: 4px;
  color: #c7c7c7;
  outline: none;
  border: none;
  border-bottom: 1px solid white;
}

.el-input__wrapper {
  background: none;
}

.el-date-picker__header {
  background: none;
}
</style>