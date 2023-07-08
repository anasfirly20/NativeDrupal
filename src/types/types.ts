import { NavigationProp, RouteProp } from "@react-navigation/native";

type RootStackParamList = {
    Home: undefined;
    News: { handleAction: () => void };
    NewsDetails: { id: number };
  };
export interface IProps {
    navigation: NavigationProp<RootStackParamList, "News">;
    route: RouteProp<RootStackParamList, "News">;
  }
export interface IUserData {
    username: string;
    avatar_url: string;
  }

export interface INewsDetail {
  title: string,
  created_at: any,
  image_url: string,
  short_text: string
};
