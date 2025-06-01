import { AUTH_TOKEN_KEY_NAME, USER_EMAIL_KEY_NAME, USER_IMAGE_KEY_NAME } from '../const';
import { UserData } from '../types/user-data';

export const getUserEmail = (): string => (
  localStorage.getItem(USER_EMAIL_KEY_NAME) ?? ''
);

export const getUserImageUrl = (): string => (
  localStorage.getItem(USER_IMAGE_KEY_NAME) ?? ''
);

export const saveUserData = ({token, email, avatarUrl }: UserData): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
  localStorage.setItem(USER_EMAIL_KEY_NAME, email);
  localStorage.setItem(USER_IMAGE_KEY_NAME, avatarUrl);
};

export const dropUserData = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
  localStorage.removeItem(USER_EMAIL_KEY_NAME);
  localStorage.removeItem(USER_IMAGE_KEY_NAME);
};
