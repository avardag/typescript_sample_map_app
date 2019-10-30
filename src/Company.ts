import faker from 'faker';
import { Mappable } from './Map';

export class Company implements Mappable{
  companyName: string;
  catchPhrase: string;
  location:{
    lat: number;
    lng: number;
  }
  color: string;
  
  constructor(){
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
    this.color = 'red'
  }
  markerContent():string{
    return `
    <div>
      <h2>Company name: ${this.companyName}<h2>
      <h4>Our catchphrase: ${this.catchPhrase}</h4>
    </div>
    `
  }
}