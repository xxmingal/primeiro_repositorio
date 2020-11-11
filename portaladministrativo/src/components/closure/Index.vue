<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <!-- Menu na parte superior demonstrando em qual STEP está -->
      <v-stepper-step :complete="e1 > 1" step="1">
        Fechamento de Caixa
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"> 
        Despesas 
      </v-stepper-step>

      <v-divider></v-divider>

      <!-- <v-stepper-step step="3"> Fotos </v-stepper-step> -->
    </v-stepper-header>

    <v-stepper-items>
      <!-- STEP 1-->
      <v-stepper-content step="1">

        <v-card > 
          <TableInn :despesas="despesas" @despesaMudou="despesas = $event"/>     
        
          
          <div class="mb-16 text-right">
            <v-btn color="primary" @click="e1 = 2"> Despesas </v-btn>
          </div>
        </v-card>
      </v-stepper-content>

      <!-- STEP 2 -->
      <v-stepper-content step="2">

        <v-card >
          <Expenses :despesas="despesas"/>
        </v-card>
        <v-row class="mb-16">
        <v-btn @click="e1 = 1" color="blue-grey lighten-2" class="ml-4"> Voltar </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" class="mr-4" @click="e1 = 1"> Enviar </v-btn>
        </v-row>
      </v-stepper-content>

        <!-- STEP 3 -->
      <!-- <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>

        <v-btn text> Encerrar </v-btn>
      </v-stepper-content> -->
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import TableInn from "./dataTable/TableInn";
import Expenses from "./dataTable/Expenses";

export default {
  name: "Index",
  components:{
    TableInn,
    Expenses,
  },
  data() {
    return {
      e1: 1, 
      despesas: 0,
    };
  },
  
};
</script>

<style>
</style>