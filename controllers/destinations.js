const Destination = require('../models/destination')
const Flight = require('../models/flight')

function newFlight(req, res) {
    Destination.find(req.body, function (err, flights) {
        res.render('destinations/new', { title: 'Add Destination', flights })
    })
}

function create(req, res) {
    Destination.create(req.body, function (err, destination) {
        res.redirect('destinations/new')
    })
}


function addToDestinations(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        flight.destinations.push(req.body.destination)
        flight.save(function (err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}


module.exports = {
    new: newFlight,
    create,
    addToDestinations
}