const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = require('./24-taller-04-datos.json');

// Punto 1
app.get('/users/hobby', (req, res) => {
  const { hobby } = req.query;
  if (!hobby) return res.status(400).send('Falta el parámetro hobby');
  const filtered = users.filter(user => user.hobbies.includes(hobby));
  res.json(filtered);
});

// Punto 2
app.get('/users/exists', (req, res) => {
  const { codigo } = req.query;
  if (!codigo) return res.status(400).send('Falta el parámetro codigo');
  const exists = users.some(user => user.codigo === codigo);
  res.json({ exists });
});

// Punto 3
app.get('/users/hobby/count', (req, res) => {
  const { hobby } = req.query;
  if (!hobby) return res.status(400).send('Falta el parámetro hobby');
  const count = users.filter(user => user.hobbies.includes(hobby)).length;
  res.json({ count });
});

// Punto 4
app.get('/users/is-free', (req, res) => {
  const freeUsers = users.filter(user => new Set(user.hobbies).size < 3);
  res.json(freeUsers);
});

// Punto 5
app.post('/users/suggest', (req, res) => {
  const { codigo, hobby } = req.body;
  if (!codigo || !hobby) return res.status(400).send('Faltan parámetros');

  const user = users.find(u => u.codigo === codigo);
  if (!user) return res.status(404).send('Usuario no encontrado');

  const hobbiesSet = new Set(user.hobbies);
  if (hobbiesSet.size >= 3) return res.status(400).send('El usuario ya tiene 3 hobbies');

  if (!hobbiesSet.has(hobby)) {
    user.hobbies.push(hobby);
  }
  res.json({ success: true, hobbies: user.hobbies });
});

// Punto 6
app.post('/users', (req, res) => {
    const { codigo, nombre, hobbies } = req.body;
  
    if (!codigo || !nombre || !Array.isArray(hobbies)) {
      return res.status(400).send('Faltan datos obligatorios');
    }
  
    if (users.some(u => u.codigo === codigo)) {
      return res.status(409).send('El usuario ya existe');
    }
  
    const uniqueHobbies = new Set(hobbies);
    if (uniqueHobbies.size < 2) {
      return res.status(400).send('El usuario debe tener al menos 2 hobbies distintos');
    }
  
    const newUser = { codigo, nombre, hobbies };
    users.push(newUser);
    res.status(201).json({ success: true, user: newUser });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
