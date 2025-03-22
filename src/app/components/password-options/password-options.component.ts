import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-password-options',
  standalone: false,
  templateUrl: './password-options.component.html',
  styleUrl: './password-options.component.scss'
})
export class PasswordOptionsComponent  implements OnInit {

  @Output() passwordGenerated = new EventEmitter<string>();
  password: string = '';
  withUppercase: boolean = true;
  withLowercase: boolean = true;
  withNumbers: boolean = true;
  withSymbols: boolean = true;
  passwordLength: number = 16;

  title = 'password-generator';


  ngOnInit(): void {
    this.generatePassword();
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.password).then(() => {
      alert('Contraseña copiada al portapapeles ✅');
    }).catch(err => {
      console.error('Error al copiar:', err);
    });
  }

  generatePassword(): void {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?ñÑ';
  
    let characterPool = '';
  
    if (this.withUppercase) characterPool += uppercase;
    if (this.withLowercase) characterPool += lowercase;
    if (this.withNumbers) characterPool += numbers;
    if (this.withSymbols) characterPool += symbols;
  
    if (!characterPool) {
      this.password = '⚠️ No character types selected.';
      return;
    }
  
    let generated = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generated += characterPool[randomIndex];
    }
  
    this.password = generated;
    this.passwordGenerated.emit(this.password);
  }
  
  uppercase(){
    this.withUppercase = !this.withUppercase;
    if(!this.atLeastOneChecked()){
      this.withLowercase = true;
    }
    this.generatePassword();
  }

  lowercase(){
    this.withLowercase = !this.withLowercase;
    if(!this.atLeastOneChecked()){
      this.withNumbers = true;
    }
    this.generatePassword();
  }

  numbers(){
    this.withNumbers = !this.withNumbers;
    if(!this.atLeastOneChecked()){
      this.withSymbols = true;
    }
    this.generatePassword();
  }

  symbols(){
    this.withSymbols = !this.withSymbols;
    if(!this.atLeastOneChecked()){
      this.withUppercase = true;
    }
    this.generatePassword();
  }

  atLeastOneChecked(): boolean {
    return this.withUppercase || this.withLowercase || this.withNumbers || this.withSymbols;
  }
}
