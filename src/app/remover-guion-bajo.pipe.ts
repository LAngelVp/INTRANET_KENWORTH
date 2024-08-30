import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removerGuionBajo',
  standalone: true
})
export class RemoverGuionBajoPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/_/g, ' '); // Reemplaza los guiones bajos por espacios
  }

}
