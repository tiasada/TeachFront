import React from 'react'
import Checkbox from './styles'

const CheckPresence : React.FC = ({ children }) => (
    <Checkbox type="checkbox">{ children}</Checkbox>
)

export default CheckPresence