function carInfo(manufacturer: string, model: string, ...options: any[]): any {
    const car = { manufacturer, model };
    options.forEach(option => {
      const [key, value] = option;
      car[key] = value;
    });
    return car;
  }
  const car = carInfo("Toyota", "Corolla", ["color", "blue"], ["features", ["backup camera", "lane departure warning"]]);
  console.log(car);
    