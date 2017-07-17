import { MutationPayload } from 'vuex'

// Store
export interface RootState {
  count: number
  todos: TodoState
  login: LoginState
}

export interface TodoState {
  todos: Todo[]
}

export interface LoginState {
  user: string,
  isLoggedIn: boolean
}

export interface HistoryState {
  history: MutationPayload[]
}

export interface PluginOptions {
  persist?: boolean
}

// Models
export interface Todo {
  text: string,
  checked: boolean
}