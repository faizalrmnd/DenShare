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
              <label for="exampleInputEmail1">Title</label>
              <input v-model="intro" type="text" class="form-control" placeholder="Intro subject here..">
            </div>
            <label for="exampleFormControlFile1">Write / Copy Materi Here</label>
            <textarea v-model="content" name="" id="" cols="30" rows="10"></textarea>
            <div class="form-group">
              <label for="exampleFormControlFile1">Example file input</label>
              <input type="file" class="form-control-file" id="exampleFormControlFile1">
            </div>
            
            <button class="btn btn-primary">Submit</button>
          <!-- </form> -->
        </div>
        <div class="col-md-6">
            <div style="width:50%" class="about">
              {{ titles }}
              {{ content }}
              {{ intro }}
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
      intro: ''
    }
  },
  components: {
  }

}
</script>
