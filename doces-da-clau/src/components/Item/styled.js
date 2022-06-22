import styled from 'styled-components';

export const PageArea = styled.div`
    width: 250px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    margin: 10px;

    .img {
        width: 200px;
        height: 200px;
        border: 1px solid red;
    }

    .about {
        width: 200px;
        height: 100px;
        margin-top: 10px;
        border: 1px solid red;
    }
`;