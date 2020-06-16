import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with <img src="assets/images/8-bit-heart.png" height="20" width="20"> by <b>Abid Zaidi</b> 2020</span>
    <div class="socials">
      <a href="https://github.com/aliabidzaidi" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.linkedin.com/in/abid-zaidi-2775a8179/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
