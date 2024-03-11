<script setup>
import { useItemStore } from '../../stores/itemsStore'
const itemStore = useItemStore()

const clickCallback = () => {
  itemStore.page
}
</script>

<template>
  <paginate
    v-model="itemStore.page"
    :page-count="itemStore.pageCount"
    :page-range="3"
    :click-handler="clickCallback"
    :margin-pages="2"
    :prev-text="'«'"
    :next-text="'»'"
    :container-class="itemStore.pageCount === 0 ? 'hidden' : 'pagination'"
    :page-class="'page-item'"
    :disabled-class="'disabled-class'"
    :page-link-class="'page-link'"
    :active-class="'active-page'"
    :hide-prev-next="true"
  ></paginate>
</template>

<style>
.hidden {
  display: none;
}
.pagination {
  padding-top: 38px;
  display: flex;
  justify-content: center;
}
@media (max-width: 767.98px) {
  .pagination {
    padding-top: 34px;
  }
}
.page-item:not(:first-child) {
  margin-left: 8px;
}
.page-item {
  cursor: pointer;
  border-radius: 6px;
}
.page-item:hover {
  background-color: rgba(189, 189, 189, 0.206);

  transition: background-color 0.3s ease;
}
.page-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: #333;
  font-size: 16px;
  line-height: 120%;
}
.active-page {
  background: rgba(85, 182, 134, 0.24);
}
</style>
