import styled from 'styled-components'


export const ClassOvFlow = styled.div`
    overflow: auto;
    max-width: 75%;
    min-width: 50%;
    height: 500px;
    margin-left: auto;
    margin-right: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
`
export const OvFlowSchedule = styled(ClassOvFlow)`
	position: absolute;
	width: 1083px;
	height: 615px;
	left: 170px;
	top: 367px;

	background: #C4C4C4;
	border: 1px solid #000000;
	box-sizing: border-box;
`
