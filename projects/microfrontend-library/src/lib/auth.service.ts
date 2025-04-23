import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service1Service {
  constructor() {}

  getData(): string {
    return 'Data from Service 1';
  }
}