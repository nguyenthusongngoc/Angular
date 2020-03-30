import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'editContent'
})
export class EditContentPipe implements PipeTransform {

  transform(content: any, args: any): any {
    return content.substr(0, args) + '...';
  }

}
