const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Listagem de Vinhos')
})

module.exports = router;