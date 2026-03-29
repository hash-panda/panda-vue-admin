import { defineStore } from 'pinia'
import type { AppState, UserInfo } from '@/types'

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    sidebarCollapsed: false,
    userInfo: null,
    loading: false,
  }),

  getters: {
    isLoggedIn: (state) => !!state.userInfo,
    username: (state) => state.userInfo?.username || '',
  },

  actions: {
    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed
    },

    setSidebarCollapsed(collapsed: boolean) {
      this.sidebarCollapsed = collapsed
    },

    setUserInfo(userInfo: UserInfo | null) {
      this.userInfo = userInfo
    },

    setLoading(loading: boolean) {
      this.loading = loading
    },

    // Mock login action
    async login(username: string, password: string) {
      this.setLoading(true)
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        if (username === 'admin' && password === 'password') {
          this.setUserInfo({
            id: '1',
            username: 'admin',
            email: 'admin@example.com',
            role: 'admin',
          })
          return { success: true }
        }
        
        return { success: false, message: 'Invalid credentials' }
      } finally {
        this.setLoading(false)
      }
    },

    logout() {
      this.setUserInfo(null)
    },
  },
})