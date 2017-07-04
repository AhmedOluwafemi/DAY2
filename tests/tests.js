let chai=require('chai');
chai.should();
path=require('path');
chai.should();
let PersonaInfo=require(path.join(__dirname,'..','ZODIAC'));
describe('PersonaInfo',()=>{
	describe('#MonthofBirth',()=>{
		let ZODIAC;
		beforeEach(()=>{
			rectangle=new PersonaInfo(1993,29,1,'oluwafemi');
	})})
		it('returns the width',()=>{rectangle.MonthofBirth.should.equal(10)})
