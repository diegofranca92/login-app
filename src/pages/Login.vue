<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-card-section>
         <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <q-input filled v-model="email" :dense="dense" type="email" label="Email">
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
          <q-input v-model="senha" filled :type="isPwd ? 'password' : 'text'" label="Senha">
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div>
            <q-btn label="Login" @click="login" type="submit" to="home" color="primary"/>
          </div>
          <p>
            Ainda não possui uma conta ?
            <span>
              <router-link to="registrar"> Cria uma conta</router-link>
            </span>
          </p>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
// import firebase from 'firebase'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      senha: '',
      isPwd: true
    }
  }
  // methods: {
  //   login: function () {
  //     firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(
  //       (user) => {
  //         this.$router.replace('home')
  //         alert(`Bem Vindo, ${{ email }}`)
  //       },
  //       (err) => {
  //         alert('Não foi possível realizar o login. ' + err.message)
  //       }
  //     )
  //   }
  // }
}
</script>
