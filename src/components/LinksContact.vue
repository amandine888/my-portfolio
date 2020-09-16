<template>
    <div class="contact-section">
        <div class="contact-section_animations">
            <img src="" alt="">
            <p>Want to contact me ?</p>
        </div>
        <div class="contact-section_links">
            <div class="links_email">
                <p>amandine2.divay@gmail.com</p>
                <v-icon medium class="modal_icon-btn" color="#000000" type="button">mdi-send</v-icon>
            </div>
            <div class="icon_social-network">
                <div class="icon_social-network-linkedin">
                    <v-icon large class="modal_icon-btn" color="#000000" type="button">mdi-linkedin</v-icon>
                    <p>Linkedin</p>
                </div>
                <div class="icon_social-network-linkedin">
                    <v-icon large class="modal_icon-btn" color="#000000" type="button">mdi-github</v-icon>
                    <p>Github</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LinksContact',
}
</script>

<style scoped>

.contact-section
{
    border: 2px solid red; 
    display: flex;
    justify-content: space-around;
}

.contact-section_animations
{
    display: flex;
    border: 2px solid midnightblue; 
}

.contact-section_links
{
    border: 2px solid plum; 
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.links_email
{
    border: solid 2px steelblue;
    display: flex;
    align-items: center;
}

.links_social-network
{
    border: solid 2px mediumspringgreen;
}

.icon_social-network-linkedin
{
    border: solid 2px chocolate;
    display: flex;
    align-items: center;
}

</style>