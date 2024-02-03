<template>
    <header class="bg-transparant navbar-fixed top-0 left-0 w-full flex items-center z-10">
        <div class="container">
            <div class="div flex items-center justify-between relative">
                <div class="px-4">
                    <a href="#home" class="font-bold text-lg text-primary block py-6">Bani Haris</a>
                </div>
                <div class="flex items-center px-4">
                    <button id="hamburger" name="hamburger" type="button" class="block absolute right-4 lg:hidden">
                        <span class="origin-top-left hamburger-line transition duration-300 ease-in-out"></span>
                        <span class="hamburger-line transition duration-300 ease-in-out"></span>
                        <span class="origin-bottom-left hamburger-line transition duration-300 ease-in-out"></span>
                    </button>

                    <nav id="nav-menu" class="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                        <ul class="block lg:flex">
                            <li class="group">
                                <a href="#home" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Home</a>
                            </li>
                            <li class="group">
                                <a href="#about" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">About</a>
                            </li>
                            <li class="group">
                                <a href="#portofolio" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Portofolio</a>
                            </li>
                            <li class="group">
                                <a href="#clients" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Clients</a>
                            </li>
                            <li class="group">
                                <a href="#blog" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Blog</a>
                            </li>
                            <li class="group">
                                <a href="#contactme" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Contact Me</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  mounted() {
    // Nvabar fixed
    window.onscroll = function() {
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
      } else {
        header.classList.remove('navbar-fixed');
      }
    };

    // Menu List
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('hamburger-active');
      navMenu.classList.toggle('hidden');
    });
  }
}
</script>
