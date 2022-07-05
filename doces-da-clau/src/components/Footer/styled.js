import styled from 'styled-components';

export const PageArea = styled.div`
    width: 98%;
    height: 120px;
    display: flex;
    flex-direction: row;
    margin-left: 15px;

    .footer-container{
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        .docesdaclau{
            width: 25%;
            height: 100px;
        }

        .logo {
            width: 100px;
            height: 100px;
            img {
                width: 100px;
                height: 100px;
            }
        }

        .developer{
            width: 25%;
            height: 100px;
        }

        .clau-name {
            font-weight: bold;
            font-size: 20px;
            text-align: left;
        }
        .developer-name {
            font-weight: bold;
            font-size: 20px;
            text-align: Right;
        }
    }
`;