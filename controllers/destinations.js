const Destination = require('../models/destination')
const Flight = require('../models/flight')

function newDestination(req, res) {
    Destination.find({}, function (err, destinations) {
        console.log(destinations)
        res.render('destinations/new', { title: 'Add Destination', destinations })
    })
}

function create(req, res) {
    console.log(req.body)
    Destination.create(req.body, function (err, destination) {
        console.log(err)
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
    new: newDestination,
    create,
    addToDestinations
}