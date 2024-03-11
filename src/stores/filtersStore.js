import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useFiltersStore = defineStore('filtersStore', () => {
  const filters = reactive({
    searchQuery: '',
    sortBy: 'rating',
    category: 0
  })
  const price = ref([0, 20000])
  const from = ref(0)
  const to = ref(20000)
  const selectedCheckbox = reactive({
    groupFlowers: [],
    groupPersons: [],
    groupEvents: [],
    groupTypeBouquets: []
  })

  const changeSearch = (event) => {
    filters.searchQuery = event.target.value
  }
  const changeFilter = (target) => {
    filters.sortBy = target.sortBy
  }
  const changeRangePrice = (value) => {
    price.value = value
  }

  const clearFilters = () => {
    selectedCheckbox.groupFlowers = []
    selectedCheckbox.groupPersons = []
    selectedCheckbox.groupEvents = []
    selectedCheckbox.groupTypeBouquets = []
    price.value = [0, 20000]
    from.value = 0
    to.value = 20000
  }
  return {
    filters,
    price,
    from,
    to,

    changeSearch,
    changeFilter,
    changeRangePrice,
    clearFilters,
    selectedCheckbox
  }
})
