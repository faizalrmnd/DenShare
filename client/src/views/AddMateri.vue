<template>
  <div class="add-materi">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <!-- <form> -->
            <div class="form-group">
              <label for="exampleInputEmail1">Title</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title subject here..">
            </div>
            <label for="exampleFormControlFile1">Write / Copy Materi Here</label>
            <!-- <wysiwyg v-model="myHTML" /> {{ myHTML }} -->
            <textarea v-model="myHTML" name="" id="" cols="30" rows="10"></textarea>
            <div class="form-group">
              <label for="exampleFormControlFile1">Example file input</label>
              <input type="file" class="form-control-file" id="exampleFormControlFile1">
            </div>
            <button class="btn btn-primary">Submit</button>
          <!-- </form> -->
        </div>
        <div class="col-md-6">
            <div style="width:50%" class="about">
                {{ myHTML }}
                {{ printHTML(myHTML) }}
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
      myHTML: ''
    }
  },
  components: {
  },
  methods: {
    printHTML (data) {
      return this.myHTML
    }
  }

}
</script>
