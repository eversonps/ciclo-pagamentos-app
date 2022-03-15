import React, {Component} from "react";

import ContentHeader from "../common/template/contentHeader"
import Content from "../common/template/content"

import Tabs from "../common/tab/tabs";
import tabsHeader from "../common/tab/tabsHeader";
import tabsContent from "../common/tab/tabsContent";
import TabsHeader from "../common/tab/tabsHeader";

class BillingCycle extends Component{
    render(){
        return (
            <div>
                <ContentHeader title="Ciclo de Pagamentos" small="Cadastro"></ContentHeader>
                <Content>
                    <Tabs>
                        <TabsHeader></TabsHeader>
                        <TabsContent></TabsContent>
                    </Tabs>
                </Content>            
            </div>
        )
    }
}

export default BillingCycle