import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ActivityIndicator, View } from 'react-native';
import { useSessionStore } from '@/shared/store/sessionStore';
import type { AuthStackParamList, AppTabsParamList } from './types';
import { LoginScreen } from '@/features/auth/screens/LoginScreen';
import { RegisterScreen } from '@/features/auth/screens/RegisterScreen';
import { OtpScreen } from '@/features/auth/screens/OtpScreen';
// import HomeScreen ... (placeholders au début)

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const Tabs = createBottomTabNavigator<AppTabsParamList>();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen name="Otp" component={OtpScreen} />
    </AuthStack.Navigator>
  );
}

import { Button, Text } from 'react-native';

function HomePlaceholder() {
  const clearSession = useSessionStore((s) => s.clearSession);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>Accueil (provisoire)</Text>
      <Button title="Se déconnecter" onPress={clearSession} />
    </View>
  );
}

function AppNavigator() {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="Home" component={HomePlaceholder} />
      <Tabs.Screen name="Housing" component={HomePlaceholder} />
      <Tabs.Screen name="Profile" component={HomePlaceholder} />
    </Tabs.Navigator>
  );
}

export function RootNavigator() {
  const status = useSessionStore((s) => s.status);

  if (status === 'hydrating') {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {status === 'authenticated' ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}