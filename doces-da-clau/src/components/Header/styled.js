import styled from 'styled-components';

export const PageArea = styled.div`
    width: 100%;
    height: 100px;
    background-color: rgb(35,35,55);
    display: flex;
    justify-content: center;

    .menu-container {
        width: 80%;
        height: 100px;
        
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .logo {
            width: 100px;
            height: 100px;
            
            img{
                margin-top: 10px;
                width: 80px;
                height: 80px;
                cursor: pointer;
            }
        }

        .menu-icons {
            width: 300px;
            height: 100px;
            

            form {
                width: 100%;
                height: 100%;
                color: white;
                align-items: center;
                justify-content: space-between;
                display: flex;
                
                div {
                    width: 50px;
                    height: 50px;
                    cursor: pointer;
                    align-items: center;
                    justify-content: space-between;
                    display: flex;
                    border-radius: 50%;
                    transition: 0.4s;

                    img{
                        width: 36px;
                        height: 36px; 
                        margin-left: 10px;
                        margin-top: 2px;
                    }

                    &:hover { 
                        transform: translateY(-10px);
                    }
                }

                .icons {
                    margin-left: 12px; 
                    width: 26px;
                    height: 26px;
                    color: #fff;
                }
            }
        }
    }
`;