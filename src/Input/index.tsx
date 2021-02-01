import React from 'react'

type Props = {
  type: string
  name: string
  placeholder?: string
  value: string | number
  onChange:((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
}

const Input = ({ type, name, placeholder, value, onChange }: Props) => {
  return (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />)
}
export default Input
