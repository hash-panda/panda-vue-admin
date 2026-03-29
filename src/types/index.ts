// Global type definitions

export interface UserInfo {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  role: string;
}

export interface MenuItem {
  key: string;
  label: string;
  icon?: string;
  path?: string;
  children?: MenuItem[];
}

export interface AppState {
  sidebarCollapsed: boolean;
  userInfo: UserInfo | null;
  loading: boolean;
}

export interface ApiResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

// Common pagination types
export interface PaginationParams {
  page: number;
  pageSize: number;
  total?: number;
}

export interface PaginatedData<T> {
  list: T[];
  pagination: PaginationParams;
}