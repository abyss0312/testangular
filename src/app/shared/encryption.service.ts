import { Injectable } from "@angular/core";
import * as CryptoJS from 'crypto-js';


@Injectable({
    providedIn: 'root'
  })
  export class EncryptionService {

    private tokenFromUI: string = "0123456789123456";
  
    constructor() { }
    
    
    encryptText(text: string) {

      let _key = CryptoJS.enc.Latin1.parse(this.tokenFromUI);
      let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
      let encrypted = CryptoJS.Rabbit.encrypt(
        JSON.stringify(text), _key, {
          keySize: 16,
          iv: _iv,
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        });
      return encrypted.toString();
    }
    decryptText(text:string) {
      let _key = CryptoJS.enc.Latin1.parse(this.tokenFromUI);
      let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
  
      return  CryptoJS.Rabbit.decrypt(
        text, _key, {
          keySize: 16,
          iv: _iv,
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        }).toString(CryptoJS.enc.Utf8);
    }
  }
  