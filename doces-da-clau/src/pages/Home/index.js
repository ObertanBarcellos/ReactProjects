import React from "react";
import { PageArea } from "./styled";

import Item from "../../components/Item";

export default () => {
    return (
        <PageArea>
           <div className="home-container">
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