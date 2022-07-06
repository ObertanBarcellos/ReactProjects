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
        align-items: center;
        margin-top: 30px;

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
            margin-top: 35px;
        }

        .clau-function, .clau-contact {
            text-align: left;
            font-style: italic;
            font-size: 15px;
        }

        .developer-name {
            font-weight: bold;
            font-size: 20px;
            text-align: Right;
            margin-top: 35px;
        }

        .developer-function, .developer-contact {
            text-align: Right;
            font-style: italic;
            font-size: 15px;
        }
    }
`;