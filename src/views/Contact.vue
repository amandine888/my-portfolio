<template>
    <div>
        <NavBar :title='page.title'/>
        <LinksContact/>
    </div>
</template>

<script>

// @ is an alias to /src
import NavBar from "@/components/TheNavbar.vue";
import LinksContact from "@/components/LinksContact.vue"; 

export default {
    name: "Contact", 
    components: {
        NavBar, 
        LinksContact,
    }, 
    data (){
        return {
            page: {
                title: 'contact'
            }
        }
    }
}
</script>

<style scoped>

</style>