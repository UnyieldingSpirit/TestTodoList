<template>
    <div class="confirmation_bg" v-if="confirmationDisplay" @click="closeNote">
        <div class="confirmation" @click.stop="">
            <div class="confirmation__icon">
                <el-icon>
                    <InfoFilled />
                </el-icon>
                <el-icon>
                    <CircleCloseFilled @click="" />
                </el-icon>
            </div>
            <div class="confirmation__title">
                {{ confirmationFlag ? `Удалить заметку ${confirmationText} ?` : `Отменить редоктирование
                                ${confirmationText} ?` }}
            </div>
            <div class="confirmation__button">
                <el-button type="info" @click="closeNote">Отмена</el-button>
                <el-button v-if="confirmationFlag" @click="deleteNote" type="danger" color="#E52F41">Удалить</el-button>
                <el-button v-else type="danger" @click="confirmationNote" color="#E52F41">Подтвердить</el-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { closeNote, confirmationNote, deleteNote } from '@/modules/confirmation';
import { confirmationDisplay, confirmationFlag, confirmationText } from '@/modules/variables';
import {
    InfoFilled,
    CircleCloseFilled,

} from '@element-plus/icons-vue';




</script>

<style scoped>
.el-icon {
    color: #409EFC;
    font-size: 25px;
}

.el-icon:nth-child(2) {
    cursor: pointer;
}

.confirmation_bg {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 300px 0 0 0;
    background: rgba(0, 0, 0, 0.085);
    transition: 0.4s linear;
    z-index: 10;
}

.confirmation {
    width: 450px;
    height: 180px;
    padding: 16px;
    background: #213d5b;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 34px;
}

.confirmation__title {
    color: white;
    font-size: 19px;
}

.confirmation__icon {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.confirmation__button {
    display: flex;
    justify-content: end;
}
</style>