<template>
  <button @click="sendEvent()" class="botao" :class="estiloDoBotao" :type="tipo">{{ rotulo }}</button>
</template>

<script>
  export  default  {

      props : {
          tipo : {
              required : true,
              type : String
          },
          rotulo : {
              required : true,
              type : String
          },
          confirmacao : Boolean,
          estilo : String
      },

      methods : {
          sendEvent() {
              if (this.confirmacao) {
                  if (confirm('Confirma Operação ?')) {
                      this.$emit('activeButton');
                  }

                  return;
              }

              this.$emit('activeButton');
          }
      },
      computed : {
          estiloDoBotao() {
              switch (this.estilo) {
                  case 'padrao' : return 'botao-padrao';
                  case 'perigo' : return 'botao-perigo';
                  default : return 'botao-padrao';
              }
          }
      }
  }

</script>

<style scoped>

  .botao {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
  }

  .botao-perigo {
    background: firebrick;
    color: white;
  }

  .botao-padrao {
    background: darkcyan;
    color: white;
  }

</style>
