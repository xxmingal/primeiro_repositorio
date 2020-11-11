<template>
  <v-card class="mb-12 pa-2" color="blue lighten-5" extended>
    <v-toolbar-title class="ml-4">Fechamento de Caixa</v-toolbar-title>
     <!-- Entrada de Dados -->
    <v-row>
      <v-col sm="2" class="ml-4">
        Tipo
        <v-autocomplete
          v-model="value"
          :items="itemTipo"
          outlined
          solo
        ></v-autocomplete>
      </v-col>
      <v-col sm="2" class="ml-4">
        Movimentação
        <v-autocomplete
          v-model="move"
          :items="tipoMovimentacao(value)"
          outlined
          solo
        ></v-autocomplete>
      </v-col>
      <v-col sm="1">
        R$ Valor<v-text-field
          label="0,00"
          outlined
          solo
          v-model="num"
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col sm="1" class="mr-10 mt-5">
        <v-btn
          color="success"
          x-large
          dark
          elevation="3"
          @click="adicionarMovimentacao"
          >Adicionar</v-btn
        >
      </v-col>
    </v-row>
     <!-- Tabela mostrando os dados inseridos -->
    <v-row>
      <v-col>
        <p class="ml-4 mb-n1">Entrada</p>
        <v-data-table
          :headers="headers"
          :items="desserts"
          sort-by="tipo"
          class="elevation-3 mx-4"
        >
          <template v-slot:top>
             <!-- Dialog para editar valor adicionado -->
            <v-dialog v-model="dialog" max-width="400px">
              <v-card color="blue lighten-5" elevation="6"> 
                <v-card-title>
                  <span class="headline">Editar Valor</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-card>
                      <v-row>
                        <v-col>
                          <v-text-field
                            v-model="editedItem.valor"
                            label="R$ Valor"
                            outlined
                            class="mx-5 mt-3"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancelar
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save">
                    Salvar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
              <!-- Dialog para excluir dados inseridos -->
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline"
                  >Tem certeza que deseja apagar os dados do
                  Fechamento?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancelar</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>

          <template v-slot: item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
        </v-data-table>
          <!-- Resultado das somas dos valores na parte de baixo -->
        <v-row class="mt-4 ml-4"> 
          <v-col sm="2" class="text-h5">
            Venda Total<br>
             R$<v-card-field class="ml-2"><strong>{{ vendaTotal }}</strong></v-card-field>
          </v-col>
          <v-col sm="2" class="text-h5">
            Despesas<br>
            R$<v-card-field class="ml-2"><strong>{{ despesas }}</strong></v-card-field>
          </v-col>
          <v-col sm="2" class="text-h5">
            Valor Depósito<br>
            R$<v-card-field class="ml-2"><strong>{{ valorDeposito }}</strong></v-card-field>
          </v-col>
          <v-col sm="2" class="text-h5">
            Valor Líquido<br>
            R$<v-card-field class="ml-2">
              <span v-if="valorLiquido < 0" class="red--text"><strong>{{ valorLiquido }}</strong></span>
              <span v-else><strong>{{ valorLiquido }}</strong></span>
            </v-card-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "TableInn",
  props: ["despesas"],
  data() {
    return {
      filtrado: false,
      //desc: [],
      vendaTotal: 0,
      valorDeposito: 0,
      valorLiquido: 0,
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      desserts: [],
      itemTipo: ["ENTRADA", "SAÍDA"],
      movimentacaoSaida: ["DEPÓSITO", "DESPESA"],
      movimentacaoEntrada: [
        "CARTÃO CRÉDITO",
        "CARTÃO DÉBITO",
        "CONVÊNIO",
        "DINHEIRO",
        "TROCO",
      ],
      headers: [
        {
          text: "Tipo",
          align: "start",
          value: "tipo",
        },
        { text: "Descrição", value: "descricao" },
        { text: "R$ Valor", value: "valor" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      editedItem: {
        tipo: "",
        descricao: "",
        valor: "",
      },
      defaultItem: {
        tipo: "",
        descricao: "",
        valor: "",
      },
      value: null,
      move: null,
      num: null,
    };
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  methods: {
    adicionarMovimentacao() {
      this.editedItem.descricao = this.move;
      this.editedItem.tipo = this.value;
      this.editedItem.valor = this.num;
      if (this.value == null) {
        alert("Escolha o Tipo!");
      } else if (this.move == null) {
        alert("Escolha a Movimentação!");
      } else if(this.num == null){
        alert("Digite um valor!");
      }else if(this.filtro(this.move)){
        this.filtrado = false
        alert("Movimentação já cadastrada!")
      }else{
        this.save();
      }
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.num = this.editedItem.valor
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.vendaTotal = this.getTotal();
      this.despesas = this.getDespesas();
      this.$emit('despesaMudou', this.despesas);
      this.valorDeposito = this.getDeposito();
      this.valorLiquido = this.vendaTotal - this.despesas;
      this.close();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        this.move = null;
        this.num = null;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        this.vendaTotal = this.getTotal();
        this.despesas = this.getDespesas();
        this.$emit('despesaMudou', this.despesas);
        this.valorDeposito = this.getDeposito();
        this.valorLiquido = this.vendaTotal - this.despesas;
      });
    },
    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    tipoMovimentacao(v) {
      if (v === "ENTRADA") {
        return this.movimentacaoEntrada;
      } else if (v === "SAÍDA") {
        return this.movimentacaoSaida;
      }
    },
    getTotal(){
      return this.desserts.filter(elemento => elemento.tipo === "ENTRADA").reduce((total, elemento) => total += parseInt(elemento.valor), 0)
    },
    getDespesas(){
      return this.desserts.filter(elemento => (elemento.tipo === "SAÍDA") && (elemento.descricao === "DESPESA")).reduce((total, elemento) => total += parseInt(elemento.valor), 0)
    },
    getDeposito(){
      return this.desserts.filter(elemento => (elemento.tipo === "SAÍDA") && (elemento.descricao === "DEPÓSITO")).reduce((total, elemento) => total += parseInt(elemento.valor), 0)
    },
    filtro(m){
      let aux = this.desserts.map(function(item){ return item.descricao })
      for(let i = 0; i <= aux.length; i++){
        if(m === aux[i]){
          this.filtrado = true
        }
      }
      aux = null
      return this.filtrado
    },

  },
};
</script>

<style>
</style>