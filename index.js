const express = require('express')
const app = express()
const bp = require ('body-parser');
const cors = require('cors')
const alamat = require('./route/AlamatRoute');
const kategori = require('./route/KategoriRoute');
const user = require('./route/UserRoute');
const produk = require('./route/ProdukRoute');
const detail = require('./route/DetailPesanan');
const pesanan = require('./route/PesananRoute')
const register = require('./route/RegisterRoute')
const caraousell = require('./route/CarousellRoute')
const auth = require('./midleware/auth')
const mongoDbConnection = require ('./db/mongoDB.js');

mongoDbConnection()
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors())


// Route
// app.use(auth)

app.use(register)
app.use(alamat)
app.use(kategori)
app.use(user)
app.use(produk)
app.use(detail)
app.use(pesanan)
app.use(caraousell)


app.get('/', (req, res, next) => {
    res.send('Hello World')
})
app.listen(3000)