import type { TextBoxFormData } from '../types/TextBoxFormData';

export const validUser: TextBoxFormData = {
  fullName: 'Salvador Dali',
  email: 'salvador.dali@example.com',
  currentAddress: '12 Figueres Street, Catalonia',
  permanentAddress: '7 Port Lligat Avenue, Cadaques',
};

export const userWithInvalidEmail: TextBoxFormData = {
  ...validUser,
  email: 'salvador.dali(at)example.com',
};
