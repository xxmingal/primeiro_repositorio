<template>
    <!-- Tabela com empresas cadastradas -->
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="id" 
    class="elevation-1 mb-16"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>CADASTRO DE EMPRESAS</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
          <!-- Dialog para adicionar e editar empresas -->
        <v-dialog
          v-model="dialog"
          max-width="800px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Nova
            </v-btn>
          </template>
          <v-card color="blue lighten-5">
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                Dados Gerais
                <v-card outlined class="mb-4 mt-n1">
                <v-row class="ma-1 "> 
                  
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.id"
                      label="ID"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="8"
                  >
                    <v-text-field
                      v-model="editedItem.nome"
                      label="Nome"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.cnpj"
                      label="CNPJ"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.inscricao"
                      label="Inscrição"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="8"
                  >
                    <v-text-field
                      v-model="editedItem.n_fantasia"
                      label="Nome Fantasia"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                </v-card>
                Contatos
                <v-card outlined class="mt-n1 mb-4">
                <v-row class="ma-1">  
                  
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.telefone"
                      label="Telefone"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.email"
                      label="E-mail"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                </v-card>
                Endereço
                <v-card outlined class="mt-n1">
                <v-row class="ma-1">  
                
                  <v-col
                    cols="12"
                    sm="6"
                    md="8"
                  >
                    <v-text-field
                      v-model="editedItem.rua"
                      label="Rua"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.num"
                      label="Nº"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.cep"
                      label="CEP"
                      outlined
                    >
                    </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.bairro"
                      label="Bairro"
                      outlined
                    >
                    </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.cidade"
                      label="Cidade"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.estado"
                      label="UF"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                </v-card>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Salvar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
          <!-- Dialog para excluir empresas cadastradas -->
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Tem certeza que deseja apagar os dados da Empresa?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-toolbar>

    </template>

    <template v-slot:item.actions="{ item }">
      
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    
    
  </v-data-table>
</template>

<script>
export default {
    name: 'Index',
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'ID',
          align: 'start',
          value: 'id',
        },
        { text: 'Razão_social', value: 'nome' },
        { text: 'CNPJ', value: 'cnpj' },
        { text: 'Inscrição', value: 'inscricao' },
        { text: 'Nome_fantasia', value: 'n_fantasia'},
        { text: 'Telefone', value: 'telefone'},
        { text: 'Email', value: 'email' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        nome: '',
        cnpj: '',
        inscricao: '',
        n_fantasia: '',
        telefone: '',
        email: '',
        rua: '',
        num: '',
        cep: '',
        bairro: '',
        cidade: '',
        estado: '',
      },
      defaultItem: {
        id: '',
        nome: '',
        cnpj: '',
        inscricao: '',
        n_fantasia: '',
        telefone: '',
        email: '',
        rua: '',
        num: '',
        cep: '',
        bairro: '',
        cidade: '',
        estado: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nova Empresa' : 'Editar Empresa'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            id: 1,
            nome: 'Top Way Systems',
            cnpj: 123456789,
            inscricao: 2,
            n_fantasia: 'TOPWAY',
            telefone: '(27)9999-9999',
            email: 'top@way.com.br',
            rua: 'Av. Mario Gurgel',
            num: '5353',
            cep: '29140-000',
            bairro: 'São Francisco',
            cidade: 'Cariacica',
            estado: 'ES',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
}
</script>

<style>

</style>