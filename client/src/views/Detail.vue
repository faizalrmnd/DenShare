<template>
    <div class="detail">
    <h1>Detail for Share</h1>
    <p>ini ID = {{ id }} </p>
    <p> {{ title }} </p>
    <img :src="image" alt="">
    <p> {{ intro }} </p>
    <p> {{ content }} </p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'detail',
    data () {
        return {
            id: '',
            title: '',
            content: '',
            intro: '',
            image: ''
        }
    },
    created () {
        let self = this 

        let currURL = window.location.href
        console.log('CURRENT URL +======>',currURL)
        let idx = currURL.split('/')
        console.log(idx[5])

        axios.get(`http://localhost:3000/topics/${idx[5]}`)
        .then((response) => {
            let data = response.data.result
            console.log('XXXXXXXXXXXXXXXXXX',data);
            
            self.id = data._id
            self.title = data.title
            self.content = data.content
            self.intro = data.intro
            self.image = data.image
        })
        .catch((er) => {
            console.log(err)
        })
    }
}
</script>

<style>

</style>
