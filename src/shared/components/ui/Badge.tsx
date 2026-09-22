import { Text, View } from 'react-native';

type BadgeProps = {
  label: string;
  variant?: 'neutral' | 'accent' | 'success';
};

const VARIANT_STYLES: Record<NonNullable<BadgeProps['variant']>, string> = {
  neutral: 'bg-app-tint text-content-accent',
  accent: 'bg-brand-primary text-content-accent',
  success: 'bg-app-tint text-content-accent',
};

/**
 * Étiquette compacte réutilisable : opérateur détecté (MTN/Moov), tag de robustesse
 * du mot de passe ("Robuste"), ou tout autre label court à mettre en avant.
 */
export function Badge({ label, variant = 'neutral' }: BadgeProps) {
  const [bgClass, textClass] = VARIANT_STYLES[variant].split(' ');

  return (
    <View className={`rounded-full px-2.5 py-1 ${bgClass}`}>
      <Text className={`font-inter-semibold text-xs ${textClass}`}>{label}</Text>
    </View>
  );
}
