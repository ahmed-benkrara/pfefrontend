<template>
    <div class="body-wrapper">
      <!--  Header Start -->
      <HeaderAdmin />
      <!--  Header End -->
      <div class="container-fluid">
        <div class="container-fluid">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-semibold mb-4">Create Module</h5>
              <div class="card">
                <div class="card-body">
                
                    <div class="mb-3">
                      <label for="image" class="form-label">Module Images</label>
                      <input type="file" @change="handleImages($event)" multiple accept="image/*" class="form-control" id="image">
                    </div>
                    <div class="mb-3 flex flex-wrap">
                        <div v-for="item in images" :key="item.name">
                            <img class="w-[100px] mb-2 mr-2 h-[80px] rounded object-cover" :src="getImageUrl(item)" alt="">
                        </div>
                    </div>
                    <div class="mb-3">
                      <label for="name" class="form-label">Module Title</label>
                      <input type="text" v-model="data.name" class="form-control" id="name">
                    </div>
                    <div class="mb-3">
                      <label for="price" class="form-label">Module Price</label>
                      <input type="number" v-model="data.price" min="0" class="form-control" id="price">
                    </div>
                    <div class="mb-3">
                      <label for="package" class="form-label">Package</label>
                      <!-- <input type="text" min="0" class="form-control" id="package"> -->
                        <select id="package" class="form-select">
                          <option selected disabled value="">Select a package</option>
                        </select>
                      <div id="emailHelp" class="form-text">It's optional, if module has no package leave it empty.</div>
                    </div>
                    <div class="mb-3">
                      <label for="description" class="form-label">Module Description</label>
                      <textarea v-model="data.description" class="form-control" id="description"></textarea>
                    </div>
                    <button @click="send()" class="btn btn-primary">Save</button>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import HeaderAdmin from '@/components/admin/HeaderAdmin.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    name : 'CreateModuleView',
    data(){
        return{
            images : [],
            data : {
                name : '',
                price : '',
                description : '',
                package_id : '',
            }
        }
    },
    computed : {
        ...mapGetters('moduleModule', ['getSuccess'])
    },
    watch : {
        getSuccess(value){
            if(value == true){
                this.data = {
                    name : '',
                    price : '',
                    description : '',
                    package_id : '',
                }

                this.images = []
                document.getElementById('image').value = ''
                alert('Module created successfully')
                this.setSuccess(null)
            }else if(value == false){
                alert('Something went wrong please try again later')
                this.setSuccess(null)
            }
        }
    },
    methods : {
        ...mapActions('moduleModule', ['postModule']),
        ...mapMutations('moduleModule', ['setSuccess']),
        handleImages(file){
            this.images.push(file.target.files[0])
        },
        getImageUrl(file){
            return URL.createObjectURL(file)
        },
        send(){
            if(this.validation()){
                let final = {
                    module : this.data,
                    images : this.images
                }

                this.postModule(final)
            }
        },
        validation(){
            let name = document.getElementById('name') 
            let price = document.getElementById('price') 
            let image = document.getElementById('image') 
            let description = document.getElementById('description') 

            if(this.images.length == 0){
                this.errorStyle(image, 'A module should have at least 1 image !', true)
                return
            }else{
                this.errorStyle(image, '', false)
            }
            
            if(name.value.trim().length < 3){
                this.errorStyle(name, 'Module Title isn\' valid', true)
                return
            }else{
                this.errorStyle(name, '', false)
            }
            
            if(parseFloat(price.value) < 1 || price.value == '' || price.value == null){
                this.errorStyle(price, 'Module Price isn\' valid', true)
                return
            }else{
                this.errorStyle(price, '', false)
            }
            
            if(document.getElementById('package').value == '' || document.getElementById('package').value == null){
                this.data.package_id = null
            }else{
                this.data.package_id = document.getElementById('package').value
            }

            if(description.value.trim().length < 200){
                this.errorStyle(description, 'Module Description should at least contain 200 characters', true)
                return
            }else{
                this.errorStyle(description, '', false)
            }

            return true
        },
        errorStyle(e, message, hasError){
            if(hasError){
                e.classList.add('error')
                e.setAttribute('title', message)
            }else{
                e.classList.remove('error')
                e.removeAttribute('title')
            }
        }
    },
    mounted(){
        useHead({
            title: `Create Module | ${process.env.VUE_APP_TITLE}`,
            meta: [
                {
                name: 'description',
                content: 'This is my page.',
                },
            ],
        })
    },
    components : {
        HeaderAdmin
    }
}
</script>

<style scoped>
    #description{
        min-height: 200px;
        resize: none;
    }

    .error{
        @apply border-[red];
    }
</style>