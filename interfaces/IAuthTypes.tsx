export interface LoginData {
    username: string;
    password: string;
  }
  
  export interface AuthContextType {
    loginData: LoginData;
    setLoginData: (data: LoginData) => void;
  }
  