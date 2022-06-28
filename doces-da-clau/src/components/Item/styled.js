import styled from 'styled-components';
import img from '../../assets/item-background.png';

export const PageArea = styled.div`
    width: 250px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 14px;
    border-radius: 15px;
    background-image: url(${img});
    transition: 0.2s;
    cursor: pointer;

    &:hover {
        background-color: rgba(45, 45, 45, 0.3);
    }

    .img {
        width: 200px;
        height: 200px;
        img {
            width: 180px;
            height: 180px;
        }
    }

    .about {
        width: 200px;
        height: 100px;
        margin-top: 10px;
        
        .titulo {
            font-size: 20px;
        }

        .textandbutton {
            width: 200px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top: 15px;

            .ttext{
               width: 150px;
               font-size: 15px;
            }

            .button {
                width: 50px;

                button {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: none;
                    background-color: transparent;
                    cursor: pointer;

                    img {
                        width: 30px;
                        height: 30px;
                    }
                   
                }
       
            }
        }
    }
`;