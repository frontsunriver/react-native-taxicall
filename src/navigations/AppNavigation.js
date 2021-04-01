import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'

import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
// import Login from "../screens/login/login";
import YandexMap from '../screens/Map/index';
import Order from "./FooterNavigation";
import HistoryDetail from "../screens/Order/History/HistoryDetail";
import AboutScene from '../screens/AboutApp/AboutApp'
import Profile from "../screens/Profile/Profile";
import News from '../screens/News/News';
import NewsDetail from '../screens/News/NewsDetail';
import Payment from '../screens/Payment/Payment'

const MainNavigator = createStackNavigator(
  {
    Map: YandexMap,
    Categories: CategoriesScreen,
    Recipe: RecipeScreen,
    RecipesList: RecipesListScreen,
    Ingredient: IngredientScreen,
    Search: SearchScreen,
    IngredientsDetails: IngredientsDetailsScreen,
    Order: Order,
    HistoryDetail: HistoryDetail,
    AboutApp: AboutScene,
    Profile: Profile,
    News: News,
    NewsDetail: NewsDetail,
    Payment: Payment,
  },
  {
    initialRouteName: 'Map',
    // headerMode: 'float',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
      }
    })
  }
); 

/* const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      drawerContent={props=> DrawerContainer}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} */

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 230,
    contentComponent: DrawerContainer
  }
);

/* export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} */
 
export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;