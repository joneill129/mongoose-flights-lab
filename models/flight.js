const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = ({
    seat: {type: String, match: /[A-F][1-9]\d?/},
    price: {type: Number, min: 0}
});


const flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: { type: Date, 
    Default: function() {
        return new Date(new Date().setFullYear(new Date().getFullYear() +1))
    },
    destinations: [{type: Schema.Types.ObjectId, ref: 'Destination'}],
},

    tickets: [ticketSchema]
}, {
    timestamps: true
})



module.exports = mongoose.model('Flight', flightSchema)
