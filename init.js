const mongoose = require("mongoose")

const PrimeCut = require("./model/primecut");

main().then(() => {
    console.log("Connected to MongoDB");
}).catch((e) => {
    console.log(e);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/PrimeCut');
}

let primeDetail = [
    {
        name: 'Classic Cuts',
        address: '123 Main St, Chennai, India',
        owner: 12345,
        services: [
          { name: 'Haircut', price: 200 },
          { name: 'Shave', price: 100 },
          { name: 'Haircut and Shave', price: 250 }
        ],
        pictures: ['classic1.jpg', 'classic2.jpg'],
        openingHours: {
          monday: { start: '09:00', end: '18:00' },
          tuesday: { start: '09:00', end: '18:00' },
          wednesday: { start: '09:00', end: '18:00' },
          thursday: { start: '09:00', end: '18:00' },
          friday: { start: '09:00', end: '18:00' },
          saturday: { start: '10:00', end: '16:00' },
          sunday: { start: '10:00', end: '16:00' }
        }
      },
      {
        name: 'Modern Barber',
        address: '456 High St, Chennai, India',
        owner: 1234,
        services: [
          { name: 'Haircut', price: 300 },
          { name: 'Beard Trim', price: 150 },
          { name: 'Hair Color', price: 400 }
        ],
        pictures: ['modern1.jpg', 'modern2.jpg'],
        openingHours: {
          monday: { start: '10:00', end: '19:00' },
          tuesday: { start: '10:00', end: '19:00' },
          wednesday: { start: '10:00', end: '19:00' },
          thursday: { start: '10:00', end: '19:00' },
          friday: { start: '10:00', end: '19:00' },
          saturday: { start: '11:00', end: '17:00' },
          sunday: { start: '11:00', end: '17:00' }
        }
      },
      {
        name: 'Elite Salon',
        address: '789 Market St, Chennai, India',
        owner: 1234,
        services: [
          { name: 'Haircut', price: 500 },
          { name: 'Facial', price: 700 },
          { name: 'Spa Treatment', price: 1200 }
        ],
        pictures: ['elite1.jpg', 'elite2.jpg'],
        openingHours: {
          monday: { start: '08:00', end: '17:00' },
          tuesday: { start: '08:00', end: '17:00' },
          wednesday: { start: '08:00', end: '17:00' },
          thursday: { start: '08:00', end: '17:00' },
          friday: { start: '08:00', end: '17:00' },
          saturday: { start: '09:00', end: '15:00' },
          sunday: { start: '09:00', end: '15:00' }
        }
      }
]

PrimeCut.insertMany(primeDetail);