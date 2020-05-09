export interface ICar {
  color: string;
  year: number;
}

class BmwCar implements ICar {
  color: string = "red";
  year: number = 2001;
}

class AudiCar implements ICar {
  color: string = "blue";
  year: number = 2002;
}

const cars: Array<ICar> = [new BmwCar(), new AudiCar()];
export {  cars };
