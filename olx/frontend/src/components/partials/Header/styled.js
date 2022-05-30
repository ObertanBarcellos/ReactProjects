import styled from 'styled-components';

export const HeaderArea = styled.div`
    margin: 0;
    background-color: #525252;
    height: 80px;
    border-bottom: 1px solid #2e2e2e;

    .container {
        max-width: 1000px;
        margin: auto;
        display: flex;
    }

    a {
        text-decoration: none;
    }

    .logo {
        flex: 1;
        display: flex;
        align-items: center;
        height: 80px;

        .logo-1, .logo-2, .logo-3 {
            font-size: 47px;
            font-weight: bold;
        }
        .logo-1{ color: #ff0000; }
        .logo-2{ color: #00ff00; }
        .logo-3{ color: #0000ff }
    }
`;