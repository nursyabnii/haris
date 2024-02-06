<template>
    <html class="scroll smooth">
        <div>
            <p class="text-base font-semibold text-primary text-center md:text-center md:text-sm lg:text-md xl:text-md sm:text-sm">{{ formattedTime }}</p>
        </div>
    </html>
  
</template>

<script>
import moment from 'moment-timezone';

export default {
  data() {
    return {
      currentTime: null,
      formattedTime: '',
    };
  },
  mounted() {
    this.getCurrentTime();
    // Update time every second
    setInterval(this.getCurrentTime, 1000);
  },
  methods: {
    getCurrentTime() {
      this.currentTime = moment().tz('Asia/Jakarta'); // Ganti 'Asia/Jakarta' sesuai zona waktu yang diinginkan
      this.formattedTime = this.currentTime.format('DD-MM-YYYY HH:mm:ss');
    },
  },
};
</script>

<style scoped>
/* Tambahkan gaya CSS jika diperlukan */
</style>
