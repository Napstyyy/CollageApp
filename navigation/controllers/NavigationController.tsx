import { INavigationController } from '@/navigation/interfaces/INavigationController';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/navigation/routes'; // Ajusta la ruta según sea necesario

export class NavigationController implements INavigationController {
  private navigation: NavigationProp<RootStackParamList>;

  constructor() {
    this.navigation = useNavigation<NavigationProp<RootStackParamList>>();
  }

  navigate(route: keyof RootStackParamList): void {
    this.navigation.navigate(route);
  }

  goBack(): void {
    this.navigation.goBack();
  }
}