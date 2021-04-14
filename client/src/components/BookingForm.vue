<template>
  <form class="form" v-on:submit="addBooking" id="booking-form">
      <h2>Add a Booking</h2>
        <label for="name">Name:</label>
        <input class="name" type="text" id="name" v-model="name" required/>

        <label for="email">Email:</label>
        <input class="email" type="email" id="email" v-model="email" required/>

        <input type="submit" value="Check In" id="save"/>
  </form>

</template>

<script>

import {eventBus} from '../main.js'

export default {
    name: 'booking-form',
    data() {
    return {
        name: '',
        email: '',
        check_in_status: true
    }
    },
    methods: {
        addBooking() {
            const payload = {
                name: this.name,
                email: this.email,
                check_in_status: this.check_in_status
            };
            eventBus.$emit('submit-booking',payload);
        }
    }
}
</script>

<style>
input {
    padding: 8px;
    margin: 8px;
}
.email {
    width: 250px;
}
.name {
    width: 180px;
}

</style>