import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('Renderiza o formulário', () => {
  render(<App />);
  expect(screen.getByText(/Formulário de Cadastro/i)).toBeInTheDocument();
});

test('Permite que o usuário preencha o formulário', () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText(/Nome/i), {
    target: { value: 'Usuario01' },
  });

  fireEvent.change(screen.getByLabelText(/Email/i), {
    target: { value: 'usuario01@teste.com' },
  });

  fireEvent.change(screen.getByLabelText(/Data de Nascimento/i), {
    target: { value: '1990-01-01' },
  });

  fireEvent.change(screen.getByLabelText(/Descrição/i), {
    target: { value: 'teste 12342' },
  });

  fireEvent.change(screen.getByLabelText(/CPF/i), {
    target: { value: '12345678900' },
  });

  fireEvent.change(screen.getByLabelText(/País/i), {
    target: { value: 'Brasil' },
  });

  fireEvent.change(screen.getByLabelText(/Estado/i), {
    target: { value: 'SP' },
  });

  fireEvent.change(screen.getByLabelText(/Cidade/i), {
    target: { value: 'São Paulo' },
  });

  fireEvent.change(screen.getByLabelText(/Arquivos/i), {
    target: { files: [] },
  });

  expect(screen.getByDisplayValue(/Usuario 01/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/usuario01@teste.com/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/1990-01-01/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/teste 12342/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/12345678900/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/Brasil/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/SP/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/São Paulo/i)).toBeInTheDocument();
});
