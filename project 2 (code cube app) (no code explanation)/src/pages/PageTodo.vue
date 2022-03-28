<template>
  <q-scroll-area style="height: 700px; max-width: 100%;">
  <q-page class="bg-grey-3 column ">
    <div class="row q-pa-sm bg-primary"
    style="height:50px; width:100%; pos">
       <q-input
        class="col"
        filled
        @keyup.enter="addTask"
        bg-color="white"
        placeholder="Add Task"
        bottom-slots 
        v-model="newTask"
        rounded
        dense>

        <template v-slot:append>
          <q-btn 
          round 
          @click="addTask"
          dense 
          flat icon="add" />
        </template>
      </q-input>
    </div>
    <p class="title center">Tasks On Ground</p>
    
   <div class="q-pa-md" >
    <div class="q-gutter-sm" >
    <q-list class="bg-white list"
     separator
     bordered
    >
      <q-item 
       :key="task.title"
       v-for="(task, index) in tasks"
       :class="{ 'done bg-blue' : task.done}"
       tag="label"
       v-ripple>
        <q-item-section avatar>
          <q-checkbox
           v-model="task.done"
           color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label >{{task.title}}</q-item-label>
        </q-item-section>
         <q-item-section
         v-if="task.done"
         side>
           <q-btn
            @click.stop="deleteTask(index)"
             flat
             dense
             round 
             color="white" 
             icon="fas fa-trash"
             size="sm"
              />
        </q-item-section>
      </q-item>

  
    </q-list>
    </div>
  </div>
  <div 
  v-if="!tasks.length"
  class="no-tasks absolute-center">
    <q-icon
    name="check"
    size="100px"
    color="primary"
    />
    <div class="text-h5 text-primary text-center">
      No Tasks 
      </div>
  </div>
  </q-page>
  </q-scroll-area>
</template>
<style lang="sass">

</style>
<script>
export default {
  data(){
    return{

      tasks:[
       
        
      ]
    }
  },
  methods:{
    deleteTask(index){
        this.$q.dialog({
        title: 'Confirm',
        message: 'Really Delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
         this.tasks.splice(index, 1)
         this.$q.notify('Task Completely done and Deleted')
      })
    },
    addTask(){
      this.tasks.push({
        title: this.newTask,
        done: false
      })
      this.newTask =  ''
    }
  }
}
</script>
<style lang="scss">
.done{
  .q-item__label{
    text-decoration: line-through;
    color:white;
  }
}
.no-tasks{
  opacity:0.5;
}
</style>