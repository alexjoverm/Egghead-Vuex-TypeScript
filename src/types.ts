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
  history: Payload[]
}

export interface Payload {
  type: string;
  payload?: any;
}

// Models
export interface Todo {
  text: string,
  checked: boolean
}