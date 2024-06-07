const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('Forms API', () => {
  it('should save a form on /api/forms/save POST', (done) => {
    chai.request(server)
      .post('/api/forms/save')
      .send({
        nome: 'Usuario01',
        email: 'usuario01@teste.com',
        data_nascimento: '1990-01-01',
        descricao: 'Teste 1234',
        cpf: '12345678900',
        pais: 'Brasil',
        estado: 'SP',
        cidade: 'São Paulo',
        arquivos: []
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Formulário salvo com sucesso');
        done();
      });
  });

  it('should fetch forms for a specific user on /api/forms/:userId GET', (done) => {
    chai.request(server)
      .get('/api/forms/testuser')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  it('should update a form on /api/forms/update/:id PUT', (done) => {
    chai.request(server)
      .put('/api/forms/update/testformid')
      .send({
        nome: 'Usuario02',
        email: 'usuario02@teste.com'
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Formulário atualizado com sucesso');
        done();
      });
  });

  it('should delete a form on /api/forms/delete/:id DELETE', (done) => {
    chai.request(server)
      .delete('/api/forms/delete/testformid')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Formulário excluído com sucesso');
        done();
      });
  });
});
