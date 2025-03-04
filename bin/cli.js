#!/usr/bin/env node

import {execSync} from 'child_process' 

const runCommand = command =>{
               try{
                              execSync(`${command}` , {stdio: "inherit"})
               }
               catch(e){
                              console.error(`failed to execute ${command}`, e)
                              return false
               }
               return true ; 
}
const repoName = process.argv[2]; 

const gitCheckOutCommand = `git clone https://github.com/nikhilsinghrathore1/NIko_Ag_arima.git`;
const installDepsCommand = `cd ${repoName} && npm install`
console.log(`cloning the repository with name ${repoName}`)

console.log(repoName)
const checkedOut = runCommand(gitCheckOutCommand)
console.log(checkedOut)

if(!checkedOut) process.exit(-1)

console.log(`installing the depandancy for ${repoName}`)


const installDeps = runCommand(installDepsCommand)

if(!installDeps) process.exit(-1)

console.log("its done now ")
