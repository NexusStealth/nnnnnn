 // routes/index.js

const express = require('express');
const router = express.Router();

// Rota para a página inicial
router.get('/', (req, res) => {
  res.render('index', { title: 'Página Inicial' });
});

// Rota para uma página sobre
router.get('/sobre', (req, res) => {
  res.render('sobre', { title: 'Sobre' });
});

// Rota para uma página sobre
router.get('/criarumsite', (req, res) => {
  res.render('criarumsite', { title: '/criarumsite' });
});

// Rota para uma página sobre
router.get('/criarumapp', (req, res) => {
  res.render('criarumapp', { title: '/criarumapp' });
});

// Rota para uma página para fazer o desbloqueio de um celln
router.get('/desbloquear-um-cell-perdido', (req, res) => {
  res.render('desbloquear-um-cell-perdido', { title: '/desbloquear-um-cell-perdido' });
});

// Rota para uma página para comprar um servidor local da dell
router.get('/comprar-um-serverlocal-dell', (req, res) => {
  res.render('comprar-um-serverlocal-dell', { title: '/comprar-um-serverlocal-dell' });
});

// Rota para uma página para abrir a pagina de imei-roubd
router.get('/imei-roubd', (req, res) => {
  res.render('imei-roubd', { title: '/imei-roubd' });
});

// Rota para uma página para abrir a pagina de imei-roubd
router.get('/acess-rdprivated', (req, res) => {
  res.render('acess-rdprivated', { title: '/acess-rdprivated' });
});

// Rota para uma página para abrir a pagina de cnpj falso
router.get('/cnpj-falso', (req, res) => {
  res.render('cnpj-falso', { title: '/cnpj-falso' });
});

// Rota para uma página para abrir a pagina de cnpj falso
router.get('/cpf-falso', (req, res) => {
  res.render('cpf-falso', { title: '/cpf-falso' });
});

// Rota para uma página para abrir a pagina de cnpj falso
router.get('/sobre-o-site', (req, res) => {
  res.render('sobre-o-site', { title: '/sobre-o-site' });
});

// Rota para uma página para abrir a pagina de idiomas
router.get('/idiomas', (req, res) => {
  res.render('idiomas', { title: '/idiomas' });
});

module.exports = router;

