import React from "react";
import { PageArea } from "./styled";
import { Link } from "react-router-dom";

import Item from "../../components/Item";

 function Home () {

    const items = [
        {   
            "name": "Bolo KitKat",
            "description": "Descrição Bolo KitKat", 
            "url": require("../itemsImgs/teste.png") 
        },

        {   
            "name": "Brigadeiro 70% Cacau", 
            "description": "Descrição Brigadeiro 70% Cacau", 
            "url": require("../itemsImgs/Brigadeiro.png") 
        },

        {   
            "name": "Bolo de Casamento", 
            "description": "Descrição Bolo de Casamento",  
            "url": require("../itemsImgs/teste.png") 
        },

        {   
            "name": "Trufas Decoradas", 
            "description": "Descrição Trufas Decoradas",  
            "url": require("../itemsImgs/teste.png") 
        },

        {   
            "name": "Copinho de Chocolate", 
            "description": "Descrição Copinho de Chocolate",   
            "url": require("../itemsImgs/teste.png") 
        },

        {   
            "name": "Bolo de Pasta Americana", 
            "description": "Descrição Bolo de Pasta Americana",  
            "url": require("../itemsImgs/teste.png") 
        },

        {   
            "name": "Bolo de Bis e M&M", 
            "description": "Descrição Bolo de Bis e M&M",  
            "url": require("../itemsImgs/teste.png") 
        },

        {   
            "name": "Bolo Arstistico", 
            "description": "Descrição Bolo Arstistico",  
            "url": require("../itemsImgs/teste.png") 
        },

        {   
            "name": "Doces Modelados de Pasta de Ninho", 
            "description": "Doces Modelados de Pasta de Ninho",  
            "url": require("../itemsImgs/teste.png") 
        },

        {   
            "name": "Bolo de Chocolate", 
            "description": "Bolo com cobertura de Chocolate",   
            "url": require("../itemsImgs/teste.png") 
        }

    ]

    return (
        <PageArea>
           <text className="text-main">Mais Comprados</text>
           <div className="home-container"> 
                <Link to="/cakes/page">
                    <Item url={items[0].url} text={items[0].name} description={items[0].description}/>
                </Link>
                <Item url={items[1].url} text={items[1].name} description={items[1].description}/>
                <Item url={items[2].url} text={items[2].name} description={items[2].description}/>
                <Item url={items[3].url} text={items[3].name} description={items[3].description}/>
                <Item url={items[4].url} text={items[4].name} description={items[4].description}/>
                <Item url={items[5].url} text={items[5].name} description={items[5].description}/>
                <Item url={items[6].url} text={items[6].name} description={items[6].description}/>
                <Item url={items[7].url} text={items[7].name} description={items[7].description}/>
                <Item url={items[8].url} text={items[8].name} description={items[8].description}/>
                <Item url={items[9].url} text={items[9].name} description={items[9].description}/>
           </div>{/* home-container */}
        </PageArea>
    );
}

export default Home;