<template>
    <div id="app">
        <h3>Got Jokes?</h3>
        <button class="btn btn-primary" @click="initJokes">Add Ten Random Jokes</button>
        <br>
        <br>
        <div class="col-md-12">
            <joke
            v-for="(joke, index) in $store.state.jokes"
            :joke="joke"
            :key="index"
            ></joke>
        </div>


    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import Joke from './Joke.vue'

    export default {
        methods: mapActions([
            'initJokes'
        ]),
        components:{
            Joke
        }
    }
</script>