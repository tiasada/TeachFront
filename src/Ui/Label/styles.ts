import styled from 'styled-components'

export type Display = 'inline' | 'block'

type Props = {
  display: Display
}

const Label = styled.label<Props>`
  /* Estamos passando uma função dentro da string,
  que recebe todas as Props definidas,
  o retorno desta func irá ser aplicado ao CSS
  */
  margin-top: 12px;
  margin-bottom: 4px;
  display: ${({ display }) => display};
`

export default Label