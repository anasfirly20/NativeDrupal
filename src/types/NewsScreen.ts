import { RootStackParamList } from "../types/types";
import { NavigationProp, RouteProp } from "@react-navigation/native";

export interface Props {
    navigation: NavigationProp<RootStackParamList, "News">;
    route: RouteProp<RootStackParamList, "News">;
  }

export interface UserData {
    username: string;
    avatar_url: string;
  }