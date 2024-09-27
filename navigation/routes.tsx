// navigation/routes.ts
export const Routes = {
  home: 'home',
  explore: 'explore',
  clientsLogin: 'clientsLogin',
  login: 'login',

  // Subrutas accesibles solo desde home
  homeRoutes: {
    reasonableAdjustments: 'home/reasonableAdjustments',
    agenda: 'home/agenda',
    learnings: 'home/learnings',
    subjects: 'home/subjects',
    attendance: 'home/attendance',
    audit: 'home/audit',
    academicAssignment: 'home/academicAssignment',
    idCards: 'home/idCards',
  },

  // Agrega más rutas según sea necesario
} as const;

export type RootStackParamList = {
  [Routes.home]: undefined;
  [Routes.explore]: undefined;
  [Routes.clientsLogin]: undefined;
  [Routes.login]: undefined;

  // Subrutas accesibles solo desde home
  [Routes.homeRoutes.reasonableAdjustments]: undefined;
  [Routes.homeRoutes.agenda]: undefined;
  [Routes.homeRoutes.learnings]: undefined;
  [Routes.homeRoutes.subjects]: undefined;
  [Routes.homeRoutes.attendance]: undefined;
  [Routes.homeRoutes.audit]: undefined;
  [Routes.homeRoutes.academicAssignment]: undefined;
  [Routes.homeRoutes.idCards]: undefined;
  
  // Agrega más rutas según sea necesario
};
