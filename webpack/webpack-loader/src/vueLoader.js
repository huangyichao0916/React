module.exports = function(sourceCode){
    console.log(sourceCode)
    const reg1 = /\<template\>(.+)\<\/template\>/s;
    const content = sourceCode.match(reg1)[1];
    return `
        import React from 'react';

        export default function Comp(){
            return(
                ${content}
            )
        }
    `
}