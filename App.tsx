// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import { PropertyCard } from './src/shared/components/ui/PropertyCard';

// // ⚠️ Import obligatoire des styles globaux Tailwind / NativeWind
// import './global.css';

// export default function App() {
//   const [isDark, setIsDark] = useState(false);

//   const toggleTheme = () => {
//     setIsDark((prev) => !prev);
//   };

//   return (
//       <View className="flex-1 items-center justify-center p-6 bg-app-bg">
//         {/* Switch Light / Dark Mode pour le test */}
//         <TouchableOpacity
//           onPress={toggleTheme}
//           activeOpacity={0.8}
//           className="mb-8 px-5 py-2.5 rounded-full bg-brand-dark dark:bg-brand-primary border border-brand-primary/30"
//         >
//           <Text className="font-sora-semibold text-xs text-white dark:text-brand-dark">
//             Mode Actuel : {isDark ? '🌙 DARK (Glassmorphism)' : '☀️ LIGHT (Liquidmorphism)'}
//           </Text>
//         </TouchableOpacity>

//         {/* Composant Carte Immobilière Xwétô */}
//         <PropertyCard />

//         <StatusBar style={isDark ? 'light' : 'dark'} />
//       </View>
//   );
// }

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppProviders } from '@/app/providers/AppProviders';
import { RootNavigator } from '@/app/navigation/RootNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProviders>
        <RootNavigator />
      </AppProviders>
    </SafeAreaProvider>
  );
}