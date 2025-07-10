type Hair = {
  color: string;
  type: string;
};

type Address = {
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  timezone: string;
};

type Bank = {
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};

type Company = {
  department: string;
  name: string;
  title: string;
  address: Address;
};

type Crypto = {
  coin: string;
  wallet: string;
  network: string;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  address: Address;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: string;
};

export type UserResponse = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};

export type DeptSummary = {
  male: number;
  female: number;
  ageRange: string;
  hair: Record<string, number>;
  addressUser: Record<string, string>;
};

export type TransformedData = Record<string, DeptSummary>;
