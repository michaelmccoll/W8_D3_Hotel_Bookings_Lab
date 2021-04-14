<template>
    <table class="bookingsList">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Checked In</th>
            <th>Delete Booking</th>
            <th>Update Check In/Out</th>
        </tr>
        <booking v-for="(booking, index) in bookings" :key="index" :booking="booking"/>
    </table>
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
	margin-top: 10px;
    margin-right: auto;
    margin-left: auto;
}
th {
    padding: 10px;
    background-color: rgb(67, 80, 83);
    color: white;
}
</style>