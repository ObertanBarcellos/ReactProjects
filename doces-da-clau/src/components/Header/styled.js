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
                width: 100px;
                height: 100px;
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
                }

                .icons {
                    margin-left: 12px; 
                    width: 26px;
                    height: 26px;
                }
            }
        }
    }
`;