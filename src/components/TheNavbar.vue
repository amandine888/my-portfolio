<template>
    <div class="nav-bar_container">
        <div class="page-title">
            {{title}}
        </div>
        <nav class="burger-menu_btn">
            <button type='button' id="show-modal"  @click="openModal">menu</button>
            <div class="burger-menu_line1"></div>
            <div class="burger-menu_line2"></div>
        </nav>
        <transition name="modal-fade">
            <PopupMenu v-show='showModal' @clicked='closeModal'></PopupMenu>
        </transition>
    </div>
</template>

<script>

import PopupMenu from "@/components/PopupMenu.vue"; 

export default {
    name: 'NavBar',
    components: {PopupMenu},
    props: ['title'], 
    data () {
        return {
        showModal: false,
        }
    },
    methods: {
        openModal () {
            this.showModal = !this.showModal; 
        },

        closeModal (value) {
            this.showModal= false;
        },
    }
}
</script>

<style scoped>
    .nav-bar_container
    { 
        display: flex; 
        justify-content: space-between;
        align-items: center;
        padding: 5vh;
    }

    .page-title
    {
        font-size: 2.250em;
        text-transform: uppercase;
    }

    .burger-menu_btn
    {
        display: flex; 
        flex-direction: column;
        justify-content: space-around;
        height: 10vh;
        width: 8vw;
        padding-top: 2vh;
    }

    .burger-menu_line1
    {
        border-top: solid 3px black;
        width: 6vw;
        margin-left: 1vw;
        
    }

    .burger-menu_line2
    {
        border-top: solid 3px black;
        margin-right: 1vw;
    }

    button{
        border: none; 
        text-transform: uppercase;  
        font-size: 2.250em;
    }

    .modal-fade-enter-active 
    {
        transition: all .3s ease;
    }

    .modal-fade-leave-active 
    {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .modal-fade-enter, .modal-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ 
    {
        transform: translateX(10px);
        opacity: 0;
    }

</style>