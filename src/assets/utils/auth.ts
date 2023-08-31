import axios from "axios";
import { IAuthResponse } from "../../interfaces/backend.interface";

const key = "AIzaSyA2u4rGhRNqGPV-VAKCvGPYeLsjrI7Ukjk";

async function authentication(
  mode: "signInWithPassword" | "signUp",
  email: string,
  password: string
) {
  try {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${key}`;
    const payload = { email, password, returnSecureToken: true };
    const response = await axios.post(url, payload);
    const authData: IAuthResponse = {
      token: response.data.idToken,
      email: response.data.email,
    }
    return authData;
  } catch (e: any) {
    const createdError = checkError(e);
    if(!!!createdError) return e;
    return createdError;
  }
}

function checkError(error: any) {

  if (error.response && error.response.data && error.response.data.error) {
    const message = error.response.data.error.message;
    switch (message) {
      case "EMAIL_EXISTS":
        return ["apiErrors.emailAlreadyExists.title", "apiErrors.emailAlreadyExists.description"];
      case "EMAIL_NOT_FOUND":
        return ["apiErrors.emailNotFound.title", "apiErrors.emailNotFound.description"];
      case "INVALID_PASSWORD":
        return ["apiErrors.invalidPassword.title", "apiErrors.invalidPassword.description"];
      default:
        return "";
    }
  }
  return "";
}

export async function login(email: string, password: string) {
  try {
    return await authentication("signInWithPassword", email, password);
  } catch (e) {
    return e;
  }
}

export async function register(email: string, password: string) {
  try {
    return await authentication("signUp", email, password);
  } catch (e) {
    return e;
  }
}
