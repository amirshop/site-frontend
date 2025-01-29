export interface UserModel {
  id: number;
  email: string;
  username: string;
  password: string;
  name: NameModel;
  address?: GeolocationModel;
  phone?: string;
}

export interface AddressModel {
  city?: string;
  street?: string;
  number?: number;
  zipcode?: string;
  geolocation?: Geolocation;
}

export interface GeolocationModel {
  lat?: string;
  long?: string;
}

export interface NameModel {
  firstname: string;
  lastname: string;
}
