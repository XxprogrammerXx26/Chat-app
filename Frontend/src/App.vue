<template>
  <div>
    <div v-for="message in messages" :key="message.id">{{ message.text }}</div>
    <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Escribe un mensaje...">
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: ''
    };
  },
  mounted() {
    // Escuchar mensajes en tiempo real desde el servidor
    this.$socket.on('message', (msg) => {
      this.messages.push(msg);
    });
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.$socket.emit('message', { text: this.newMessage });
        this.newMessage = '';  // Limpiar el campo de mensaje
      }
    }
  }
};
</script>

<style scoped>
/* Estilos para el chat */
input {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
}
</style>
