<template>
    <html class="scroll-smooth" lang="en">
       
    <header class="bg-transparent navbar-fixed top-0 left-0 w-full flex items-center z-10 dark:bg-dark">
        <div class="container">
            <div class="flex items-center justify-between relative">
                <div class="px-4">
                    <a href="#home" class="font-bold text-lg text-primary block py-6">Nursyabani</a>
                </div>
                <div class="px-4">
                    <RealTimeClock />
                </div>
                <div class="flex items-center px-4">
                    <button id="hamburger" name="hamburger" type="button" class="block absolute right-4 lg:hidden">
                        <span class="origin-top-left hamburger-line transition duration-300 ease-in-out"></span>
                        <span class="hamburger-line transition duration-300 ease-in-out"></span>
                        <span class="origin-bottom-left hamburger-line transition duration-300 ease-in-out"></span>
                    </button>

                    <nav id="nav-menu" class="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-slate-500 lg:dark:bg-transparent">
                        <ul class="block lg:flex">
                            <li class="group">
                                <a href="#home" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Home</a>
                            </li>
                            <li class="group">
                                <a href="#about" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">About</a>
                            </li>
                            <li class="group">
                                <a href="#portofolio" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Portofolio</a>
                            </li>
                            <li class="group">
                                <a href="#clients" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Clients</a>
                            </li>
                            <li class="group">
                                <a href="#blog" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Blog</a>
                            </li>
                            <li class="group">
                                <a href="#contact" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white md:text-center">Contact Me</a>
                            </li>
                            <li class="mt-3 flex items-center pl-8 lg:mt-0">
                                <div class="flex">
                                    <span class="mr-2 text-sm text-slate-500 dark:text-white">Light</span>
                                    <input type="checkbox" class="hidden" id="dark-toggle" />
                                    <label for="dark-toggle">
                                        <div class="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                                            <div class="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out dark:bg-white"></div>
                                        </div>
                                    </label>
                                    <span class="ml-2 text-sm text-slate-500 dark:text-white">Dark</span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    </html>
</template>

<script>
import RealTimeClock from '~/components/RealTimeClock.vue';

export default {
  components: {
    RealTimeClock,
  },
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

    //Button To-Top
    window.addEventListener('click', function(e) {
        if(e.target != hamburger && e.target != navMenu) {
            hamburger.classList.remove('hamburger-active');
            navMenu.classList.add('hidden');
        }
    });

    // Button Dark Mode
    const darkToggle = document.querySelector('#dark-toggle');
    const html = document.querySelector('html');

    darkToggle.addEventListener('click', function() {
        if (darkToggle.checked) {
            html.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            html.classList.remove('dark');
            localStorage.theme = ('light');
        }
    });
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        darkToggle.checked = true;
    } else {
        darkToggle.checked = false;
    }
  },
}
</script>
