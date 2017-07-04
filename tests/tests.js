const assert= require('chai').assert;
const myApp= require('../src/ZODIAC.js');
describe('PersonalInfo subclass',function(){
	it('should return Aquarius for input (1993,1,29)',function(){
let x= new myApp(1993,1,29)
		assert.deepEqual(x.ZodiacSignProperties(),AQUARIUS={'ZodiacSign':'AQUARIUS','Elements':'AIR','COLOR':'LIGHT-BLUE,SILVER','DAY':'SATURDAY'})
	})
it('should return GEMINI for input (1993,5,21)',function(){
let y= new myApp(1993,5,21)
		assert.deepEqual(y.ZodiacSignProperties(),GEMINI={'ZodiacSign':'GEMINI','Elements':'AIR','COLOR':'YELLOW,LIGHT-GREEN','DAY':'WEDNESDAY'})
	})
it('should return ARIES for input (1993,3,21)',function(){
let y= new myApp(1993,3,22)
		assert.deepEqual(y.ZodiacSignProperties(),ARIES={'ZodiacSign':'ARIES','Elements':'FIRE','COLOR':'RED','DAY':'TEUSDAY'})
	})
it('should return Taurus for input (1993,4,21)',function(){
let y= new myApp(1993,4,21)
		assert.deepEqual(y.ZodiacSignProperties(),TAURUS={'ZodiacSign':'TAURUS','Elements':'EARTH','COLOR':'GREEN,PINK','DAY':'FRIDAY AND MONDAY'})
	})
it('should return Cancer for input (1993,7,21)',function(){
let y= new myApp(1993,7,21)
		assert.deepEqual(y.ZodiacSignProperties(),CANCER={'ZodiacSign':'CANCER','Elements':'WATER','COLOR':'WHITE','DAY':'SATURDAY AND THURSDAY'})
	})
})

