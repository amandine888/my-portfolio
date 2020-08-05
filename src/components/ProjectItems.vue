<template>  
    <section>
        <div v-for="project in projects"
            v-bind:key="project.id">
            <div>
                <h2>
                    {{project.name}}
                </h2>   
                <p> 
                    {{project.infos}}
                </p>
            </div>
            <div>
                <img>
                <div></div>
                <li>
                    <span>{{project.tags.html}}</span>
                    <span>{{project.tags.css}}</span>
                    <span>{{project.tags.javascript}}</span>
                </li>
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
                    infos: 'salut je suis la description 1', 
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
                    infos: 'salut je suis la description 2', 
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
</style>