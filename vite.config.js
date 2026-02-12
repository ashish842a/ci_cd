// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig(({ mode }) => {

  const basePaths = {
    dev: '/ci_cd/dev/',
    staging: '/ci_cd/staging/',
    production: '/ci_cd/',
  }

  return {
    plugins: [react()],
    base: basePaths[mode] || '/',
  }
})



// export default defineConfig(({ mode }) => {

//   let basePath = '/ci_cd/'

//   if (mode === 'development') {
//     basePath = '/'
//   }

//   if (mode === 'dev') {
//     basePath = '/ci_cd/dev/'
//   }

//   if (mode === 'staging') {
//     basePath = '/ci_cd/staging/'
//   }

//   return {
//     plugins: [react()],
//     base: basePath,
//   }
// })


