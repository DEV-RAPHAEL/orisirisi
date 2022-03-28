<template>
<q-scroll-area style="height: 500px; max-width: 750px;">
  <div class="q-pa-md row ">
    <div style="width: 100%; justify-between">
      <q-chat-message
        name="me"
        avatar="https://en.gravatar.com/userimage/185157014/dcd37a71c5301026a6344879f466819b.jpeg"
        :text="['hey, how are you?']"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[
          'doing fine, how r you?',
          'I just feel like typing a really, really, REALLY long message to annoy you...'
        ]"
        size="6"
        stamp="4 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="['Did it work?']"
        stamp="1 minutes ago"
        size="8"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name="me"
        avatar="https://en.gravatar.com/userimage/185157014/dcd37a71c5301026a6344879f466819b.jpeg"
        :text="['hey, how are you?']"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="['Did it work?']"
        stamp="1 minutes ago"
        size="8"
        text-color="white"
        bg-color="primary"
      />
       <q-chat-message
        name="me"
        avatar="https://en.gravatar.com/userimage/185157014/dcd37a71c5301026a6344879f466819b.jpeg"
        :text="['hey, how are you?']"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      
    </div>
    </div>
    <div>
    <q-input
    class="input"
    bg-color="" 
    style=""
    rounded
     standout bottom-slots 
     v-model="text" 
     label="Reply or Start a conversation" 
     >
        <template v-slot:append>
          <q-icon color='primary' name="mood" />
        </template>
        <template v-slot:after>
          <q-icon  color='primary' name="send" />
        </template>
        <template v-slot:prepend>
          <q-icon color='primary' name="mic" />
        </template>
        <template v-slot:before>
          <q-icon name="image" />
        </template>
      </q-input>
  </div>
  
  
</q-scroll-area>
</template>

<script>
export default {
  name: 'PageChat'
}
</script>
<style lang="sass">
.input
  width:100%
</style>