import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useFiltersStore } from './filtersStore'
import { useCartStore } from './cartsStore'
import { useFavoritesStore } from './favoritesStore'

export const useItemStore = defineStore('itemsStore', () => {
  const items = ref([])
  const isLoading = ref(false)
  const page = ref(1)
  const pageCount = ref(0)
  const limit = ref(9)

  const favoritesStore = useFavoritesStore()
  const cartStore = useCartStore()

  const filtersStore = useFiltersStore()

  const fetchItems = async () => {
    try {
      isLoading.value = true

      const params = {
        page: page.value,
        limit: limit.value,
        sortBy: filtersStore.filters.sortBy
      }
      if (filtersStore.filters.searchQuery) {
        params.title = `*${filtersStore.filters.searchQuery}*`
      }
      if (filtersStore.filters.category > 0) {
        params.category = `${filtersStore.filters.category}`
      }
      if (filtersStore.selectedCheckbox.groupFlowers.length) {
        const arrFlowers = `${filtersStore.selectedCheckbox.groupFlowers}`
        console.log(arrFlowers)
        params.typeFlower = [...arrFlowers].filter((obj) => obj != ',')
      }
      if (filtersStore.selectedCheckbox.groupPersons.length) {
        const arrPersons = `${filtersStore.selectedCheckbox.groupPersons}`

        params.whomAddressed = [...arrPersons].filter((obj) => obj != ',')
      }
      if (filtersStore.selectedCheckbox.groupEvents.length) {
        const arrEvents = `${filtersStore.selectedCheckbox.groupEvents}`

        params.lifeEvents = [...arrEvents].filter((obj) => obj != ',')
      }
      if (filtersStore.selectedCheckbox.groupTypeBouquets.length) {
        const arrBouquets = `${filtersStore.selectedCheckbox.groupTypeBouquets}`

        params.bouquetСategory = [...arrBouquets].filter((obj) => obj != ',')
      }

      const { data } = await axios.get(
        `https://4e897fcc89ece60f.mokky.dev/items?price[from]=${filtersStore.price[0]}&price[to]=${filtersStore.price[1]}`,
        {
          params
        }
      )

      items.value = data.items.map((obj) => ({
        ...obj,
        isFavorite: favoritesStore.favorite.some((fav) => fav.item.id === obj.id) || false,
        favoriteId: null,
        isAdded: cartStore.cartItems.some((cart) => cart.id === obj.id)
      }))

      pageCount.value = Math.ceil(data.meta.total_items / limit.value)

      if (!items.value.length) {
        page.value = pageCount.value
      } else if (pageCount.value === 1) {
        pageCount.value = 0
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      isLoading.value = false
    } catch (err) {
      console.log(err)
    }
  }

  return { items, isLoading, fetchItems, page, pageCount, limit }
})
