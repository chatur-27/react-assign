import React from 'react';
function Circle(){
    var l=6;
    var r=1;
    return (2*3.14*r*r);
}
function Triangle(){
    var b=2;
    var h=4;
    return (0.5*b*h);
}
function Square(){
    var a=6;
    return (a*a);
}
function Squareper(){
    var a=6;
    return (4*a);
}
function Rombus(){
    var b=9;
    var h=7;
    return (b*h);
}
export {Circle,Triangle,Square,Squareper,Rombus};