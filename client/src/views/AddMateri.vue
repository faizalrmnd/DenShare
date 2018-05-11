<template>
  <div class="add-materi">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <!-- <form> -->
            <div class="form-group">
              <label for="exampleInputEmail1">Title</label>
              <input v-model="titles" type="text" class="form-control" placeholder="Title subject here..">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Intro</label>
              <input v-model="intro" type="text" class="form-control" placeholder="Intro subject here..">
            </div>
            <label for="exampleFormControlFile1">Write / Copy Materi Here</label>
            <textarea v-model="content" name="" id="" cols="30" rows="10"></textarea>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Options</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01" v-model="phase">
                <option selected>Choose...</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlFile1">Example file input</label>
              <input type="file" id="image" class="form-control-file">
            </div>
            
            <button @click="addMateri" class="btn btn-primary">Submit</button>
          <!-- </form> -->
        </div>
        <div class="col-md-6">
            <div style="width:50%" class="about">
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddMateri',
  data () {
    return {
      titles: '',
      content: '',
      intro: '',
      phase: ''
    }
  },
  created () {
    if(!localStorage.getItem('token') && localStorage.getItem('role') != 'instructor') {
      this.$router.push('/')
    }
  },
  methods: {
    addMateri: function () {
      const fileInput = document.querySelector('#image')

      let payload = new FormData()

      payload.append('image', fileInput.files[0])
      payload.append('title', this.titles)
      payload.append('content', this.content)
      payload.append('intro', this.intro)
      payload.append('phase', this.phase)

      this.$store.dispatch('addMateri', payload)
      
      this.$router.push('/materi')
    }
  }

}
</script>
