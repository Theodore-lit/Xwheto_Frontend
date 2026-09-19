import {
  Sora_400Regular,
  Sora_500Medium,
  Sora_600SemiBold,
  Sora_700Bold,
} from '@expo-google-fonts/sora';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

// Clé (à gauche) = nom utilisé dans tailwind.config.js
// Valeur (à droite) = fichier de police fourni par le paquet
export const fontMap = {
  'Sora-Regular': Sora_400Regular,
  'Sora-Medium': Sora_500Medium,
  'Sora-SemiBold': Sora_600SemiBold,
  'Sora-Bold': Sora_700Bold,

  'Inter-Regular': Inter_400Regular,
  'Inter-Medium': Inter_500Medium,
  'Inter-SemiBold': Inter_600SemiBold,
  'Inter-Bold': Inter_700Bold,
};