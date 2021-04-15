<template>
      <tr>
          <td class="nameEntry">{{booking.name}}</td>
          <td>{{booking.email}}</td>
          <td v-bind:class="booking.check_in_status ? 'checkedin' : 'checkedout'">{{booking.check_in_status}}</td>
          <td>
            <button v-on:click="deleteBooking(booking._id)">Delete Booking</button>
          </td>
          <td>
            <button v-on:click="updateBooking">Update Check In/Out</button>
            <!-- booking.check_in_status=!booking.check_in_status -->
          </td>
        </tr>
</template>

<script>

import { eventBus } from '../main';

export default {
    name: 'booking',
    props: ['booking'],
    methods: {
        deleteBooking(id){
            eventBus.$emit('delete-booking',id);
        },
        updateBooking: function(){
            eventBus.$emit('update-booking',this.booking);
        }
    }
}
</script>

<style>
td {
    padding: 10px;
    background-color: rgb(193, 227, 238);
}
.checkedin {
    color: white;
    background-color: rgb(110, 165, 110);
}
.checkedout {
    color:black;
    background-color: rgb(230, 102, 102);
}
</style>