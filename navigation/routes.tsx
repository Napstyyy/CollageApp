// navigation/routes.ts
export const Routes = {
  home: 'home',
  explore: 'explore',
  clientsLogin: 'clientsLogin',
  login: 'login',
  // Agrega más rutas según sea necesario
} as const;

export type RootStackParamList = {
  [Routes.home]: undefined;
  [Routes.explore]: undefined;
  [Routes.clientsLogin]: undefined;
  [Routes.login]: undefined;
  // Agrega más rutas según sea necesario
};