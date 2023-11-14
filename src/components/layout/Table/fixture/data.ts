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
