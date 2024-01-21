import styled from "styled-components";


export const Container = styled.div`
    width:100%;
    height: 100vh;
    background-color: gray;

    display: flex;
    align-items: center;
    justify-content: center;
`;


export const Content = styled.div`
    background: #FFFFFF;
    width: 100%;
    min-height: 350px;
    border-radius: 15px;
    box-shadow: inset;
    border-color: #FFFFFF;
    margin-left: 50px;
    margin-right: 50px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Collumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`