<template>
    <div>
        <NavBar :title='page.title'/>
        <MyBio/>
    </div>
</template>

<script>

// @ is an alias to /src
import NavBar from "@/components/TheNavbar.vue";
import MyBio from "@/components/MyBio.vue"; 

export default {
    name: "About", 
    components: {
        NavBar, 
        MyBio, 
    }, 
    data (){
        return {
            page: {
                title: 'bio'
            },
        }
    }
}
</script>

<style scoped>

</style>