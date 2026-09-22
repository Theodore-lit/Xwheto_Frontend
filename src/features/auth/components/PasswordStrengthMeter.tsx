import { Text, View } from 'react-native';
import { getPasswordStrength } from '@/features/auth/schemas/registerSchema';

type PasswordStrengthMeterProps = {
  password: string;
};

const SEGMENT_COUNT = 4;

export function PasswordStrengthMeter({ password }: PasswordStrengthMeterProps) {
  if (!password) return null;

  const { score, label } = getPasswordStrength(password);

  return (
    <View className="mt-2">
      <View className="flex-row gap-1.5">
        {Array.from({ length: SEGMENT_COUNT }).map((_, index) => (
          <View
            key={index}
            className={[
              'h-1.5 flex-1 rounded-full',
              index < score ? 'bg-app-btn' : 'bg-line',
            ].join(' ')}
          />
        ))}
      </View>

      <View className="mt-1.5 flex-row items-center justify-between">
        <Text className="font-inter text-xs text-content-muted">
          {score >= 3 ? '✓ Sécurisé · Conforme bancaire' : 'Renforcez votre mot de passe'}
        </Text>
        <Text className="font-inter-semibold text-xs text-content-accent">{label}</Text>
      </View>
    </View>
  );
}
