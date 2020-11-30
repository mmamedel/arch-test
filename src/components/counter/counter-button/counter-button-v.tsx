import React from 'react'

interface CounterButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {}

export const CounterButtonView = (props: CounterButtonProps) => React.useMemo(() => (
    <button {...props}></button>
), [props])