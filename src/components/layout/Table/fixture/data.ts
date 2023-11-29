// Dummy data for the table component storybook

export type MockDataRow = {
  name: string
  age: number
  job: string
  pets: {
    dogs: number
    cats: number
    turtles: number
  }
  gender: string
}

export const data: MockDataRow[] = [
  {
    name: 'John Doe',
    age: 30,
    job: 'Software Engineer',
    pets: {
      dogs: 1,
      cats: 2,
      turtles: 0,
    },
    gender: 'male',
  },
  {
    name: 'Jane Doe',
    age: 25,
    job: 'Software Engineer',
    pets: {
      dogs: 0,
      cats: 1,
      turtles: 1,
    },
    gender: 'female',
  },
  {
    name: 'Emily Smith',
    age: 28,
    job: 'Product Manager',
    pets: {
      dogs: 0,
      cats: 0,
      turtles: 5,
    },
    gender: 'female',
  },
  {
    name: 'Michael Johnson',
    age: 35,
    job: 'Data Scientist',
    pets: {
      dogs: 2,
      cats: 3,
      turtles: 1,
    },
    gender: 'male',
  },
  {
    name: 'Sarah Brown',
    age: 22,
    job: 'UX Designer',
    pets: {
      dogs: 1,
      cats: 1,
      turtles: 0,
    },
    gender: 'female',
  },
  {
    name: 'David Wilson',
    age: 40,
    job: 'Project Manager',
    pets: {
      dogs: 3,
      cats: 2,
      turtles: 2,
    },
    gender: 'male',
  },
  {
    name: 'Olivia Davis',
    age: 27,
    job: 'Marketing Specialist',
    pets: {
      dogs: 1,
      cats: 0,
      turtles: 3,
    },
    gender: 'female',
  },
  {
    name: 'Chris Miller',
    age: 32,
    job: 'Frontend Developer',
    pets: {
      dogs: 2,
      cats: 1,
      turtles: 1,
    },
    gender: 'male',
  },
  {
    name: 'Ella Turner',
    age: 29,
    job: 'Graphic Designer',
    pets: {
      dogs: 0,
      cats: 2,
      turtles: 0,
    },
    gender: 'female',
  },
  {
    name: 'Alex Harris',
    age: 34,
    job: 'Sales Manager',
    pets: {
      dogs: 1,
      cats: 0,
      turtles: 4,
    },
    gender: 'male',
  },
]

export type Pets = {
  dogs: number
  cats: number
  turtles: number
}

export type Gender = 'male' | 'female' | 'undisclosed'

export type Person = {
  name: string
  age: number
  job: string
  pets: Pets
  gender: Gender
}
