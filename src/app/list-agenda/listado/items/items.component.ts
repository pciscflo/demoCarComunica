import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  //variable puente entre (listado.component) e (items.component)
  @Input() productTitle: String =""; //pudo ser cualquier objeto hasta un array

}
