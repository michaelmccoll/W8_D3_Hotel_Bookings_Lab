<template>
  <div>
      <h2>Name: {{booking.name}}</h2>
      <h3>Email: {{booking.email}}</h3>
      <h3>Check-in Status: {{booking.check_in_status}}</h3>
      <button v-on:click="deleteBooking(booking._id)">Delete Booking</button>
  </div>
</template>

<script>

import { eventBus } from '../main';

export default {
    name: 'booking',
    props: ['booking'],
    methods: {
        deleteBooking(id){
            eventBus.$emit('delete-booking',id);
        }
    }
}
</script>

<style>

</style>