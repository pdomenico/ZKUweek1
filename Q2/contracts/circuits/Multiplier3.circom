pragma circom 2.0.0;

// [assignment] Modify the circuit below to perform a multiplication of three signals

template Multiplier3 () {  

   // Declaration of signals.  
   signal input a;  
   signal input b;
   signal input c;
   signal i;
   signal output d;  

   // Constraints.  
   i <== a * b;
   d <== i * c;
}

component main = Multiplier3();