<template>  
    <section class="container_list-projects">
        <div v-for="project in projects"
            v-bind:key="project.id" class="container_each-project">
            <img src="../../dist/img/Test.png" alt="test"/>
            <div class="object-rounded"></div>
            <div class="project-content">
                <h2>
                    {{project.name}}
                </h2>   
                <p> 
                    {{project.infos}}
                </p>
            </div>
            <div>
                <!-- <li>
                    <span>{{project.tags.html}}</span>
                    <span>{{project.tags.css}}</span>
                    <span>{{project.tags.javascript}}</span>
                </li> -->
            </div>
        </div>
    </section>
</template>

<script>
export default { 
    data () {
        return{
            projects: [
                {
                    id: 1,
                    name: 'akuapéli', 
                    url: '', 
                    infos: 'la description 1', 
                    img: '',
                    tags: {
                        html: 'html', 
                        css: 'css', 
                        javascript: 'javascript'}
                },
                {
                    id: 2,
                    name: 'akuapéli', 
                    url: '', 
                    infos: 'la description 2', 
                    img: '', 
                    tags: {
                        html: 'html', 
                        css: 'css', 
                        javascript: 'javascript'}
                }
            ]
        }
    } 
}
</script>

<style scoped>

img 
{
    width: 50vw;
    height: 50vh;
    border: 1px solid lightgray;
}

img:hover ~.object-rounded
{
    transform: scale(4.4);
    background-color: red;
}

.container_list-projects
{
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;
}

.container_each-project
{
    margin-bottom: 15vh;
}

.project-content
{
    display: flex; 
    align-items: flex-end;
}

.project-content h2
{
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 300;
}

.project-content p 
{
    font-size: 1.875em;
    text-transform: uppercase;
}

.object-rounded
{
    border-radius: 100%;
    width: 15px;
    height: 15px;
    background-color: black;
    transition: .3s linear;
}

</style>