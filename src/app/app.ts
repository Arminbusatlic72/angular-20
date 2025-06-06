import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
// import { User } from './user/user';
// import { DataBinding } from './data-binding/data-binding';
// import { Directives } from './directives/directives';
// import { StructuralDirectiveNgifVsIf } from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if';
// import { StructuralDirectiveNgforVsFo } from './structural-directive-ngfor-vs-fo/structural-directive-ngfor-vs-fo';
// import { StructuralDirectiveNgswitchVsSwitch } from './structural-directive-ngswitch-vs-switch/structural-directive-ngswitch-vs-switch';
// import { AttributeDirectives } from './attribute-directives/attribute-directives';
// import { Signals } from './signals/signals';
// import { LinkedSignals } from './linked-signals/linked-signals';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    // User,
    // DataBinding,
    // Directives,
    // StructuralDirectiveNgifVsIf,
    // StructuralDirectiveNgforVsFo,
    // StructuralDirectiveNgswitchVsSwitch,
    // AttributeDirectives,
    // Signals,
    // LinkedSignals,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'angular_20';
}
