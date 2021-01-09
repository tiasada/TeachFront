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
