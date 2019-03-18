class View {

    constructor(elemento) {

          this._elemento = elemento;
    }

    template(model){
        
        throw new Error('Template must be implemmented!');
    }

    update(model) {

        this._elemento.innerHTML = this.template(model);
    }
}