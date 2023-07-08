export type RootStackParamList = {
    Home: undefined;
    News: { handleAction: () => void };
    NewsDetails: { id: number };
    // add other screens and their params as needed
  };