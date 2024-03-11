<script setup>
import { computed, ref } from 'vue'
import { useFiltersStore } from '../../stores/filtersStore.js'

const filtersStore = useFiltersStore()

const minRange = ref(0)
const maxRange = ref(20000)

const value = computed({
  get() {
    return [filtersStore.from, filtersStore.to]
  },
  set(val) {
    filtersStore.from = val[0]
    filtersStore.to = val[1]
  }
})

const setSwitchInput = () => {
  if (filtersStore.from > filtersStore.to) {
    let temp = filtersStore.to
    filtersStore.to = filtersStore.from
    filtersStore.from = temp
  }

  if (filtersStore.to > maxRange.value) {
    filtersStore.to = maxRange.value
  }

  if (filtersStore.from === '' || filtersStore.from <= minRange.value) {
    filtersStore.from = 0
  }
  if (filtersStore.to <= minRange.value) {
    filtersStore.to = maxRange.value
  }
  if (filtersStore.from === filtersStore.to) {
    filtersStore.from = filtersStore.from - 100
  }
}
</script>
<template>
  <div>
    <div class="text-[16px] leading-[120%]">Цена</div>
    <div class="flex pt-[12px]">
      <label
        class="bg-[rgba(85,182,134,0.24)] cursor-text flex items-center min-h-[42px] py-[9px] pl-[12px] pr-[8px] mr-[12px] rounded-[8px]"
      >
        <span class="mr-[4px] text-gray-500 text-[12px] pointer-events-none">от</span>
        <input
          class="w-full overflow-hidden outline-none bg-[#55b68600]"
          placeholder="0"
          type="number"
          inputmode="numeric"
          autocomplete="off"
          @change="setSwitchInput"
          @blur="filtersStore.changeRangePrice(value)"
          v-model="filtersStore.from"
        />
      </label>
      <label
        class="bg-[rgba(85,182,134,0.24)] flex items-center cursor-text min-h-[42px] py-[9px] pl-[12px] pr-[8px] rounded-[8px]"
      >
        <span class="mr-[4px] text-gray-500 text-[12px] pointer-events-none">до</span>
        <input
          class="w-full bg-[#55b68600] overflow-hidden outline-none"
          placeholder="20000"
          type="text"
          inputmode="numeric"
          @change="setSwitchInput"
          @blur="filtersStore.changeRangePrice(value)"
          autocomplete="off"
          v-model="filtersStore.to"
        />
      </label>
    </div>
    <div class="mt-[14px] mx-[9px]">
      <vue-slider
        :min="minRange"
        :max="maxRange"
        :min-range="100"
        :dotSize="16"
        :disabled="false"
        :interval="100"
        :duration="0.3"
        :dragOnClick="true"
        :height="5"
        @drag-end="filtersStore.changeRangePrice(value)"
        :tooltip="'none'"
        :dotStyle="{
          backgroundColor: '#2dad73'
        }"
        :processStyle="{
          backgroundColor: '#2dad73'
        }"
        v-model="value"
      ></vue-slider>
    </div>
  </div>
</template>
