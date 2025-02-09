const baseURL = 'http://localhost:3000/api/bookings/'

export default {
  getBookings() {
    return fetch(baseURL)
      .then(res => res.json())
  },

  postBooking(payload) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
  },

  deleteBooking(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  },

  updateBooking(booking){
    return fetch(baseURL + booking._id, {
      method: 'PUT',
      body: JSON.stringify(booking),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
  }

}