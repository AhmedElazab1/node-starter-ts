import { User } from '../../../generated/client/client';
import { UserResponseDTO } from './auth.DTOs';

export function sanitizeUser(user: User): UserResponseDTO;
export function sanitizeUser(user: User[]): UserResponseDTO[];

export function sanitizeUser(user: User | User[]): UserResponseDTO | UserResponseDTO[] {
  if (Array.isArray(user)) {
    return user.map((u) => sanitizeUser(u));
  }

  return {
    id: String(user.id),
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    role: user.role,
  };
}
