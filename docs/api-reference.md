# API Reference

This document provides a comprehensive reference for all APIs, utilities, and configuration interfaces available in Panda Vue Admin.

## Configuration API

### Environment Variables

#### Required Variables
- `VITE_API_BASE_URL`: Base URL for API endpoints
- `VITE_APP_TITLE`: Application title
- `VITE_DEBUG_MODE`: Enable debug features

#### Optional Variables
- `VITE_THEME`: Default theme (light/dark)
- `VITE_MOCK_API`: Enable mock API responses

### Configuration Interface

```typescript
interface AppConfig {
  apiBaseUrl: string;
  appTitle: string;
  debugMode: boolean;
  theme: 'light' | 'dark';
  mockApi: boolean;
}
```

## Utilities API

### Common Utilities

#### useLocalStorage

```typescript
const { value, setValue, removeValue } = useLocalStorage<T>(
  key: string,
  defaultValue: T
);
```

#### useDebounce

```typescript
const debouncedValue = useDebounce(
  value: Ref<T>,
  delay: number = 300
): Ref<T>
```

## Service API

### BaseService

Base class for all API services:

```typescript
abstract class BaseService {
  protected api: AxiosInstance;
  
  constructor(basePath: string = '') {
    this.api = axios.create({
      baseURL: `${config.apiBaseUrl}${basePath}`,
    });
  }
  
  protected async get<T>(path: string): Promise<T> {
    const response = await this.api.get<T>(path);
    return response.data;
  }
  
  protected async post<T>(path: string, data: any): Promise<T> {
    const response = await this.api.post<T>(path, data);
    return response.data;
  }
}
```

### User Service

```typescript
class UserService extends BaseService {
  constructor() {
    super('/users');
  }
  
  async getUsers(): Promise<User[]> {
    return this.get<User[]>('/');
  }
  
  async getUser(id: number): Promise<User> {
    return this.get<User>(`/${id}`);
  }
  
  async createUser(user: CreateUserDTO): Promise<User> {
    return this.post<User>('/', user);
  }
}
```

## Hooks API

### useAuth

```typescript
const {
  user,
  isAuthenticated,
  login,
  logout,
  loading
} = useAuth();
```

### useApi

```typescript
const {
  data,
  error,
  loading,
  refetch
} = useApi<T>(
  apiFunction: () => Promise<T>,
  dependencies: any[] = []
);
```

## Types

### Common Types

```typescript
interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  createdAt: string;
  updatedAt: string;
}

interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}
```

## Error Handling

### ApiError

```typescript
class ApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}
```

### Error Response

```typescript
interface ErrorResponse {
  code: string;
  message: string;
  details?: Record<string, string[]>;
  timestamp: string;
}
```

---

*For usage examples, see the [Examples](./examples/) section*