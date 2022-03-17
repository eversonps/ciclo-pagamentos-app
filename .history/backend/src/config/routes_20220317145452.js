const express = require("express")
const auth = require("./auth")

module.exports = function(server){

    // Definindo URL base para as outras rotas
    const router = express.Router()
    server.use("/api", router)

    // Rotas de ciclo de pagamento
    const billingCycle = require("../api/billingCycle/billingCycleService")
    billingCycle.register(router, "/billingCycles")
}