class Zodiac{
constructor(YearofBirth,MonthofBirth,dayofBirth){
if (typeof(YearofBirth)!==Number){throw new Error('wrong value')};
if (typeof(MonthofBirth)!==Number){throw new Error('wrong value')};
if (typeof(dayofBirth)!==Number){throw new Error('wrong value')};
const Dob=new Date(YearofBirth,(MonthofBirth-1),dayofBirth);
this.MonthofBirth= Dob.getMonth()+1;
this.dayofBirth=Dob.getDate();
this.YearofBirth=Dob.getFullYear();

}

getMonth(){//gets month from the integer arguments passed
	if(this.MonthofBirth===1){return 'January'};
	if(this.MonthofBirth===2){return 'February'};
	if(this.MonthofBirth===3){return 'March'};
	if(this.MonthofBirth===4){return 'April'};
	if(this.MonthofBirth===5){return 'May'};
	if(this.MonthofBirth===6){return 'June'};
	if(this.MonthofBirth===7){return 'July'};
	if(this.MonthofBirth===8){return 'August'};
	if(this.MonthofBirth===9){return 'September'};
	if(this.MonthofBirth===10){return 'October'};
	if(this.MonthofBirth===11){return 'November'};
	if(this.MonthofBirth===12){return 'December'};
	if(this.MonthofBirth<1 | this.MonthofBirth>12){return 'YOU ENTERED A WRONG DIGIT FOR MONTH'};

}

ZodiacSignProperties(){//computes the zodaic signs and outputs the result
if (
	(this.MonthofBirth===1 && (this.dayofBirth>=20 && this.dayofBirth<=31)) ||
	(this.MonthofBirth===2) && (this.dayofBirth>0 && (this.dayofBirth<=18)))
	{const AQUARIUS={'ZodiacSign':'AQUARIUS','Elements':'AIR','COLOR':'LIGHT-BLUE,SILVER','DAY':'SATURDAY'};return AQUARIUS};
if (
	(this.MonthofBirth===2 && (this.dayofBirth>=19 && this.dayofBirth<=29)) ||
	(this.MonthofBirth===3) && (this.dayofBirth>0 && (this.dayofBirth<=20)))
	{const PISCES={'ZodiacSign':'PISCES','Elements':'WATER','COLOR':'PURPLE,LILAC','DAY':'THURSDAY'}; return PISCES};

if (
	(this.MonthofBirth===3 && (this.dayofBirth>=21 && this.dayofBirth<=31)) ||
	(this.MonthofBirth===4) && (this.dayofBirth>0 && (this.dayofBirth<=19)))
	{const ARIES={'ZodiacSign':'ARIES','Elements':'FIRE','COLOR':'RED','DAY':'TEUSDAY'}; return ARIES};

if (
	(this.MonthofBirth===4 && (this.dayofBirth>=20 && this.dayofBirth<=31)) ||
	(this.MonthofBirth===5) && (this.dayofBirth >0 && (this.dayofBirth<=20)))
	{const TAURUS={'ZodiacSign':'TAURUS','Elements':'EARTH','COLOR':'GREEN,PINK','DAY':'FRIDAY AND MONDAY'}; return TAURUS};
if (
	(this.MonthofBirth===5 && (this.dayofBirth>=21 && this.dayofBirth<=31)) ||
	(this.MonthofBirth===6) && (this.dayofBirth>0 && (this.dayofBirth<=20)))
	{const GEMINI={'ZodiacSign':'GEMINI','Elements':'AIR','COLOR':'YELLOW,LIGHT-GREEN','DAY':'WEDNESDAY'}; return GEMINI};
if (
	(this.MonthofBirth===6 && (this.dayofBirth>=21 && this.dayofBirth<=30)) ||
	(this.MonthofBirth===7) && (this.dayofBirth>0 && (this.dayofBirth<=22 )))
	{const CANCER={'ZodiacSign':'CANCER','Elements':'WATER','COLOR':'WHITE','DAY':'SATURDAY AND THURSDAY'}; return CANCER};
if (
	(this.MonthofBirth===7 && (this.dayofBirth>=23 && this.dayofBirth<=31)) ||
	(this.MonthofBirth===8) && (this.dayofBirth>0 && (this.dayofBirth<=22)))
		{const LEO={'ZodiacSign':'LEO','Elements':'FIRE','COLOR':'GOLD,YELLOW,ORANGE','DAY':'SUNDAY'}; return LEO};

if (
	(this.MonthofBirth===8 && (this.dayofBirth>=23 && this.dayofBirth<=31)) || 
	(this.MonthofBirth===9) &&(this.dayofBirth>0 && (this.dayofBirth<=22)))
		{const VIRGO={'ZodiacSign':'VIRGO','Elements':'EARTH','COLOR':'GREY,BEIGE,PALE-YELLOW','DAY':'SATURDAY'}; return VIRGO};

if (

	(this.MonthofBirth===9 && (this.dayofBirth>=23 && this.dayofBirth<=31)) ||
	(this.MonthofBirth===10) && (this.dayofBirth>0 && (this.dayofBirth<=22)))
		{const LIBRA={'ZodiacSign':'LIBRA','Elements':'AIR','COLOR':'PINK,GREEN','DAY':'FRIDAY'}; return LIBRA};
if (
	(this.MonthofBirth===10 && (this.dayofBirth>=23 && this.dayofBirth<=31)) ||
	(this.MonthofBirth===11) && (this.dayofBirth>0 && (this.dayofBirth<=21)))
		{const SCORPIO={'ZodiacSign':'SCORPIO','Elements':'WATER','COLOR':'SCARLET RED','DAY':'TUESDAY'}; return SCORPIO};
if (
	(this.MonthofBirth===11 && (this.dayofBirth>=22 && this.dayofBirth<=31)) ||
	(this.MonthofBirth===12) && (this.dayofBirth>0 && (this.dayofBirth<=21)))
		{const SAGITTARIUS={'ZodiacSign':'SAGITTARIUS','Elements':'FIRE','COLOR':'BLUE','DAY':'THURSDAY'}; return SAGITTARIUS};
if (
	(this.MonthofBirth===12 && (this.dayofBirth>=22 && this.dayofBirth<=31)) ||
	(this.MonthofBirth===1) && (this.dayofBirth>0 && (this.dayofBirth<=19)))
		{const CAPRICON={'ZodiacSign':'CAPRICON','Elements':'EARTH','COLOR':'BROWN,BLACK','DAY':'SATURDAY'}; return VIRGO};


}
}

class PersonalInfo extends Zodiac{//a class that inherits Zodiac computes the age of individual
constructor(YearofBirth,MonthofBirth,dayofBirth,firstname){super();
if (typeof(YearofBirth)!==Number){throw new Error('wrong value')};
if (typeof(MonthofBirth)!==Number){throw new Error('wrong value')};
if (typeof(dayofBirth)!==Number){throw new Error('wrong value')};
if (typeof(firstname)!==String){throw new Error('wrong value')};
const Dob=new Date(Date.UTC(YearofBirth,(MonthofBirth-1),dayofBirth));
this.MonthofBirth= Dob.getMonth()+1;
this.dayofBirth=Dob.getDate();
this.YearofBirth=Dob.getFullYear()-2;//had to do this because output from date was offset by 2 years, couldnt get around that
this.firstname=firstname;
	}
Age(){
let todaysDate=new Date();
const age=todaysDate.getFullYear()-this.YearofBirth;
return age;

}
Name(){
	return this.firstname
}

}
module.exports= PersonalInfo
