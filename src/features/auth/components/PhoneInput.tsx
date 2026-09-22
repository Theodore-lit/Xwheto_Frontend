import { Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Badge } from '@/shared/components/ui/Badge';

type Operator = 'MTN' | 'MOOV' | null;

/**
 * Détection très simple de l'opérateur à partir des premiers chiffres du numéro local.
 * MVP Bénin uniquement : à étendre si d'autres pays sont supportés plus tard.
 * TODO: à confirmer avec l'équipe produit — préfixes exacts MTN/Moov Bénin 2026.
 */
function detectOperator(localPhone: string): Operator {
  const digits = localPhone.replace(/\s/g, '');
  if (/^(6[1-9]|9[0-9])/.test(digits)) return 'MTN';
  if (/^(9[5-9]|6[0-4])/.test(digits)) return 'MOOV';
  return null;
}

type PhoneInputProps = {
  value: string;
  onChangeText: (value: string) => void;
  error?: string;
};

export function PhoneInput({ value, onChangeText, error }: PhoneInputProps) {
  const operator = detectOperator(value);

  return (
    <View>
      <Text className="mb-1.5 font-inter-medium text-sm text-content-main">
        Numéro de téléphone Mobile Money <Text className="text-brand-accent">*</Text>
      </Text>

      <View
        className={[
          'flex-row items-center rounded-xl border bg-app-card px-3',
          error ? 'border-brand-accent' : 'border-line',
        ].join(' ')}
      >
        {/* Indicatif pays — fixe pour le MVP (Bénin uniquement) */}
        <View className="flex-row items-center border-r border-line py-3 pr-3">
          <Text className="mr-1 text-base">🇧🇯</Text>
          <Text className="font-inter-medium text-content-main">+229</Text>
          <Feather name="chevron-down" size={14} color="#6B7280" className="ml-1" />
        </View>

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="97 45 88 12"
          keyboardType="phone-pad"
          maxLength={11}
          className="flex-1 py-3 pl-3 font-inter text-content-main"
          placeholderTextColor="#9CA3AF"
        />

        {operator ? (
          <View className="pl-2">
            <Badge label={operator} variant="accent" />
          </View>
        ) : null}
      </View>

      {error ? <Text className="mt-1 font-inter text-xs text-brand-accent">{error}</Text> : null}
    </View>
  );
}
