const Flight = require('../models/flight')
const Destination = require('../models/destination')

function newFlight(req, res) {
    res.render('flights/new', {err: ''})
}

function create(req,res) {
    Flight.create(req.body, function(err, destination) {
        res.redirect(`flights/${flight._id}`)
    })
}

function index(req,res) {
    Flight.find({}, function(err, flights) {
        res.render('flights', {title: 'All Flights', flights})
    })
}

function show(req, res) {
    Flight.findById(req.params.id)
    .populate('destinations').exec(function(err, flight) {
       Destination.find({_id: {$nin: flight.destinations}}, function(err, destinations) {
        res.render('flights/show', {flight, destinations})
       })
        
    })
    
}

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

