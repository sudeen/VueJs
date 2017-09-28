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
                fetch('http://swapi.co/api/people/1',{
                    method:'GET',
                    mode: 'no-cors',
                })
//                    .then(response => response.json())
//                    .then(json => console.log(json));
                    .then(
                        function (response) {
                            console.log(response);
                            try {
                                JSON.parse(JSON.stringify(json));
                                console.log("valid part",json);
                                console.log("valid");
                            } catch (e) {
                                console.log("invalid");
                                // correct the invalid json here
//                                JSON.parse(JSON.stringify(json));
//                                console.log("invalid part",response)
                            }
                        },
                        function (error) {
                            console.log('error');
            })
                    .then(json => console.log(json))
            }

        }
    }
</script>