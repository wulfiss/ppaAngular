import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], query: string = '', searchField: string | string[] = []): any[] {
    if (!items || !query) {
      return items;
    }
    
    query = query.trim().toLocaleLowerCase();

    let fields = Array.isArray(searchField) ? searchField : [searchField];
    if (fields.length === 0) {
      fields = Object.keys(items[0] || {});
    }
    return items.filter(item => {
      return fields.some(field => {
        const value = item[field];
        if (typeof value === 'string') {
          return value.toLocaleLowerCase().includes(query);
        }
        return false;
      });
    });
    
  }
}
