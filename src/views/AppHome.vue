<template>
  <div>
      <NavBar :title="page.title"/>
      <header class="section_title">
        <section class="section_my-infos">
          <h2>amandine divay</h2>
          <div class="div_full-square"></div>
          <h2>paris</h2>
        </section>
        <section class="section_main-title">
          <div class="element_line"></div>
          <h1>développeuse web</h1>
        </section>
      </header>
      <footer class="home_footer">
        <button class="home_footer_btn-projects">
          <p class="btn-projects_open"><span class="icon"></span>Index des projets</p>
          <p class="btn-projects_close" aria-hidden="Fermer la fenêtre"><span class="icon2"></span>Fermer la fenêtre</p>
        </button>
      </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/TheNavbar.vue";

export default {
  name: "Home",
  components: {
    NavBar, 
  },
  data (){
    return {
      page: {
        title: 'portfolio'
      },
    }
  }
};
</script>

<style scoped>
.section_title
{
  height: 60vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10vw;
}

.section_my-infos
{ 
  display: flex;
}

.div_full-square
{
  background-color: black;
  width: 1vw;
  height: 1.5vh;
  position: relative;
  top: 6vh;
  right: 0.4vw;
}

.element_line
{
  border-top: 1px solid black;
  position: relative;
  top: 6vh; 
}

h1, h2 
{
  text-transform: uppercase;
}

h1
{
  font-size: 6em;
  font-weight: 300;
  font-style: italic;
}

h2
{
  font-family: 'Rosario', sans-serif;
  font-weight: 400;
  font-size: 4em;
}

.section_main-title 
{
  width: 80vw;
  display: flex;
  flex-direction: column;
}

.home_footer
{
  height: 18vh;
  display: flex; 
  align-items: flex-end;
}

.home_footer_btn-projects
{
  margin-left: 2vw;
}

.btn-projects_open 
{
  width: 11vw;
  margin-left: 2vw;
  display: flex; 
  justify-content:space-around;
  align-items: center;
  font-size: 1.125em;
}

.btn-projects_open:hover .icon
{
  transform: scale(2.2);
}

.btn-projects_close:hover .icon2
{
  transform: scale(2.2);
}

.btn-projects_close, .icon2 
{
  display: none;
}

.icon, .icon2
{
  display: block;
  background-color: black;
  border-radius: 70%;
  width: 20px;
  height: 20px;
  transition: .3s linear;
}

.icon:hover, .icon2:hover
{
  transform: scale(2.2);
}
</style>
