<template>
    <div class="col-md-4">
        <div class="event-card">
            <h4 class="card-title"><strong><em>{{event.title}}</em></strong></h4>
            <p class="card-text"><strong>{{event.description}}</strong></p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Date: {{event.date}}</li>
                <li class="list-group-item">Location: {{event.location}}</li>
                <li class="list-group-item">Email: {{event.email}}</li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        props:['event']
    }
</script>