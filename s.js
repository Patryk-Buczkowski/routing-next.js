const objectOfNames = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  address: {
    street: 'Main Street',
    number: '123',
    city: 'New York',
  },
  hobbies: ['reading', 'swimming', 'running'],
  isMarried: true,
  hasChildren: false,
  job: null,
  car: undefined,
  birthDate: new Date(1990, 1, 1),
  salary: 1000.5,
  description: 'Hello World!',
  isStudent: false,
  isWorker: true,
  isUnemployed: false,
  isRetired: false,
  isRich: false,
  isPoor: true,
  isHappy: true,
  isSad: false,
  isHealthy: true,
  isSick: false,
  isTall: true,
  isShort: false,
  isThin: true,
  isFat: false,
  isOld: true,
  isYoung: false,
  isSmart: true,
  isDumb: false,
  isFunny: true,
  isBoring: false,
  isNice: true,
  isMean: false,
};

Object.entries(objectOfNames).forEach(([key, value]) => {
  if (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    !(value instanceof Date)
  ) {
    Object.entries(value).forEach(([key, value]) => {
      console.log('key:', key, 'valueObject:', value);
    });
  } else {
    console.log('key:', key, 'value:', value);
  }
});
