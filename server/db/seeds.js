use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Michael McColl",
        email: "michael@codeclan.com",
        check_in_status: true
    },

    {
        name: "Peter Brodie",
        email: "pete@info.com",
        check_in_status: true
    },

    {
        name: "Malcolm Holwill",
        email: "malcolm@codeclan.com",
        check_in_status: true
    },

    {
        name: "Chris Dryden",
        email: "chris@codeclan.com",
        check_in_status: false
    },
    
    {
        name: "Zsolt Podoba-Szalai",
        email: "zsolt@codeclan.com",
        check_in_status: false
    }
])