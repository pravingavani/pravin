import { Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';

@Pipe({
  name: 't1Case'
})
export class T1CasePipe implements PipeTransform {

  transform(value: String): any {
    if(!value) return null;
    let p=[ 'of','the'];
    let words = value.split(' ');
    for(var i = 0;i<words.length;i++){
      if (p.includes(words[i]))
     words[i]= words[i].toLowerCase();
    else{
      words[i]= words[i].substr(0,1).toUpperCase()+words[i].substr(1).toLowerCase();
    }
    } 
    return words.join(' ');
  }

}
