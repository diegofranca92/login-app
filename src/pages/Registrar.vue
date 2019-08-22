<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-card-section>
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
        <q-input filled v-model="nome" :dense="dense" type="text" label="Nome">
            <template v-slot:prepend>
              <q-icon name="perm_contact_calendar" />
            </template>
          </q-input>
          <q-space />
          <q-input filled v-model="sobrenome" :dense="dense" type="text" label="Sobrenome" />
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
          <q-input v-model="confirmpass" filled :type="isPwd ? 'password' : 'text'" label="Confirme sua Senha">
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
            <q-btn label="Registrar" @click="signUp" type="submit" to="login" color="primary"/>
          </div>
          <p>
            Já possui uma conta ?
            <span>
              <router-link to="login"> Fazer Login</router-link>
            </span>
          </p>
        </q-form>
        </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import firebase from 'firebase'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      senha: '',
      isPwd: true
    }
  },
  methods: {
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.senha).then(
        (user) => {
          this.$router.replace('home')
          alert('Sua conta foi cadastrata com sucesso!')
        },
        (err) => {
          alert('Aconteceu algo inesperado. ' + err.message)
        }
      )
    }
  }
}
</script>
