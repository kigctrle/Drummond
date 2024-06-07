import React, { useestado, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [form, setForm] = useestado({
    nome: '',
    email: '',
    data_nascimento: '',
    descricao: '',
    cpf: '',
    pais: '',
    estado: '',
    cidade: '',
    arquivos: [],
  });

  const handleChange = (e) => {
    const { nome, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [nome]: value }));
  };

  const handleFileChange = (e) => {
    setForm((prevForm) => ({ ...prevForm, arquivos: [...e.target.arquivos] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/forms/save', form);
      alert(response.data.message);
    } catch (error) {
      alert('Erro ao salvar o formulário');
    }
  };

  const handleEdit = async (id) => {
    try {
      const response = await axios.put(`/api/forms/update/${id}`, form);
      alert(response.data.message);
    } catch (error) {
      alert('Erro ao atualizar o formulário');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/forms/delete/${id}`);
      alert(response.data.message);
    } catch (error) {
      alert('Erro ao deletar Formulário');
    }
  };

  useEffect(() => {
    const savedForm = localStorage.getItem('form');
    if (savedForm) {
      setForm(JSON.parse(savedForm));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('form', JSON.stringify(form));
  }, [form]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Formulário de Cadastro</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Nome:</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Data de Nascimento:</label>
          <input
            type="date"
            name="data_nascimento"
            value={form.data_nascimento}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Descrição:</label>
          <textarea
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">CPF:</label>
          <input
            type="text"
            name="cpf"
            value={form.cpf}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">País:</label>
          <select
            name="pais"
            value={form.pais}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="">Selecione o país</option>
            {/* Preencher com os países */}
          </select>
        </div>
        <div>
          <label className="block">Estado:</label>
          <select
            name="estado"
            value={form.estado}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="">Selecione o estado</option>
            {/* Preencher com os estados */}
          </select>
        </div>
        <div>
          <label className="block">Cidade:</label>
          <select
            name="cidade"
            value={form.cidade}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="">Selecione a cidade</option>
            {/* Preencher com as cidades */}
          </select>
        </div>
        <div>
          <label className="block">Arquivos:</label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default App;
