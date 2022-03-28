<template>
  <q-layout view="lHr lpR lfr">

    <q-header reveal elevated primary class="header text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weight-bold">
         <!--  <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar> -->
          <span class="gt-sm">{{$route.name}}</span>
          <q-icon 
             class='q-pa-md lt-md absolute-center'
             name="fas code"
             size='sm'
             color='primary'
      />
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
      <div class="q-px-lg q-pt-md q-mb-md">
      <div class="text-h5">
         Nickname
      </div>
      <div class="text-subtitle">
        {{todaysDate}}
        </br>
        {{todaysTime}}
      </div>
      </div>
    </q-header>

    <q-drawer 
    show-if-above v-model="left"
     bordered
    :width="320"

      >
      <!-- drawer content -->
      <q-icon 
      class='q-pa-md '
      name="fas fa-dove"
      size='lg'
      color='primary'
      />
       <q-list bordered >
      <q-item 
      clickable 
      v-ripple
      to="/"
      exact
      
      >
        <q-item-section avatar>
          <q-icon color="primary" name="home" />
        </q-item-section>

        <q-item-section class='text-h6 text-weight-bold'>Home</q-item-section>
      </q-item>
      
       <q-item
        clickable
         v-ripple
         to="/chat"
         >
        <q-item-section avatar>
          <q-icon color="primary" name="comment" />
        </q-item-section>

        <q-item-section class='text-h6 text-weight-bold'>Chat</q-item-section>
      </q-item>
        
       <q-item 
       clickable
        v-ripple
        to="/todo"
        >
        <q-item-section avatar>
          <q-icon color="primary" name="list" />
        </q-item-section>

        <q-item-section class='text-h6 text-weight-bold' >To Do List</q-item-section>
      </q-item>

      <q-item 
      clickable 
      v-ripple
      to="/projects"
      >
        <q-item-section avatar>
          <q-icon color="primary" name="code" />
        </q-item-section>

        <q-item-section class='text-h6 text-weight-bold'> Project </q-item-section>
      </q-item>

      <q-item
       clickable
        v-ripple
        to="/contacts"
        >
        <q-item-section avatar>
          <q-icon color="primary" name="list" />
        </q-item-section>

        <q-item-section class='text-h6 text-weight-bold' >Contact</q-item-section>
      </q-item>

      <q-item
       clickable 
       v-ripple
       to="/groups"
       >
        <q-item-section avatar>
          <q-icon color="primary" name="group" />
        </q-item-section>

        <q-item-section class='text-h6 text-weight-bold' >Groups</q-item-section>
      </q-item>

       <q-item
        clickable
         v-ripple
         to="/profiles"
         >
        <q-item-section avatar>
          <q-icon color="primary" name="portrait" />
        </q-item-section>

        <q-item-section class='text-h6 text-weight-bold' >Profiles</q-item-section>
      </q-item>

       <q-item 
       clickable 
       v-ripple
       to="/about"
       >
        <q-item-section avatar>
          <q-icon color="primary" name="help" />
        </q-item-section>

        <q-item-section class='text-h6 text-weight-bold' >About</q-item-section>
      </q-item>
    </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="right" 
    
    side="right" bordered >
      <!-- drawer content -->
        <q-input
        placeholder='Search Codecubes Post'
        dense
         outlined
         rounded 
         class="q-ma-md">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>  
        <q-list  
        padding
        separator
        >
      <q-item  class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-primary">Get Insight</q-item-label>
          <q-item-label class='text-weight-bold'>Something awesome cooking</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

       <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-primary">Get Insight</q-item-label>
          <q-item-label class='text-weight-bold'>Something awesome cooking</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>


       <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-primary">Get Insight</q-item-label>
          <q-item-label class='text-weight-bold'>Something awesome cooking</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>


        </q-list>
      
           
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

   <!--  <q-footer hidden elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://en.gravatar.com/userimage/185157014/7017379f5675fe3b33b05eecab6f581d?size=200">
          </q-avatar>
          CodeCube &copy 2021
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

  </q-layout>
</template>

<script>
import { date } from 'quasar'
export default {
  data () {
    return {
      left: false,
      right: false
    }
  },
computed:{
  todaysDate(){
    let timeStamp = Date.now()
    return date.formatDate(timeStamp, 'dddd Do MMMM ')
  },
  todaysTime(){
    let timeStamp = Date.now()
    return date.formatDate(timeStamp, 'h m A ')
  }
}  
}
</script>
<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left:50%
  transform: translate(-50%)
.header
  background-image: url("../statics/bg.png")
  background-opacity:0.2
  height:140px
</style>