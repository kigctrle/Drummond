const express = require('express');
const router = express.Router();
const admin = require('../config');

// Save form data
router.post('/save', async (req, res) => {
  const data = req.body;
  try {
    const db = admin.firestore();
    await db.collection('forms').add(data);
    res.status(200).send({ message: 'Formulário salvo com sucesso' });
  } catch (error) {
    res.status(500).send({ error: 'Erro ao salvar os dados do formulário' });
  }
});

// Fetch form data for a specific user
router.get('/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const db = admin.firestore();
    const snapshot = await db.collection('forms').where('userId', '==', userId).get();
    if (snapshot.empty) {
      res.status(404).send({ message: 'Nenhum documento correspondente encontrado.' });
      return;
    }
    const forms = [];
    snapshot.forEach(doc => {
      forms.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).send(forms);
  } catch (error) {
    res.status(500).send({ error: 'Erro ao buscar os dados do formulário' });
  }
});

// Update form data
router.put('/update/:id', async (req, res) => {
  const formId = req.params.id;
  const data = req.body;
  try {
    const db = admin.firestore();
    await db.collection('forms').doc(formId).set(data, { merge: true });
    res.status(200).send({ message: 'Formulário atualizado com sucesso' });
  } catch (error) {
    res.status(500).send({ error: 'Erro ao atualizar os dados do formulário' });
  }
});

// Delete form data
router.delete('/delete/:id', async (req, res) => {
  const formId = req.params.id;
  try {
    const db = admin.firestore();
    await db.collection('forms').doc(formId).delete();
    res.status(200).send({ message: 'Formulário excluído com sucesso' });
  } catch (error) {
    res.status(500).send({ error: 'Erro ao excluir os dados do formulário' });
  }
});

module.exports = router;
