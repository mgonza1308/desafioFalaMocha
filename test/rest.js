const axios = require('axios');
const {expect, assert} = require('chai')
const url = 'https://api.chucknorris.io/jokes/random'

describe('Random', async function() {
    it('Confirm Value', async function() {
      const response = await axios.get(url);
      console.log(response);
      expect(response.data.value).to.equal(response.data.value);
    });

    it('Confirm 200 status', async function() {
      const response = await axios.get(url);
      expect(response.status).to.equal(200);
    });

    it('Confirm not 500 status', async function() {
      const response = await axios.get(url);
      assert.notEqual(response.status, 500)
    });

    it('Confirm statusMessage', async function() {
      const response = await axios.get(url);
      assert.notEqual(response.data.statusMessage,'OK')
    });
  });


