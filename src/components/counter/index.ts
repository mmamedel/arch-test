import * as R from 'ramda'
import { CounterView } from './counter-v'
import { CounterViewModel } from './counter-vm'

export interface CounterProps {
    initialCountValue?: number
}

export const Counter = (props: CounterProps) => CounterView(CounterViewModel(props))