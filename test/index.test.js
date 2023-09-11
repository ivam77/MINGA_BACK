// api.test.js
import { expect } from 'chai';
import request from 'supertest';
import app from '../app.js'; // Importar la aplicación Express

// Describir el conjunto de pruebas
describe('API de register', () => {
  // Definir un requerimiento o conjunto de pruebas para agregar una tarea
  describe('POST /api/auth/register', () => {
    it('Debe crear un usuario', async () => {
      const userBody = { 
        email: 'usuario10@gmail.com', 
        photo: 'https://usuario-picture.com',
        password: 'hola1234', 
    };
      const respuesta = await request(app)
        .post('/api/auth/register')
        .send(userBody);
      expect(respuesta.status).to.equal(201);
    });
  });
  describe('POST /api/comments/', () => {
    it('Debe crear un comentario', async () => {
      const userBody = { 
        chapter_id: "64baace109df33964f1f0124",
        user_id: "649994c65a4731ee61ccecc6",
        comment: 'Prueba de testeooo', 
    };
      const respuesta = await request(app)
        .post('/api/comments/')
        .send(userBody);
      expect(respuesta.status).to.equal(201);
    });
  });

});