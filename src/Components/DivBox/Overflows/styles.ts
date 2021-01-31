import styled from 'styled-components'

export const ClassOvFlow = styled.div`
  overflow: auto;
  max-width: 75%;
  min-width: 50%;
  height: 400px;
  border-radius: 40px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`
export const OvFlowSchedule = styled(ClassOvFlow)`
  height: 800px;
  background: #C4C4C4;
  border: 1px solid #000000;
  border-radius: 8px;
  box-sizing: border-box;
`
