import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value=''
  length = 0;
  password ='';
  includeLetter = false;
  includeNumber =false;
  includeSymbol =false;

  onChangeLength(value:string){
   const parseValue =parseInt(value);
   if(!isNaN(parseValue)){
    this.length=parseValue;
    console.log(this.length);
   }
  }

onChangeUseLetter(){
this.includeLetter=!this.includeLetter;
  }
  onChangeUseNumber(){
 this.includeNumber =!this.includeNumber;
  }
  onChangeUseSymbol(){
    this.includeSymbol =!this.includeSymbol;
  }
onButtonClick(){
 const numbers ='1234567890';
 const letters = 'abcdefghijklmnopqrstuvwxyz';
 const symbols = '!@#$%^&*()';
 let validChars ='';
 if(this.includeLetter){
  validChars+=letters;
 }
 if(this.includeNumber){
  validChars+=numbers;
 }
 if(this.includeSymbol){
  validChars+=symbols;
 }
 let generatedPassword ='';
 for(let i=0;i<this.length;i++){
  const index = Math.floor(Math.random()*validChars.length);
  generatedPassword+=validChars[index];
 }
 this.password=generatedPassword;
 console.log(this.password)
}
}
