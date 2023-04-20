import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class  AlertService {

  constructor(){}

    error(message: string){
        Swal.fire({
            icon: 'error',
            text: message,
          })
    }
}