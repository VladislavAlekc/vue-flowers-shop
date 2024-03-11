export const routes = [
  { path: '/', name: 'Home', component: () => import('../pages/Home.vue') },
  {
    path: '/bouquet/:id',
    name: 'Bouquet',
    component: () => import('../pages/Product.vue')
  },
  { path: '/cart', name: 'Cart', component: () => import('../pages/Cart.vue') },
  { path: '/favorites', name: 'Favorites', component: () => import('../pages/Favorites.vue') },
  { path: '/:catchAll(.*)', name: 'NotFound', component: () => import('../pages/NotFound.vue') },
  {
    path: '/',
    name: '',

    component: () => import('../pages/AboutUs.vue'),
    children: [
      {
        path: 'about',
        name: 'About us',
        meta: { breadcrumb: 'О нас' },
        component: () => import('../components/AboutUsComponents/About.vue')
      },
      {
        path: 'delivery',
        name: 'Delivery',
        meta: { breadcrumb: 'Доставка' },
        component: () => import('../components/AboutUsComponents/Delivery.vue')
      },
      {
        path: 'payment',
        name: 'Payment',
        meta: { breadcrumb: 'Оплата' },
        component: () => import('../components/AboutUsComponents/Payment.vue')
      },
      {
        path: 'contacts',
        name: 'Сontacts',
        meta: { breadcrumb: 'Контакты' },
        component: () => import('../components/AboutUsComponents/Сontacts.vue')
      },
      {
        path: 'reviews',
        name: 'Reviews',
        meta: { breadcrumb: 'Отзывы' },
        component: () => import('../components/AboutUsComponents/Reviews.vue')
      },
      {
        path: 'guarantees',
        name: 'Guarantees',
        meta: { breadcrumb: 'Гарантии' },
        component: () => import('../components/AboutUsComponents/Guarantees.vue')
      }
    ]
  }
]
