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
