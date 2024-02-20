clear<template>    
    <header class="bg-transparent navbar-fixed top-0 left-0 w-full flex items-center z-10">
        <div class="container">
            <div class="flex items-center justify-between relative">
                <div>
                    <a href="#home" class="font-bold text-lg text-primary block py-6">Nursyabani</a>
                </div>
                <div class="px-4">
                    <RealTimeClock />
                </div>
                <div class="flex items-center px-4" ref="menuContainer">
                    <button id="hamburger" name="hamburger" type="button" class="block absolute right-4 lg:hidden" :class="{ 'hamburger-active': showMenu }" @click="toggleMenu">
                        <span class="origin-top-left hamburger-line transition duration-300 ease-in-out"></span>
                        <span class="hamburger-line transition duration-300 ease-in-out"></span>
                        <span class="origin-bottom-left hamburger-line transition duration-300 ease-in-out"></span>
                    </button>
                    <nav id="nav-menu" :class="{ 'hidden': !showMenu }" class="absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-slate-500 lg:dark:bg-transparent" ref="menu">
                        <ul class="block lg:flex">
                            <li class="group">
                                <a href="#home" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white hover:scale-125 hover:font-semibold">Home</a>
                            </li>
                            <li class="group">
                                <a href="#about" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white hover:scale-125 hover:font-semibold">About</a>
                            </li>
                            <li class="group">
                                <a href="#portofolio" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white hover:scale-125 hover:font-semibold">Portofolio</a>
                            </li>
                            <li class="group">
                                <a href="#clients" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white hover:scale-125 hover:font-semibold">Clients</a>
                            </li>
                            <li class="group">
                                <a href="#blog" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white hover:scale-125 hover:font-semibold">Blog</a>
                            </li>
                            <li class="group">
                                <a href="#contact" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white md:text-center hover:scale-125 hover:font-semibold">Contact Me</a>
                            </li>
                            <li class="group">
                              <UButton class="py-2 mx-8 items-center hover:scale-125 hover:font-semibold md:text-center group-hover:text-primary"
                                :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                                color="gray"
                                variant="ghost"
                                aria-label="Theme"
                                @click="isDark = !isDark"
                                />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showMenu = ref(false);
const menuContainer = ref(null);
const menu = ref(null);

function toggleMenu() {
    showMenu.value = !showMenu.value;
}

onMounted(() => {
    const closeMenuOnOutsideClick = (e) => {
        if (!menuContainer.value.contains(e.target) && !menu.value.contains(e.target)) {
            showMenu.value = false;
        }
    };
    document.addEventListener('click', closeMenuOnOutsideClick);
    onUnmounted(() => {
        document.removeEventListener('click', closeMenuOnOutsideClick);
    });
});

const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
