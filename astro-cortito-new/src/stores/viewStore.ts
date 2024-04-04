import { atom } from 'nanostores'

export const viewStore = atom(
  typeof window !== 'undefined'
    ? localStorage.getItem('view') || 'list'
    : 'list',
)
