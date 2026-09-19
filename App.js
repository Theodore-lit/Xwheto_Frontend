import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { PropertyCard } from './src/shared/components/PropertyCard';

// ⚠️ Import obligatoire des styles globaux Tailwind / NativeWind
import './global.css';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <SafeAreaView className={`flex-1 ${isDark ? 'dark bg-app-bg' : 'bg-app-bg'}`}>
      <View className="flex-1 items-center justify-center p-6 bg-app-bg">
        {/* Switch Light / Dark Mode pour le test */}
        <TouchableOpacity
          onPress={toggleTheme}
          activeOpacity={0.8}
          className="mb-8 px-5 py-2.5 rounded-full bg-brand-dark dark:bg-brand-primary border border-brand-primary/30"
        >
          <Text className="font-sora-semibold text-xs text-white dark:text-brand-dark">
            Mode Actuel : {isDark ? '🌙 DARK (Glassmorphism)' : '☀️ LIGHT (Liquidmorphism)'}
          </Text>
        </TouchableOpacity>

        {/* Composant Carte Immobilière Xwétô */}
        <PropertyCard />

        <StatusBar style={isDark ? 'light' : 'dark'} />
      </View>
    </SafeAreaView>
  );
}