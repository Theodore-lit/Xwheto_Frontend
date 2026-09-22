import { Pressable, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

type CheckboxProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  /** Accessible label, important car ce composant n'affiche pas de texte lui-même */
  accessibilityLabel: string;
};

/**
 * Case à cocher générique. Ne porte aucun texte : le libellé (ex. lien CGU cliquable)
 * est composé à côté par l'appelant (voir CguCheckbox.tsx pour un exemple).
 */
export function Checkbox({ checked, onChange, disabled, accessibilityLabel }: CheckboxProps) {
  return (
    <Pressable
      onPress={() => !disabled && onChange(!checked)}
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
      accessibilityLabel={accessibilityLabel}
      hitSlop={8}
      className="h-5 w-5 items-center justify-center"
    >
      <View
        className={[
          'h-5 w-5 items-center justify-center rounded-md border',
          checked ? 'border-app-btn bg-app-btn' : 'border-line bg-app-card',
          disabled ? 'opacity-50' : '',
        ].join(' ')}
      >
        {checked ? <Feather name="check" size={14} color="white" /> : null}
      </View>
    </Pressable>
  );
}
