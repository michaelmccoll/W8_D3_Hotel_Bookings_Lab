<template>
  <div id="app">
    <header>
      <booking-form/>
      <hr>
    </header>
    <h1>Hotel Bookings List</h1>
    <booking-list :bookings="bookings"/>
  </div>
</template>

<script>
import {eventBus} from './main.js';
import BookingForm from './components/BookingForm.vue';
import BookingList from './components/BookingList.vue';
import BookingService from './services/BookingService.js';

export default {
  name: 'App',
  components: {
    'booking-form': BookingForm,
    'booking-list': BookingList
  },
  data(){
    return {
    bookings: []
  };
  },
  methods: {
    fetchBookings(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  },
  mounted(){
    this.fetchBookings();

    eventBus.$on('submit-booking', payload => {
      BookingService.postBooking(payload)
      .then(booking => this.bookings.push(booking));
    });

    eventBus.$on('update-booking', booking => {
      const updateBooking = {
        ...booking,
        check_in_status: !booking.check_in_status
      };
      BookingService.updateBooking(updateBooking);
      const index = this.bookings.findIndex(booking => booking._id === updateBooking._id);
      this.bookings.splice(index,1,updateBooking);
    });

    eventBus.$on('delete-booking', id => {
      BookingService.deleteBooking(id)
        .then(() => {
          const index = this.bookings.findIndex(booking => booking._id === id);
          this.bookings.splice(index, 1);
        });
    });

  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
header {
  background-color: lightgrey;
  padding: 10px 0px 0px 0px;
}
h1 {
  padding: 5px;
  margin: 5px;
}
</style>
