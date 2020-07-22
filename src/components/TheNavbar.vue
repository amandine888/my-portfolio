<template>
    <div id="navigation-container">
        <nav id="navigation-button" class="text-center">
            <v-btn v-on:click="linkProject" rounded >Projets</v-btn>
            <v-btn rounded >Bio</v-btn>
            <v-btn rounded >Contact</v-btn>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
    #navigation-container{
        position: fixed; 
        width: 100%;
    }

    #navigation-button{
        display: flex; 
        justify-content: space-evenly;
    }


</style>