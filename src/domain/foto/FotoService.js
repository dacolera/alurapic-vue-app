export default class FotoService {
  constructor(resource) {
    this._resource = resource('v1/fotos{/id}');
  }

  lista() {
    return this._resource
      .query()
      .then(res => res.json());
  }

  busca(id) {
    return this._resource
      .get({ id })
      .then(res => res.json());
  }

  grava(foto) {

    if (foto._id) {
      return this._resource
        .update({ id : foto._id}, foto);
    }

    return this._resource
      .save(foto);
  }

  apaga(id) {
    return this._resource
      .delete({ id });
  }

  edita(id) {
    return this._resource
      .edit({ id });
  }

}
