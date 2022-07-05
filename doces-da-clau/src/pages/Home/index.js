import React from "react";
import { PageArea } from "./styled";

import Item from "../../components/Item";

 function Home () {

    const items = [
        { "name": "Bolo KitKat", "description": "Descrição Bolo KitKat", "url": require("./teste.png") },
        { "name": "Brigadeiro", "description": "Descrição Brigadeiro", "url": require("./Brigadeiro.png") }

    ]

    return (
        <PageArea>
           <text className="text-main">Mais Comprados</text>
           <div className="home-container"> 
                <Item url={items[0].url} text={items[0].name} description={items[0].description}/>
                <Item url={items[1].url} text={items[1].name} description={items[1].description}/>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
           </div>{/* home-container */}
        </PageArea>
    );
}

export default Home;