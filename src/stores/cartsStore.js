import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import axios from 'axios'

export const useCartStore = defineStore('cartStore', () => {
  const cartItems = ref([])
  const isCreatingOrder = ref(false)
  const orderId = ref(null)

  const localStorageItems = localStorage.getItem('cartItems')

  cartItems.value = localStorageItems ? JSON.parse(localStorageItems) : []

  watch(
    () => cartItems,
    (state) => {
      localStorage.setItem('cartItems', JSON.stringify(state.value))
    },
    { deep: true }
  )
  const addToCart = (item) => {
    const findItem = cartItems.value.find((product) => product.id === item.id)
    if (findItem) {
      findItem.count++
    } else {
      cartItems.value.push({
        ...item,

        count: 1
      })
    }

    item.isAdded = true
  }
  const minusItem = (item) => {
    const findItem = cartItems.value.find((product) => product.id === item.id)
    if (findItem) {
      findItem.count--
    }
  }
  const createOrder = async () => {
    try {
      isCreatingOrder.value = true
      const { data } = await axios.post(`https://4e897fcc89ece60f.mokky.dev/orders`, {
        items: cartItems.value,
        finalPrice: finalPrice.value
      })

      cartItems.value = []

      orderId.value = data.id
    } catch (error) {
      console.log(error)
    } finally {
      isCreatingOrder.value = false
    }
  }
  const removeFromCart = (item) => {
    cartItems.value.splice(cartItems.value.indexOf(item), 1)
    item.isAdded = false
  }
  const finalPrice = computed(() =>
    cartItems.value.reduce((sum, item) => {
      return sum + item.price * item.count
    }, 0)
  )
  const totalPrice = computed(() =>
    cartItems.value.reduce((sum, item) => {
      if (item.priceOld) {
        return sum + item.priceOld * item.count
      }
      return sum + item.price * item.count
    }, 0)
  )
  const discountPrice = computed(() => {
    return finalPrice.value - totalPrice.value
  })
  const totalCount = computed(() =>
    cartItems.value.reduce((sum, item) => {
      if (item.priceOld) {
        return sum + item.count
      }
      return sum + item.count
    }, 0)
  )

  return {
    cartItems,
    addToCart,
    minusItem,
    createOrder,
    orderId,
    isCreatingOrder,
    removeFromCart,
    totalPrice,
    finalPrice,
    discountPrice,
    totalCount
  }
})
