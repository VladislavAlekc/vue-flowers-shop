<script setup>
import { reactive, ref } from 'vue'
import RangeSlider from './RangeSlider.vue'
import { useFiltersStore } from '../../stores/filtersStore'
const emit = defineEmits(['clickActiveFilters'])

const filtersStore = useFiltersStore()

const visableFlowers = ref(false)
const visableWhom = ref(false)
const visableEvent = ref(false)
const visableForm = ref(false)

const selectCheckbox = reactive({
  flowers: [
    { id: 1, name: 'Розы', typeFlower: 1 },
    { id: 2, name: 'Пионы', typeFlower: 2 },
    { id: 3, name: 'Хризантемы', typeFlower: 3 },
    { id: 4, name: 'Микс', typeFlower: 4 }
  ],
  persons: [
    { id: 1, name: 'Маме', whomAddressed: 1 },
    { id: 2, name: 'Любимой', whomAddressed: 2 },
    { id: 3, name: 'Сестре', whomAddressed: 3 },
    { id: 4, name: 'Дочери', whomAddressed: 4 }
  ],
  events: [
    { id: 1, name: 'День рождения', lifeEvents: 1 },
    { id: 2, name: 'Поздравление', lifeEvents: 2 },
    { id: 3, name: 'На свадьбу', lifeEvents: 3 },
    { id: 4, name: 'Извинения', lifeEvents: 4 }
  ],
  typeBouquets: [
    { id: 1, name: 'Классический букеты', bouquetСategory: 1 },
    { id: 2, name: 'Корзины', bouquetСategory: 2 },
    { id: 3, name: 'Цилиндры', bouquetСategory: 3 },
    { id: 4, name: 'Микс', bouquetСategory: 4 }
  ]
})
</script>
<template>
  <div class="text-[21px] font-bold leading-[120%] flex justify-between items-center mb-[14px]">
    <span>Фильтры</span>
    <span class="large:hidden" @click="emit('clickActiveFilters')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6"
      >
        <path
          fill-rule="evenodd"
          d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  </div>
  <div class="pt-[14px] pb-[36px] pr-[4px] sticky top-[84px] max-h-[100vh] overflow-auto">
    <div class="pb-[34px]">
      <RangeSlider />
      <div class="pt-[32px]">
        <div
          @click="visableFlowers = !visableFlowers"
          class="group flex items-center justify-between cursor-pointer"
        >
          <span class="text-[16px] leading-[120%]">Цветы</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.7"
            stroke="currentColor"
            class="w-4 h-4 text-[#999] group-hover:text-[#2dad73] duration-300"
            :class="[visableFlowers ? 'rotate-180' : '']"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <ul v-if="visableFlowers" class="pt-[14px]">
          <li
            class="[&:not(:last-child)]:pb-[14px]"
            v-for="flower in selectCheckbox.flowers"
            :key="flower.id"
          >
            <label class="cursor-pointer flex items-center">
              <input
                type="checkbox"
                v-model="filtersStore.selectedCheckbox.groupFlowers"
                :value="flower.typeFlower"
                class="relative cursor-pointer appearance-none w-5 h-5 border-[2px] border-gray-400 checked:border-[#2dad73] hover:border-[#2dad73] border-solid rounded-[5px] checked:bg-[#2dad73] after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-[url('/main/ok.svg')] after:bg-center after:bg-no-repeat after:bg-[length:16px]"
              />
              <span class="pl-[12px]">{{ flower.name }}</span>
            </label>
          </li>
        </ul>
      </div>
      <div class="pt-[32px]">
        <div
          @click="visableWhom = !visableWhom"
          class="group flex items-center justify-between cursor-pointer"
        >
          <span class="text-[16px] leading-[120%]">Кому</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.7"
            stroke="currentColor"
            class="w-4 h-4 text-[#999] group-hover:text-[#2dad73] duration-300"
            :class="[visableWhom ? 'rotate-180' : '']"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <ul v-if="visableWhom" class="pt-[14px]">
          <li
            class="[&:not(:last-child)]:pb-[14px]"
            v-for="person in selectCheckbox.persons"
            :key="person.id"
          >
            <label class="cursor-pointer flex items-center">
              <input
                type="checkbox"
                v-model="filtersStore.selectedCheckbox.groupPersons"
                :value="person.whomAddressed"
                class="relative cursor-pointer appearance-none w-5 h-5 border-[2px] border-gray-400 checked:border-[#2dad73] hover:border-[#2dad73] border-solid rounded-[5px] checked:bg-[#2dad73] after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-[url('/main/ok.svg')] after:bg-center after:bg-no-repeat after:bg-[length:16px]"
              />
              <span class="pl-[12px]">{{ person.name }}</span>
            </label>
          </li>
        </ul>
      </div>
      <div class="pt-[32px]">
        <div
          @click="visableEvent = !visableEvent"
          class="group flex items-center justify-between cursor-pointer"
        >
          <span class="text-[16px] leading-[120%]">Повод</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.7"
            stroke="currentColor"
            class="w-4 h-4 text-[#999] group-hover:text-[#2dad73] duration-300"
            :class="[visableEvent ? 'rotate-180' : '']"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <ul v-if="visableEvent" class="pt-[14px]">
          <li
            class="[&:not(:last-child)]:pb-[14px]"
            v-for="event in selectCheckbox.events"
            :key="event.id"
          >
            <label class="cursor-pointer flex items-center">
              <input
                type="checkbox"
                v-model="filtersStore.selectedCheckbox.groupEvents"
                :value="event.lifeEvents"
                class="relative cursor-pointer appearance-none w-5 h-5 border-[2px] border-gray-400 checked:border-[#2dad73] hover:border-[#2dad73] border-solid rounded-[5px] checked:bg-[#2dad73] after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-[url('/main/ok.svg')] after:bg-center after:bg-no-repeat after:bg-[length:16px]"
              />
              <span class="pl-[12px]">{{ event.name }}</span>
            </label>
          </li>
        </ul>
      </div>
      <div class="pt-[32px]">
        <div
          @click="visableForm = !visableForm"
          class="group flex items-center justify-between cursor-pointer"
        >
          <span class="text-[16px] leading-[120%]">Тип букета</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.7"
            stroke="currentColor"
            class="w-4 h-4 text-[#999] group-hover:text-[#2dad73] duration-300"
            :class="[visableForm ? 'rotate-180' : '']"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <ul v-if="visableForm" class="pt-[14px]">
          <li
            class="[&:not(:last-child)]:pb-[14px]"
            v-for="bouquet in selectCheckbox.typeBouquets"
            :key="bouquet.id"
          >
            <label class="cursor-pointer flex items-center">
              <input
                v-model="filtersStore.selectedCheckbox.groupTypeBouquets"
                type="checkbox"
                :value="bouquet.bouquetСategory"
                class="relative cursor-pointer appearance-none w-5 h-5 border-[2px] border-gray-400 checked:border-[#2dad73] hover:border-[#2dad73] border-solid rounded-[5px] checked:bg-[#2dad73] after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-[url('/main/ok.svg')] after:bg-center after:bg-no-repeat after:bg-[length:16px]"
              />
              <span class="pl-[12px]">{{ bouquet.name }}</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
    <button
      class="btn text-[16px] min-h-[42px] w-full leading-[120%] border-[2px] border-solid text-gray-600 border-gray-400 hover:border-[#2dad73] hover:text-[#2dad73] rounded-[6px]"
      type="button"
      @click="filtersStore.clearFilters"
    >
      Очистить фильтры
    </button>
  </div>
</template>
