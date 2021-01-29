import React from 'react'
import SearchBarMatters from './styles'
import { Colors, colors } from '/theme/colors'

type Props = {
    color: Colors
  }

const Search = ({color}: Props) => {
    return( 
    <SearchBarMatters placeholder="Search..." color={colors[color]} type="text" />
    )
}

export default Search
