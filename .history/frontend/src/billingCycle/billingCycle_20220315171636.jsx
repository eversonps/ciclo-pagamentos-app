import React, {Component} from "react";


import ContentHeader from "../common/template/contentHeader"
import Content from "../common/template/content"

import Tabs from "../common/tab/tabs";
import TabsContent from "../common/tab/tabsContent";
import TabsHeader from "../common/tab/tabsHeader";
import TabHeader from "../common/tab/tabHeader";
import TabContent from "../common/tab/tabContent";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class BillingCycle extends Component{
    render(){
        return (
            <div>
                <ContentHeader title="Ciclo de Pagamentos" small="Cadastro"></ContentHeader>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList"></TabHeader>
                            <TabHeader label="Incluir" icon="plus" target="tabCreate"></TabHeader>
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate"></TabHeader>
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete"></TabHeader>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList"><h1>Lista</h1></TabContent>
                            <TabContent id="tabCreate"><h1>Incluir</h1></TabContent>
                            <TabContent id="tabUpdate"><h1>Alterar</h1></TabContent>
                            <TabContent id="tabDelete"><h1>Excluir</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>            
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({})

export default BillingCycle