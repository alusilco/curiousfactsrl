import { describe, it, beforeEach, afterEach } from 'node:test';
import { JSDOM } from 'jsdom';
import { strict as assert } from 'assert';

import { fetchData } from '../javascript/buttons';

describe('fetchData', () => {
  let fetchStub;
  let getElementByIdStub;
  let document;

  beforeEach(() => {
    fetchStub = async () => ({
      json: async () => ({
        text: 'Este es un ejemplo de texto de prueba',
      }),
    });

    getElementByIdStub = () => ({
      innerText: '',
    });

    global.fetch = fetchStub;

    // Crea un objeto de documento JSDOM para simular el entorno del navegador
    const dom = new JSDOM('<!DOCTYPE html><div id="data"></div>');
    document = dom.window.document;

    // Asigna el objeto de documento JSDOM a global.document
    global.document = document;
  });

  afterEach(() => {
    delete global.fetch;
    delete global.document;
  });

  it('debería actualizar el texto en el elemento "data"', async () => {
    await fetchData();

    assert.strictEqual(global.fetch, fetchStub);
    assert.strictEqual(global.document.getElementById, getElementByIdStub);
    assert.strictEqual(global.document.getElementById('data').innerText, 'Este es un ejemplo de texto de prueba');
  });

  it('debería agregar el texto al arreglo addFavorites', async () => {
    const addFavorites = [];

    await fetchData(addFavorites);

    assert.strictEqual(addFavorites.includes('Este es un ejemplo de texto de prueba'), true);
  });
});
