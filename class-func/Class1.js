import React from 'react';
class Circle1 extends React.Component{
    render(){
    var l=2;
    var r=3;
    return (2*3.14*r*r);
}
}
class Triangle1 extends React.Component{
    render(){
        var b=2;
        var h=8;
        return (0.5*b*h);
}
}
class Square1 extends React.Component{
    render(){
        var a=5;
        return (a*a);
}
}
class Squareper1 extends React.Component{
    render(){
        var a=9;
        return (4*a);
}
}
class Rombus1 extends React.Component{
    render(){
        var b=2;
        var h=5;
        return (b*h);
}
}
export {Circle1,Triangle1,Square1,Squareper1,Rombus1};