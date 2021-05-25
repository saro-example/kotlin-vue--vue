import { createRouter, createWebHistory } from 'vue-router'

import Layout from "@/views/site/Layout.vue";
import P404 from "@/views/site/404.vue";
import Home from "@/views/site/Home.vue";

const router = createRouter({

  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ left: 0, top: 0 }), 1);
    });
  },
  routes: [
      // basic
      {
        path: '/', component: Layout,
        children: [
          { path: '/', component: Home },
          { path: '/:path(.*)', component: P404, meta: { title: '가리사니 404' } },
        ]
      },
  ],
});

export default router;