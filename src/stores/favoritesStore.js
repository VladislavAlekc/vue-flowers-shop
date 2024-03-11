import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'
import { useItemStore } from './itemsStore'
import { useCartStore } from './cartsStore'

export const useFavoritesStore = defineStore('favoritesStore', () => {
  const favorite = ref([])
  const cartStore = useCartStore()
  const itemStore = useItemStore()

  const fetchFavorites = async () => {
    try {
      const { data: favorites } = await axios.get(`https://4e897fcc89ece60f.mokky.dev/favorites`)
      itemStore.items = itemStore.items.map((item) => {
        const favorite = favorites.find((favorite) => favorite.item_id === item.id)

        if (!favorite) {
          return item
        }
        return {
          ...item,
          isFavorite: true,
          favoriteId: favorite.id
        }
      })
    } catch (err) {
      console.log(err)
    }
  }
  const addToFavorite = async (item) => {
    try {
      if (!item.isFavorite) {
        favorite.value.push({
          ...item,
          count: 1
        })
        const obj = {
          ...item,
          item_id: item.id
        }

        const { data } = await axios.post(`https://4e897fcc89ece60f.mokky.dev/favorites`, obj)
        item.isFavorite = true
        item.favoriteId = data.id
      } else {
        favorite.value.splice(favorite.value.indexOf(item), 1)

        await axios.delete(`https://4e897fcc89ece60f.mokky.dev/favorites/${item.favoriteId}`)
        item.isFavorite = false
        item.favoriteId = null
      }
    } catch (err) {
      console.log(err)
    }
  }
  const getFavorites = async () => {
    try {
      const { data } = await axios.get(
        `https://4e897fcc89ece60f.mokky.dev/favorites?_relations=items`
      )

      favorite.value = data.map((obj) => ({
        ...obj,
        count: 1,
        isFavorite: true,
        favoriteId: obj.id,
        isAdded: cartStore.cartItems.some((cart) => cart.id === obj.id || cart.id === obj.item.id)
      }))
    } catch (error) {
      console.log(error)
    }
  }

  const removeFavorites = async (item) => {
    try {
      if (!item.isFavorite) {
        const obj = {
          ...item,

          item_id: item.id
        }
        item.count = 1
        const { data } = await axios.post(`https://4e897fcc89ece60f.mokky.dev/favorites`, obj)

        item.isFavorite = true
        item.favoriteId = data.id
      } else {
        item.count = 0
        await axios.delete(`https://4e897fcc89ece60f.mokky.dev/favorites/${item.favoriteId}`)

        item.isFavorite = false
        item.favoriteId = null
      }
    } catch (err) {
      console.log(err)
    }
  }
  const addToCart = (item) => {
    cartStore.cartItems.push({
      ...item,
      id: item.item.id,
      count: 1
    })

    item.isAdded = true
  }
  const countFavorites = computed(() =>
    favorite.value.reduce((sum, item) => {
      return sum + item.count
    }, 0)
  )

  return {
    favorite,
    fetchFavorites,
    addToFavorite,
    getFavorites,
    removeFavorites,
    addToCart,
    countFavorites
  }
})
