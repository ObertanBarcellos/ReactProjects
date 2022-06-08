import styled from 'styled-components';

export const HeaderArea = styled.div`
    margin: 0;
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
            font-size: 32px;
            font-weight: bold;
        }
        .logo-1{ color: #ff0000; }
        .logo-2{ color: #00ff00; }
        .logo-3{ color: #0000ff }
    }

    nav {
        padding-top: 10px;
        padding-bottom: 10px;

        ul, li {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        ul {
            display: flex;
            align-items: center;
            height: 60px;
        }

        li {
            margin-left: 20px;
            margin-right: 20px;

            a, button {
                border: 0;
                background: none;
                cursor: pointer;
                outline: 0;
                color: #000;
                font-size: 16px;
                text-decoration: none;
                font-weight: bold;

                &:hover {
                    color: #555;
                }

                &.button {
                    background-color: #ff8100;
                    border-radius: 6px;
                    color: #fff;
                    padding: 7px 12px;

                    &:hover {
                        background-color: #ff5000;
                    }
                }
            }
        }
    }
`;