export interface UserInterface {
  id: number;
  email: string;
  username: string;
  password: string;
  name: NameInterface;
  address?: AddressInterface;
  phone?: string;
}

export interface AddressInterface {
  city?: string;
  street?: string;
  number?: number;
  zipcode?: string;
  geolocation?: GeolocationInterface;
}

export interface GeolocationInterface {
  lat?: string;
  long?: string;
}

export interface NameInterface {
  firstname: string;
  lastname: string;
}
