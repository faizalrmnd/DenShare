<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">DenShare</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#"><router-link to="/">Home</router-link> <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/materi">Materi</router-link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/about">Detail Materi</router-link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/addmateri">Add Materi</router-link></a>
            </li>
        </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
.bg-primary {
  background-color: #FF8F00 !important;
}
.navbar-brand {
  color: white !important;
}
a {
  color: rgb(255, 228, 193) !important;
}
a:hover {
  text-decoration: none;
  color: white !important
}
</style>
