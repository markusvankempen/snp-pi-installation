'use strict';

/**
 * Controls single digit 7-segment display // GPIOPorts 4,17,27,22
 * @param {number} pinA
 * @param {number} pinB
 * @param {number} pinC
 * @param {number} pinD
 * @param {number} pinE
 * @param {number} pinF
 * @param {number} pinG
 * @param {number} pinDP
**8LED ppin#

 //                           A B  C   d
var draw = new segment4LED(Gpio,17,4, 23, 24, 25, 27, 22, 18,2); // OR your own wiring options
See   diagram
https://github.com/sketchthat/7-segment-node
 */
var draw = function(Gpio, pinA, pinB,  pinC,  pinD,  pinE,  pinF,  pinG , pinDP,led) {
    var ledOn = 0;
    var ledOff = 1;

    var configA = new Gpio(pinA, {mode: Gpio.output});
    var configB = new Gpio(pinB, {mode: Gpio.output});
    var configC = new Gpio(pinC, {mode: Gpio.output});
    var configD = new Gpio(pinD, {mode: Gpio.output});
    var configE = new Gpio(pinE, {mode: Gpio.output});
    var configF = new Gpio(pinF, {mode: Gpio.output});
    var configG = new Gpio(pinG, {mode: Gpio.output});
    var configDP = new Gpio(pinDP, {mode: Gpio.output});
    var configLED = new Gpio(led, {mode: Gpio.output});

    //myblinky();

    var drawReset = function(LED) {
	if(LED==0)
		configLED.digitalWrite(1);
      configA.digitalWrite(ledOff);
          configB.digitalWrite(ledOff);
              configC.digitalWrite(ledOff);
                  configD.digitalWrite(ledOff);
                      configE.digitalWrite(ledOff);
                            configF.digitalWrite(ledOff);
                                    configG.digitalWrite(ledOff);
					      configDP.digitalWrite(ledOff);

    };

   this.setA = function(v)
   {
	configA.digitalWrite(v)
   }

     this.setB = function(v)
   {
        configB.digitalWrite(v)
   }

  this.setC = function(v)
   {
        configC.digitalWrite(v)
   }

  this.setD = function(v)
   {
        configD.digitalWrite(v)
   }

  this.setE = function(v)
   {
        configE.digitalWrite(v)
   }

  this.setF = function(v)
   {
        configF.digitalWrite(v)
   }

  this.setG = function(v)
   {
        configG.digitalWrite(v)
   }

  this.setDP = function(v)
   {
        configDP.digitalWrite(v)
   }

   this.setAll = function(a,b,c,d,e,f,g,dp)
   {
     drawReset();
console.log(">>>>>>>> setting All LED "+a+b+c+d+e+f+g+dp);
              configA.digitalWrite(a);
          configB.digitalWrite(b);
              configC.digitalWrite(c);
                  configD.digitalWrite(d);
                      configE.digitalWrite(e);
                            configF.digitalWrite(f);
                                    configG.digitalWrite(g);
                                              configDP.digitalWrite(dp);
	var n=0;
	if(a == 1 && b ==1 && c==1 && d==0 && e==0 && f ==0 && g==0)
	{
		n = 7;
	}else if(a == 1 && b ==1 && c==1 && d==1 && e==1 && f ==1 && g==1){
		n = 0;
	}else if(a == 0 && b ==1 && c==1 && d==1 && e==1 && f ==1 && g==1){
                n = 1;
  }else if(a == 1 && b ==1 && c==0 && d==1 && e==1 && f ==0 && g==1){
                n = 2;
  }else if(a == 1 && b ==1 && c==1 && d==1 && e==0 && f ==0 && g==1){
                n = 3;
  }else if(a == 0 && b ==0 && c==1 && d==0 && e==0 && f ==1 && g==1){
                n = 4;
  }else if(a == 1 && b ==0 && c==0 && d==1 && e==0&& f ==0 && g==1){
                n = 5;
}else if(a == 0 && b ==0 && c==1 && d==1 && e==1 && f ==1 && g==1){
                n = 6;
}else if(a == 1 && b ==1 && c==1 && d==1 && e==1 && f ==1 && g==1){
                n = 8;

}else if(a == 1 && b ==1 && c==1 && d==1 && e==0 && f ==1 && g==1){
                n = 9;
        }
	return(n);



   }

   this.setLEDOn = function(pin,v)
   {
 	var mypin = new Gpio(pin, {mode: Gpio.output});
	mypin.digitalWrite(v);
   }

   this.setPinOn = function(v)
   {
 	var mypin = new Gpio(pinDP, {mode: Gpio.output});
	 	mypin.digitalWrite(ledOn);
   }

   this.setPinOff = function(v)
   {
        var mypin = new Gpio(pinDP, {mode: Gpio.output});
        	mypin.digitalWrite(ledOff);
   }

    this.reset = function() {
      drawReset();
    }

    var    runRefresh = function(i) {
        drawReset();

        if (i == 0) {
          configA.digitalWrite(ledOn);
        } else if (i == 1) {
           configB.digitalWrite(ledOn);
         } else if (i == 2) {
            configC.digitalWrite(ledOn);
          } else if (i == 3) {
             configD.digitalWrite(ledOn);
           } else if (i == 4) {
              configE.digitalWrite(ledOn);
            } else if (i == 5) {
               configF.digitalWrite(ledOn);
                // i = -1;
              } else if (i == 6) {
               	configF.digitalWrite(ledOn);
		}
    }


    var myblinky = function(){
    var i = 0;

        var myint = setInterval(function() {
            runRefresh(i);
            if(i>=6)
                {
                 clearInterval(myint);
                         drawReset();
                }
            else
                i++;
        }, 250);
 configDP.digitalWrite(ledOn);
  }


    this.rotate = function() {
        var i = 0;

        var myint = setInterval(function() {
            runRefresh(i);
            if(i>=6)
		{
            	 clearInterval(myint);

drawReset();
		}
	    else
		i++;
        }, 250);
 configDP.digitalWrite(ledOn)
    }

    var blink =  function(number)
	{
	 drawReset();
                       configA.digitalWrite(ledOn);
                       configB.digitalWrite(ledOn);
                       configC.digitalWrite(ledOn);
                       configD.digitalWrite(ledOn);
                       configE.digitalWrite(ledOn);
                       configF.digitalWrite(ledOn);
                       configG.digitalWrite(ledOn);
		      configDP.digitalWrite(ledOn);
/*
	 drawReset();
  configA.digitalWrite(ledOn);
                       configB.digitalWrite(ledOn);
                       configC.digitalWrite(ledOn);
                       configD.digitalWrite(ledOn);
                       configE.digitalWrite(ledOn);
                       configF.digitalWrite(ledOn);
                       configG.digitalWrite(ledOn);
			    configDP.digitalWrite(ledOn);
  drawReset();
  configA.digitalWrite(ledOn);
                       configB.digitalWrite(ledOn);
                       configC.digitalWrite(ledOn);
                       configD.digitalWrite(ledOn);
                       configE.digitalWrite(ledOn);
                       configF.digitalWrite(ledOn);
                       configG.digitalWrite(ledOn);
*/
	}

    this.display = function(number,LED) {
        drawReset(LED);
 var n=0;
        if (number == '0') {
                  configA.digitalWrite(ledOn);
                  configB.digitalWrite(ledOn);
                  configC.digitalWrite(ledOn);
                  configD.digitalWrite(ledOn);
                  configE.digitalWrite(ledOn);
                  configF.digitalWrite(ledOn);

                } else if (number == '1') {
                      configB.digitalWrite(ledOn);
                      configC.digitalWrite(ledOn);
 	 n=1;
       } else if (number == '2') {

 n=2;
                  configA.digitalWrite(ledOn);
                  configB.digitalWrite(ledOn);
                  configD.digitalWrite(ledOn);
                  configE.digitalWrite(ledOn);
                  configG.digitalWrite(ledOn);
                   } else if (number == '3') {
 n=3;
                     configA.digitalWrite(ledOn);
                     configB.digitalWrite(ledOn);
                     configC.digitalWrite(ledOn);
                     configD.digitalWrite(ledOn);
                     configG.digitalWrite(ledOn);
                   }
 else if (number == '4') {
 n=4;
                     configB.digitalWrite(ledOn);
                     configC.digitalWrite(ledOn);
                    configF.digitalWrite(ledOn);
                     configG.digitalWrite(ledOn);

                    } else if (number == '5') {
                      configA.digitalWrite(ledOn);
 n=5;
                      configC.digitalWrite(ledOn);
                      configD.digitalWrite(ledOn);

                      configF.digitalWrite(ledOn);
                      configG.digitalWrite(ledOn);
                    } else if (number == '6') {
                      configA.digitalWrite(ledOn);
 n=6;
                      configC.digitalWrite(ledOn);
                      configD.digitalWrite(ledOn);
                      configE.digitalWrite(ledOn);
                      configF.digitalWrite(ledOn);
                      configG.digitalWrite(ledOn);
                  } else if (number == '7') {
 n=7;
                configA.digitalWrite(ledOn);
                    configB.digitalWrite(ledOn);
                    configC.digitalWrite(ledOn);
                     } else if (number == '8') {
 n=8;
                   configA.digitalWrite(ledOn);
                       configB.digitalWrite(ledOn);
                       configC.digitalWrite(ledOn);
                       configD.digitalWrite(ledOn);
                       configE.digitalWrite(ledOn);
                       configF.digitalWrite(ledOn);
                       configG.digitalWrite(ledOn);
                   } else if (number == '9') {
 n=9;
                 configA.digitalWrite(ledOn);
                     configB.digitalWrite(ledOn);
                     configC.digitalWrite(ledOn);
                     configD.digitalWrite(ledOn);

                     configF.digitalWrite(ledOn);
                     configG.digitalWrite(ledOn);
        } else if (number == '.') {
                configDP.digitalWrite(ledOn);

       }
return n;
    };
};

module.exports = draw;

