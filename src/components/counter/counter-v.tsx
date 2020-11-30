import React, { useMemo } from 'react'
import { CounterButton } from './counter-button'

export interface CounterViewProps {
    count: number
    doubleCount: number
    addTenToCounter: () => void
}

export const CounterView = (props: CounterViewProps) => useMemo(() => (
    <p>
        Page has been open for <code>{props.count}</code> seconds.
        <CounterButton onClick={props.addTenToCounter}>Add Ten to {props.doubleCount}</CounterButton>
    </p>
), [props])