import React, { useCallback, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import type { CounterViewProps } from './counter-v'
import type { CounterProps } from './index'
import { countState, doubleCountState } from '../../models/count'
import { addTwo, addTen } from "../../utils/math";

export const CounterViewModel = (props: CounterProps): CounterViewProps => {
    const [count, setCount] = useRecoilState(countState)
    const doubleCount = useRecoilValue(doubleCountState)
    
    useEffect(() => {
      if (!props.initialCountValue) return
      setCount(props.initialCountValue)
    }, [])

    useEffect(() => {
      const timer = setInterval(() => setCount(addTwo), 1000);
      return () => clearInterval(timer);
    }, [])

    const addTenToCounter = useCallback(() => setCount(addTen), [])

    return { count, doubleCount, addTenToCounter }
}