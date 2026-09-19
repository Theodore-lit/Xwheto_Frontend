import React, { FC } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export interface PropertyCardProps {
  item?: {
    image: string;
    title: string;
    price: string;
  };
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  item = {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    title: 'Maison moderne & Cotonou',
    price: '635.000 €',
  },
}) => {
  return (
    <View className="p-4 rounded-2xl liquid-card dark:glass-card dark:glow-primary bg-app-card w-full max-w-sm">
      {/* Image du bien */}
      <Image 
        source={{ uri: item.image }} 
        className="w-full h-44 rounded-xl"
        resizeMode="cover"
      />

      {/* Titre & Localisation */}
      <Text className="font-sora-semibold text-lg text-content-main mt-3">
        {item.title}
      </Text>

      {/* Prix en Inter-Bold selon la Charte */}
      <View className="flex-row justify-between items-center mt-3">
        <Text className="font-inter-bold text-xl text-brand-primary dark:text-brand-primary">
          {item.price}
        </Text>

        {/* Bouton d'action à effet lumineux */}
        <TouchableOpacity 
          activeOpacity={0.8}
          className="bg-brand-primary dark:glow-button px-4 py-2.5 rounded-xl"
        >
          <Text className="font-sora-semibold text-brand-dark text-sm">
            Voir les détails
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};