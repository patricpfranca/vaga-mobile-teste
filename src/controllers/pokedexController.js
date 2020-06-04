import api from '~/services/api';

class PokedexController {
  static async index(limit, offset) {
    try {
      const { data } = await api.get(`pokemon?offset=${offset}&limit=${limit}`);

      return data;
    } catch (err) {
      console.log(err);
    }
  }

  static async pokemonById(id) {
    try {
      const { data } = await api.get(`pokemon/${id}`);

      return data;
    } catch (error) {
      console.log(err);
    }
  }
}

export default PokedexController;
