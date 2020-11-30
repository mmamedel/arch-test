import { atom, selector } from 'recoil'
import { double } from '../utils/math'

export const countState = atom({
  key: 'countState',
  default: 0
})

export const doubleCountState = selector({
  key: 'doubleCountState',
  get: ({get}) => {
    const count = get(countState)
    return double(count)
  }
})