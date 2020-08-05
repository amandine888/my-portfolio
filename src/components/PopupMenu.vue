<template>
  <transition name="modal">
    <div class="block-modal" v-show="value">

      <section class="modal_header">
        <div class="page-title">
          <h2>amandine Divay</h2>
        </div>
        <v-icon aria-describedby="Fermer le menu" large class="modal_icon-btn" color="#f5f5f5" type="button" @click.prevent="close">mdi-close</v-icon>
      </section>

      <section class="modal_body">
        <div class="element-line"></div>
        <div class="modal_navigation-container">
          <div class="modal_navigation-container-links">
            <h2>projets</h2>
            <h3>/ Explorer mes réalisations</h3>
          </div>
          <div class="modal_navigation-container-links">
            <h2>bio</h2>
            <h3>/ Me connaître un peu plus</h3>
          </div>
          <div class="modal_navigation-container-links">
            <h2>contact</h2>
            <h3>/ Comment me contacter</h3>
          </div>
        </div>
      </section>

      <section class="modal_footer">
        <p>© 2020 Amandine Divay</p>
      </section>

    </div>
  </transition>
</template>

<script>
export default {
  name: "PopupMenu",
  props: {
    value: {
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    },
  },
};
</script>

<style scoped>
.block-modal 
{
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0vh;
  right: 0vw;
  display: flex;
  flex-direction: column;
  background-color: #212245;
  z-index: 5;
}

.modal_header 
{
  display: flex;
  justify-content: space-between;
  padding: 2vh 3vw 0 3vw;
}

.page-title h2 
{
  font-weight: 300;
  font-size: 2.25em;
  text-transform: uppercase;
}

.modal_body 
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.element-line 
{
  border-right: 1px solid #f5f5f5;
  height: 80vh;
  position: absolute;
  left: 32vw;
  top: 20vh;
}

.modal_navigation-container
{
  height: 65vh;
  display: flex; 
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 10vw;
}

.modal_navigation-container-links 
{
  display: flex;
  align-items: center;
}

.modal_navigation-container-links h2 
{
font-size: 6em;
text-transform: uppercase;
font-style: italic;
font-weight: 400;
margin-right: 2vw;
}

h1,
h2,
h3,
button 
{
  color: #f5f5f5;
}

h3 
{
  font-family: "Rosario", sans-serif;
}

.modal_footer 
{
  color: #f5f5f5;
  display: flex;
  justify-content: flex-end;
  margin: 1vw;
}

</style>