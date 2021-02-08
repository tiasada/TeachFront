import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchBarMatters, { DivSearch } from './styles'
import { Colors, colors } from '/theme/colors'

type Props = {
  color: Colors
  placeholder: string
  value?: string | number | readonly string[]
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onClick: (() => void)
}

const Search = ({ color, placeholder, value, onChange, onClick }: Props) => {
  return (
    <DivSearch>
      <SearchBarMatters
        placeholder={placeholder}
        color={colors[color]}
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={event => {
          if (event.key === 'Enter') { onClick() }
        }}
      />
      <FontAwesomeIcon
        onClick={onClick}
        icon={faSearch}
        color={colors.primary}
      />
    </DivSearch>
  )
}

export default Search
