<template>
    <div class="detail">
        {{ twittersrc }}
        <h1>Detail for Share</h1>
        <p>ini ID = {{ id }} </p>
        <p> {{ title }} </p>
        <img :src="image" alt="">
        <p> {{ intro }} </p>
        <p> {{ content }} </p>

        <a 
            class="btn btn-primary" 
            v-bind:href="fbsrc"
             onclick="return !window.open(this.href, 'Facebook', 'width=640px,height=580px')">
            facebook share
        </a>

        <a 
            class="btn btn-info"
            :href="twittersrc"
            onclick="return !window.open(this.href, 'Twitter', 'width=640px,height:580px')">
            Tweet
        </a>

    </div>
</template>

<script>
import axios from 'axios'

let currURL = window.location.href

export default {
    name: 'detail',
    data () {
        return {
            fbsrc: `https://www.facebook.com/sharer/sharer.php?app_id=469049293528162&sdk=joey&u=${currURL}&display=popup&ref=plugin&src=share_button`,
            twittersrc: `https://twitter.com/intent/tweet?text='${currURL}'`,
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
