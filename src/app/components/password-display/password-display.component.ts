import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-password-display',
  standalone: false,
  templateUrl: './password-display.component.html',
  styleUrl: './password-display.component.scss'
})
export class PasswordDisplayComponent {

  @Input() password: string | undefined;
  @Output() regeneratePassword = new EventEmitter<string>();
  copied = false;

  
  copyToClipboard() {
    if(!this.password) return;
    navigator.clipboard.writeText(this.password).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 1500);
    }).catch(err => {
      console.error('Error al copiar:', err);
    });
  }

  regenerateNewPassword(){
    this.regeneratePassword.emit();
  }

}
