import { Pipe, PipeTransform } from '@angular/core';

@Pipe({

  // pipe operator
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allContacts:any[],searchKey:string,propertyName:string): any[] {

    // array after transform
    const result:any = []

    if(!allContacts || searchKey=='' || propertyName=='') {
      return allContacts
    }
    allContacts.forEach((contact:any)=>{
      if(contact[propertyName].trim().toLowerCase().includes(searchKey.trim().toLocaleLowerCase())) {
        result.push(contact)
      }
    })

    return result;
  }

}
