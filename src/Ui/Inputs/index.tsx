import React from 'react'
import Checkbox from './styles'

type Props = {
    value : boolean
    onChange : () => void

}
const CheckPresence = ({ value, onChange } : Props) => (
    <Checkbox type="checkbox" value={value.toString()} onChange={onChange} />
)

export default CheckPresence
