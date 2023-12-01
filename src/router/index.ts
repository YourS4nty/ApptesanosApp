import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

// Main Section
import test from '@/views/test.vue'
import userProfileX from '@/views/ProfileX.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/Register.vue'
import thanks from '@/views/Agradecimientos.vue'
import Home from '@/views/Home.vue'
import verify from '@/views/Verify.vue'
import userv from '@/views/Menu/UserVentas.vue'
import fPassword from '@/views/FPassword.vue'
import passSend from '@/views/PasswordSend.vue'
// Main Section

// Ventas Section
import ventasAdd from '@/views/Menu/Submenus/Ventas/main.vue'
import ventasFn from '@/views/Menu/Submenus/Ventas/FinalView.vue'
import EditarTarea from '@/views/Menu/Submenus/Ventas/Edit.vue'
import detailsV from '@/views/Menu/Submenus/Ventas/details.vue'
// Ventas Section


// Inventory Section
import mainInv from '@/views/Menu/Submenus/Inventory/Base.vue'
import invFinal from '@/views/Menu/Submenus/Inventory/FinalView.vue'
import inventory from '@/views/Menu/Inventory.vue'
import inventory1 from '@/views/Menu/Submenus/Inventory/InventorySub1.vue'
import inventory2 from '@/views/Menu/Submenus/Inventory/inventorySub2.vue'
import inventory3 from '@/views/Menu/Submenus/Inventory/InventorySub3.vue'
import InventoryViewAll from '@/views/Menu/Submenus/Inventory/inventoryViewAll.vue'
// Inventory Section

import calcCost from '@/views/Menu/costs.vue'
import cost1 from '@/views/Menu/Submenus/Costs/costMain.vue'
import reports from '@/views/Menu/report.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/verify'
  },
  {
    path: '/verify',
    name: 'Verify',
    component: verify
  },
  {
    path: '/reg',
    name: 'Register',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/fPass',
    name: 'Password',
    component: fPassword
  }, 
  {
    path: '/passSend',
    name: 'Passwordx',
    component: passSend
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/my',
    name: 'Profile',
    component: userProfileX,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/thanks',
    name: 'Agradecimientos',
    component: thanks,
  },
  {
    path: '/ventas',
    name: 'Ventas Del Usuario',
    component: userv,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/inv',
    name: 'Inventario',
    component: inventory,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  // SubMenus Para Inventario
  {
    path: '/invBase',
    name: 'Base INv',
    component: mainInv,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/invFinal',
    name: 'final INv',
    component: invFinal,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/inv1',
    name: 'Inventario1',
    component: inventory1,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/inv2',
    name: 'Inventario2',
    component: inventory2,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/inv3',
    name: 'Inventario3',
    component: inventory3,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/invVA',
    name: 'InventarioViewAll',
    component: InventoryViewAll,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  // SubMenus Para Inventario

  // Sub Menu Para Costos
  {
    path: '/costs',
    name: 'Costos',
    component: calcCost,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/cost1',
    name: 'Costos1',
    component: cost1,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  // Sub Menu Para Costos
  {
    path: '/report',
    name: 'Reportes',
    component: reports,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/Vadding',
    name: 'Ventas Añadir',
    component: ventasAdd,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/VFInal',
    name: 'Ventas Final',
    component: ventasFn,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: "/EditV/:tareaId",
    name: "Ventas-Editar",
    component: EditarTarea,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
    props: true, // Permite pasar props desde la URL
  },
  {
    path: "/VDetail/:tareaId",
    name: "Ventas-Detalles",
    component: detailsV,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
    props: true, // Permite pasar props desde la URL
  },
  {
    path: '/test',
    name: 'test',
    component: test
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  onAuthStateChanged(auth, (user) => {
    if (requiresAuth && !user) {
      // Si se requiere autenticación y el usuario no está autenticado, redirige a la página de inicio de sesión
      next('/login');
    } else {
      // Permite la navegación
      next();
    }
  });
});

export default router
