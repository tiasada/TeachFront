import React from 'react'
import SearchBarMatters from './styles'
import { Colors, colors } from '/theme/colors'

type Props = {
    color: Colors
    placeholder: string
  }

const Search = ({ color, placeholder }: Props) => {
  return (
    <SearchBarMatters placeholder={placeholder} color={colors[color]} type="text" />
  )
}

export default Search
