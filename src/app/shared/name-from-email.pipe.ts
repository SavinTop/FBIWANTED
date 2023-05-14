import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFromEmail'
})
export class NameFromEmailPipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {
	  const temp = value.split("@")
	  if(temp.length<2) return "Error"
    return temp[0];
  }

}
