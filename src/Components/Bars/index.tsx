import React from 'react'
import SearchBarMatters from './styles'
import { Colors, colors } from '/theme/colors'

type Props = {
  color: Colors
  placeholder: string
  value?: string | number | readonly string[]
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  }

const Search = ({ color, placeholder, value, onChange }: Props) => {
  return (
    <SearchBarMatters
    placeholder={placeholder}
    color={colors[color]}
    type="text"
    value={value}
    onChange={onChange}
    />
  )
}

export default Search
