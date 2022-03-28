<template>
  <q-page class="relative-position">
     <q-scroll-area class="absolute fullscreen">
    <div class="q-py-lg q-px-md row items-end
    q-col-gutter-lg">
      <div class="col">
         <q-input 
       
       class="post_content"
       v-model="new_post_content" 
       label="What's Up?" 
       maxlength="1000" 
       bottom-slots
       counter  
       autogrow
       >
        <template v-slot:before>
          <q-avatar>
            <img src="https://en.gravatar.com/userimage/185157014/dcd37a71c5301026a6344879f466819b.jpeg">
          </q-avatar>
        </template>

        <template v-slot:after>
            
        </template>
      </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn 
            class='q-mb-lg'
            @click="addNewpost"
            unelevated 
            :disable='!new_post_content'
            rounded 
            no-caps
            color="primary" label="post" />
      </div>
    </div>
    <q-separator
     size="10px"
    color="grey-4"
    class="divider"  
       />


     <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slower"
          leave-active-class="animated fadeOut slower"
          >
          <q-item class=" post q-py-md"
      v-for= 'post in posts'
      :key='post.date'

      >
        
        <q-item-section avatar top>
          <q-avatar>
            <img src="https://en.gravatar.com/userimage/185157014/dcd37a71c5301026a6344879f466819b.jpeg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtiltle1">
             <strong>Ajayi Raphael Temitope </strong>
              <span class="text-grey-7"> @C.E.O</span>
              <br class="lt-md"> &bull;  {{post.date | relativeDate}}
              </q-item-label>
          <q-item-label class="post_content text-body1">
           {{post.content}}
          </q-item-label>
          <div class="post-icon row justify-between q-mt-sm">
            <q-btn 
            flat
             round 
             color="grey" 
             icon="far fa-comment"
             size="sm"
              />

              <q-btn 
            flat
             round 
             color="grey" 
             icon="fas fa-share"
             size="sm"
              />

              <q-btn 
            flat
             round 
             color="grey" 
             icon="far fa-heart"
             size="sm"
              />

              <q-btn
            @click="deletepost(post)"
             flat
             round 
             color="grey" 
             icon="fas fa-trash"
             size="sm"
              />
          </div>
        </q-item-section>

        
          </q-item>
       </transition-group>
     </q-list>
     </q-scroll-area>
       
  </q-page>
</template>

<script>
import db from 'src/boot/firebase.js'
import { formatDistance } from 'date-fns'

export default {
  name: 'PageHome',
  data(){
    return{
    
      new_post_content:'',
      posts:[
      /*   {
          content: 'Lorem ipsum or lipsum as it is sometimes know is dummy text used in laying out print graphic or web designs.  The passage is attributed to an unknown typesetter in the 15th.',
          date: 1621199454016
        },
        {
          content: 'Lorem ipsum or lipsum as it is sometimes know is dummy text used in laying out print graphic or web designs.  The passage is attributed to an unknown typesetter in the 15th.',
          date: 1621199572742
        }, */
      ]
    }
  },
  
    methods:  {
      addNewpost()  {
        let Newpost = {
          content: this.new_post_content,
          date: Date.now()
          }
          this.posts.unshift(Newpost)
          this.new_post_content = ''
      },

    mounted(){
      db.collection('posts').onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
                console.log('Newpost: ', change.doc.data());
            }
            if (change.type === 'modified') {
                console.log('Modified post: ', change.doc.data());
            }
            if (change.type === 'removed') {
                console.log('Removed post: ', change.doc.data());
            }
        });
    });
    },
      deletepost(post){
     
      let dateToDelete = post.date     
      let index = this.posts.findIndex(post => post.date === dateToDelete)
      this.posts.splice(index, 1)
        
      }

},
  filters:{
        relativeDate(value){
          return formatDistance(value, new Date())
        }
  }
}
</script>
<style lang="sass">
.new_post
 font-size: 19x
 line-height : 1.4 i !important
.divider
  border-top: 1px solid 
  border-bottom: 1px solid 
  border-color: $grey-5
.post_content
  white-space: pre-line
.post:not(:first-child)
  border-top: 1px solid rgba(0,0,0,0.12)
  
.post-icon
 margin-left: -5px
</style>