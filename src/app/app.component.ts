import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PasswordOptionsComponent } from './components/password-options/password-options.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  @ViewChild('passwordOptions') passwordOptions!: PasswordOptionsComponent;

  password: string = '';

  newPassword(password: string) {
    setTimeout(() => {
      this.password = password;
    });  
  }

  regeneratePassword(){
    this.passwordOptions.generatePassword();
  }
}
