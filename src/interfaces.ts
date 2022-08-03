interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  date: Date;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: false,
  date: new Date(),
  // summary: function () {
  //   return 'summary';
  // },
  summary(): string {
    return 'sfdf';
  },
};

const printVehicle = (v: Vehicle) => {
  console.log(v.broken);
  console.log(v.name);
  console.log(v.year);
};

printVehicle(oldCivic);
