<template>
  <div>
    <h1 class="centralizado">{{ title }}</h1>
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
    <input type="search" @input="filtro = $event.target.value" class="filtro" placeholder="Filtre pelo título">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva
            v-transformer:scale.animate.reverse="1.2"
            :url="foto.url"
            :titulo="foto.titulo"
          />
          <botao
            tipo="button"
            rotulo="REMOVER"
            @activeButton="remove(foto)"
            :confirmacao="true"
            estilo="perigo"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
    import FotoService from "../../domain/foto/FotoService";
    import Painel from '../shared/painel/Painel';
    import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva";
    import Botao from '../shared/botao/Botao.vue';
    export default {

        components : {
            'meu-painel' : Painel,
            'imagem-responsiva' : ImagemResponsiva,
            'botao' : Botao
        },
        data () {
            return {
                title : 'AluraPic',
                fotos : [],
                filtro : '',
                mensagem : ''
            }
        },
        computed : {
            fotosComFiltro () {
                if (this.filtro) {
                    let exp = new RegExp(this.filtro.trim(), 'i');
                    return this.fotos.filter(foto => exp.test(foto.titulo));
                }

                return this.fotos;
            }
        },

        methods : {
            remove(foto) {
                this.service
                    .apaga(foto._id)
                    .then(() => {
                        let indice = this.fotos.indexOf(foto);
                        this.fotos.splice(indice,1);
                        this.mensagem = 'Foto removida com sucesso', err => {
                            console.log(err);
                            this.mensagem = 'Nao foi possivel remover a foto';
                        }
                    })
            }
        },

        created() {

            this.service = new FotoService(this.$resource);
            this.service
                .lista()
                .then(fotos => this.fotos = fotos);
        }
    }
</script>

<style>

  .centralizado {
    text-align: center;
  }

  .lista-fotos-item {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    width: 100%;
    display: block;
  }

</style>
