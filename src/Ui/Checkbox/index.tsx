import React from 'react'
import Checkbox from './styles'

type Props = {
    value : boolean
    onChange : () => void

}
const CheckPresence = ({ value, onChange } : Props) => (
    <Checkbox type="checkbox" checked={value} onChange={onChange} />
)

export default CheckPresence
