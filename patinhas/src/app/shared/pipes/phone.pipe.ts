import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    const splited = value.split('');
    const phone = `(${splited[0]}${splited[1]}) ${splited[2]}${splited[3]}${splited[4]}${splited[5]} - ${splited[6]}${splited[7]}${splited[8]}${splited[9]} `
    return phone;
  }

}
