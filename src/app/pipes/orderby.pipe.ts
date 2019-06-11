import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appObjectArraySortBy'
})
export class ObjectArraySortByPipe implements PipeTransform {
  transform(array: Array<any> = [], property: string): any {
    if (array.length === 0 || property === '') {
      return array;
    }

    const compare = (a, b) => {
      if (typeof a[property] === 'number' && typeof b[property] === 'number') {
        return a[property] - b[property];
      }
      return `${a[property]}`.localeCompare(`${b[property]}`);
    };
    return array.sort(compare);
  }

}
