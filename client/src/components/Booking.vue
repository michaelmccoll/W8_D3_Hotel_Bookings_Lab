<template>
  <div>
      <h2>Name: {{booking.name}}</h2>
      <h3>Email: {{booking.email}}</h3>
      <h3>Check-in Status: {{booking.check_in_status}}</h3>
      <button>Delete Booking</button>
  </div>
</template>

<script>
export default {
    name: 'booking',
    props: ['booking'],
}
</script>

<style>

</style>