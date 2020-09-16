<template>
    <div>
        <NavBar :title="page.title"/>
        <ProjectItems/>
    </div>
</template>
<script>

// @ is an alias to /src
import NavBar from "@/components/TheNavbar.vue";
import ProjectItems from "@/components/ProjectItems.vue";

export default {
    name: "Project",
    components: {
        NavBar, 
        ProjectItems, 
    },
    data (){
        return {
            page: {
                title: 'projets'
            },
        }
    }
}
</script>
<style scoped>

</style>