pragma circom 2.0.0;

include "../../node_modules/circomlib/circuits/comparators.circom";
include "../../node_modules/circomlib/circuits/gates.circom";
include "../../node_modules/circomlib-matrix/circuits/matElemSum.circom";// hint: you can use more than one templates in circomlib-matrix to help you

template SystemOfEquations(n) { // n is the number of variables in the system of equations
    signal input x[n]; // this is the solution to the system of equations
    signal input A[n][n]; // this is the coefficient matrix
    signal input b[n]; // this are the constants in the system of equations
    signal output out; // 1 for correct solution, 0 for incorrect solution

    // [bonus] insert your code here
    component and[n];
    component sum[n];
    component equal[n];
    for (var i = 0; i < n; i++) {
        sum[i] = matElemSum(n, 1);
        equal[i] = IsEqual();
        and[i] = AND();

        for (var j = 0; j < n; j++) {
            sum[i].a[j][0] <== A[i][j] * x[j];
        }
        
        equal[i].in[0] <== sum[i].out;
        equal[i].in[1] <== b[i];

        and[i].a <== i==0 ? 1 : and[i-1].out;

        and[i].b <== equal[i].out;
    }
    out <== and[n-1].out;
}

component main {public [A, b]} = SystemOfEquations(3);