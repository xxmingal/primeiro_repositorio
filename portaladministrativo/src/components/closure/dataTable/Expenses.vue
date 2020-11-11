<template>
  <v-card class="mb-12 pa-2" color="blue lighten-5" extended>
    <v-row>
      <v-col>
          <!-- Valores do fechamento e registrados -->
        <v-toolbar-title class="ml-4">
          Despesas | Referência - R$ <strong>{{ despesas }}</strong
          ><br />
          Despesas Registradas - R$ <span v-if="despesas >= comparativoDespesa"
            ><strong>{{ comparativoDespesa }}</strong></span
          >
          <span v-else class="red--text"
            ><strong>{{ comparativoDespesa }}</strong></span
          >
        </v-toolbar-title>
      </v-col>
    </v-row>
      <!-- Entrada de dados de despesas -->
    <v-row>
      <v-col sm="2" class="ml-4">
        Tipo Despesa<v-text-field
          label="Tipo"
          outlined
          solo
          v-model="tipo"
        ></v-text-field>
      </v-col>
      <v-col sm="4">
        Descrição<v-text-field
          label="Descrição"
          outlined
          solo
          v-model="desc"
        ></v-text-field>
      </v-col>
      <v-col sm="1">
        R$ Valor<v-text-field
          label="0,00"
          outlined
          solo
          v-model="valorDespesa"
        ></v-text-field>
      </v-col>
      <v-col sm="2">
        Data<v-text-field
          type="date"
          outlined
          solo
          v-model="dataDespesa"
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col align="right" class="mr-4 mt-6">
        <v-btn
          color="success"
          x-large
          dark
          elevation="10"
          @click="adicionarDespesa"
          >Adicionar</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="3" class="mt-n6 ml-4">
        <v-file-input
          label="Anexar Registro"
          type="file"
          @change="getUrlImage($event)"
          filled
          outlined
          solo
          prepend-icon="mdi-camera"
        ></v-file-input>
      </v-col>
    </v-row>
      <!-- Tabela mostrando os dados registradas -->
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="type"
      class="elevation-1 mx-4 mb-4"
    >
      <template v-slot:top>
          <!-- Dialog para editar valores registrados -->
        <v-dialog v-model="dialog" max-width="1000px">
          <v-card color="blue lighten-5">
            <v-card-title>
              <span class="headline">Editar Despesa</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-card class="pa-4" elevation="6">
                  <v-row>
                    <v-col sm="5">
                      <v-text-field
                        v-model="tipo"
                        label="Tipo"
                        outlined
                        class="mx-5 mt-3"
                      ></v-text-field>
                    </v-col>
                    <v-col sm="7">
                      <v-text-field
                        v-model="desc"
                        label="Descrição"
                        outlined
                        class="mx-5 mt-3"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col sm="5">
                      <v-text-field
                        v-model="valorDespesa"
                        label="R$ Valor"
                        outlined
                        class="mx-5 mt-3"
                      ></v-text-field>
                    </v-col>
                    <v-col sm="5">
                      <v-text-field
                        v-model="dataDespesa"
                        label="Data"
                        type="date"
                        outlined
                        class="mx-5 mt-3"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col sm="6" class="ml-6">
                      <v-file-input
                        label="Anexar Registro"
                        type="file"
                        @change="getUrlImage($event)"
                        filled
                        outlined
                        solo
                        prepend-icon="mdi-camera"
                      ></v-file-input>
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
              <v-btn color="blue darken-1" text @click="adicionarDespesa"> Salvar </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
            <!-- Dialog para ecluir dados registrados -->
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Tem certeza que deseja apagar os dados da Despesa?</v-card-title
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
          <!-- Dialog para Visualizar a foto registrada -->
        <v-dialog v-model="dialogFoto" max-width="1000px">
          <v-card>
            <v-card-title class="headline"> Registro Anexado.</v-card-title>
            <v-container>
              <v-row>
                <v-col>
                  <v-img :src="editedIndex.foto"> </v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>

      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="showFoto(item)"> mdi-camera </v-icon>
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "Expenses",
  props: ["despesas"],
  data() {
    return {
      comparativoDespesa: 0,
      desc: "",
      tipo: null,
      valorDespesa: null,
      dataDespesa: null,
      fotoDespesa: null,
      dialog: false,
      dialogDelete: false,
      dialogFoto: false,
      editedIndex: -1,
      desserts: [],
      headers: [
        {
          text: "Tipo Despesa",
          align: "start",
          value: "type",
        },
        { text: "Descrição", value: "descricao" },
        { text: "R$ Valor", value: "valor" },
        { text: "Data", value: "data" },
        { text: "Foto", value: "foto" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      editedItem: {
        type: "",
        descricao: "",
        valor: 0,
        data: "",
        foto: "",
      },
      defaultItem: {
        type: "",
        descricao: "",
        valor: 0,
        data: "",
        foto: "",
      },
      createModel: {
        type: "",
        descricao: "",
        valor: 0,
        data: "",
        foto: "",
      },
    };
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    dialogFoto(val) {
      val || this.closeFoto();
    },
  },
  methods: {
    getUrlImage(file) {
      this.createModel.foto = URL.createObjectURL(file);
    },
    adicionarDespesa() {
      this.editedItem.type = this.tipo;
      this.editedItem.descricao = this.desc;
      this.editedItem.valor = this.valorDespesa;
      this.editedItem.data = this.dataDespesa;
      this.editedItem.foto = this.createModel.foto;
      if (this.tipo == null) {
        alert("Escolha o Tipo!");
      } else if (this.valorDespesa == null) {
        alert("Digite o valor da despesa!!");
      } else if (this.dataDespesa == null) {
        alert("Digite uma data!");
      } else {
        this.save();
      }
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.createModel.foto = this.editedItem.foto;
      this.tipo =  this.editedItem.type;
      this.desc = this.editedItem.descricao;
      this.valorDespesa = this.editedItem.valor;
      this.dataDespesa = this.editedItem.data;
      this.dialog = true;
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.comparativoDespesa = this.getDespesa();
      this.close();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        this.tipo = null;
        this.desc = null;
        this.valorDespesa = null;
        this.dataDespesa = null;
        this.fotoDespesa = null;
        this.createModel.foto = null;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        this.comparativoDespesa = this.getDespesa();
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
    showFoto(item) {
      this.editedIndex = item;
      this.dialogFoto = true;
    },
    closeFoto() {
      this.dialogFoto = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    getDespesa() {
      return this.desserts.reduce(
        (total, elemento) => (total += parseInt(elemento.valor)),
        0
      );
    },
  },
};
</script>

<style>
</style>