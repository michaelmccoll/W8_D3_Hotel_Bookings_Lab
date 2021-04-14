<template>
    <div class="bookingsList">
        <booking li v-for="(booking, index) in bookings" :key="index" :booking="booking"/>
    </div>
</template>

<script>
import Booking from './Booking';

export default {
    name: 'booking-list',
    components: {
        'booking': Booking
    },
    props: ['bookings']
}
</script>

<style>
.bookingsList {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}
</style>