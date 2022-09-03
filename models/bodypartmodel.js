const mongoose = require('mongoose');


const chestSchema = mongoose.Schema({
   bodyPart : String,
   equipment: String,
   gifUrl : String,
   id: Number,
   name: String,
   target: String


})

const backSchema = mongoose.Schema({
   bodyPart : String,
   equipment: String,
   gifUrl : String,
   id: Number,
   name: String,
   target: String


})

const cardioSchema = mongoose.Schema({
   bodyPart : String,
   equipment: String,
   gifUrl : String,
   id: Number,
   name: String,
   target: String


})

const lowerArmsSchema = mongoose.Schema({
   bodyPart : String,
   equipment: String,
   gifUrl : String,
   id: Number,
   name: String,
   target: String


})

const lowerLegsSchema = mongoose.Schema({
   bodyPart : String,
   equipment: String,
   gifUrl : String,
   id: Number,
   name: String,
   target: String


})

const neckSchema = mongoose.Schema({
   bodyPart : String,
   equipment: String,
   gifUrl : String,
   id: Number,
   name: String,
   target: String


})

const shoulderSchema = mongoose.Schema({
   bodyPart : String,
   equipment: String,
   gifUrl : String,
   id: Number,
   name: String,
   target: String


})

const upperArmsSchema = mongoose.Schema({
   bodyPart : String,
   equipment: String,
   gifUrl : String,
   id: Number,
   name: String,
   target: String


})

const upperLegsSchema = mongoose.Schema({
   bodyPart : String,
   equipment: String,
   gifUrl : String,
   id: Number,
   name: String,
   target: String


})

const waistSchema = mongoose.Schema({
   bodyPart : String,
   equipment: String,
   gifUrl : String,
   id: Number,
   name: String,
   target: String


})

const chestModel = mongoose.model('chest', chestSchema)
const backModel = mongoose.model('back', backSchema)
const cardioModel = mongoose.model('cardio', cardioSchema)
const lowerArmModel = mongoose.model('lowerArm', lowerArmsSchema)
const lowerLegsModel = mongoose.model('lowerLegs', lowerLegsSchema)
const neckModel = mongoose.model('neck', neckSchema)
const shoulderModel = mongoose.model('shoulder', backSchema)
const upperArmsModel = mongoose.model('upperArms', upperArmsSchema)
const upperLegsModel = mongoose.model('upperlegs', upperLegsSchema)
const waistModel = mongoose.model('waist', waistSchema)

const bodyParts =[chestModel, backModel, cardioModel,lowerArmModel, lowerLegsModel,neckModel,shoulderModel,upperArmsModel,upperLegsModel,waistModel]
   


module.exports = bodyParts;