import { Filter, FolderAdd, Histogram, Notebook } from '@element-plus/icons-vue'

export const routers = [
    { name: 'Добавить', path: '/', icon: FolderAdd },
    { name: 'Активные', path: '/active', icon: Histogram },
    { name: 'Фильтры', path: '/filters', icon: Filter },
    { name: 'История', path: '/history', icon: Notebook },
]
