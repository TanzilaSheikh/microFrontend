import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MicroLibService {

  constructor() { }
  greet(name: string): string {
    return `Hello ${name} from Micro Frontend Library`;
  }
}

