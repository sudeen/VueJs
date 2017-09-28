<template>
    <div id="app">
        <h3>{{title}}</h3>
        <button class="btn btn-primary" @click="fetchCharacter">Test fetch character</button>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                title: 'Generate your Team'
            }
        },
        methods:{
            fetchCharacter(){
                fetch('http://swapi.co/api/people',{
                    method:'GET',
                    mode: 'no-cors',
                })
                    .then(response => response.json())
                    .then(json => console.log(json))
            }
        }
    }
</script>