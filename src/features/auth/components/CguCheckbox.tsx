import { Text, View } from 'react-native';
import { Checkbox } from '@/shared/components/ui/Checkbox';

type CguCheckboxProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
  onPressCgu: () => void;
  error?: string;
};

/**
 * Combine la Checkbox générique avec un texte contenant un lien cliquable vers les CGU.
 * Le lien vers la "charte de transparence foncière" pointe vers la même action pour le MVP
 * (un seul document consolidé) — TODO: confirmer s'il s'agit d'un document distinct.
 */
export function CguCheckbox({ checked, onChange, onPressCgu, error }: CguCheckboxProps) {
  return (
    <View>
      <View className="flex-row items-start gap-2.5">
        <View className="pt-0.5">
          <Checkbox
            checked={checked}
            onChange={onChange}
            accessibilityLabel="J'accepte les Conditions Générales d'Utilisation"
          />
        </View>

        <Text className="flex-1 font-inter text-sm leading-5 text-content-main">
          J'accepte les{' '}
          <Text
            className="font-inter-medium text-content-accent"
            onPress={onPressCgu}
            suppressHighlighting
          >
            Conditions Générales d'Utilisation (CGU)
          </Text>{' '}
          et la charte de transparence foncière de la République du Bénin.
        </Text>
      </View>

      {error ? <Text className="mt-1 font-inter text-xs text-brand-accent">{error}</Text> : null}
    </View>
  );
}
