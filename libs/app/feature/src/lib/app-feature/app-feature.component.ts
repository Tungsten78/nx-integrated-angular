import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiComponent } from '@nx-integrated-angular/shared/ui';

@Component({
  selector: 'nx-integrated-angular-app-feature',
  standalone: true,
  imports: [CommonModule, SharedUiComponent],
  template: ` 
  <div class="w-16 h-16 bg-green-500">feature</div>
  <nx-integrated-angular-shared-ui></nx-integrated-angular-shared-ui>`,
  styles: [],
})
export class AppFeatureComponent {}
