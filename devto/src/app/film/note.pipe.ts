import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'note'
})
export class NotePipe implements PipeTransform {

  transform(value: any): string {
    if(value==1){
      return "⭐";
    }
    else if(value==2){
      return "⭐⭐";
    }
    else if(value==3){
      return "⭐⭐⭐";
    }
    else if(value==4){
      return "⭐⭐⭐⭐";
    }
    else {
      return "⭐⭐⭐⭐⭐";
    }

  }

}
