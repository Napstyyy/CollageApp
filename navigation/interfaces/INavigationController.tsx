import { RootStackParamList } from "@/navigation/routes";

export interface INavigationController {
  navigate(route: keyof RootStackParamList): void;
}