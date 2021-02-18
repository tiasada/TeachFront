import styled from 'styled-components'
import { colors } from '/theme/colors'

const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    margin-top: 5px;
    background: ${colors.primary};

    &:checked {
        background-color: ${colors.primary};
    }
`
export default Checkbox
