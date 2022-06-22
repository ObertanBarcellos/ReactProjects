import styled from 'styled-components';

export const PageArea = styled.div`
    width: 100%;
    height: 100px;
    background-color: #191b21;
    display: flex;
    justify-content: center;

    .menu-container {
        width: 80%;
        height: 100px;
        border: 1px solid red;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .logo {
            width: 100px;
            height: 100px;
            border: 1px solid blue;
        }

        .menu-icons {
            width: 300px;
            height: 100px;
            border: 1px solid blue;
        }
    }
`;