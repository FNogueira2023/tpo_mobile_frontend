// app/_layout.tsx
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { Ionicons } from '@expo/vector-icons';



export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarStyle: Platform.select({
                    ios: {
                        position: 'absolute',
                    },
                    default: {},
                }),
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Buscar',
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="search"
                            size={28}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="booked"
                options={{
                    title: 'Guardados',
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            size={28}
                            name="bookmark"  // Default Ionicons name
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="courses"
                options={{
                    title: 'Cursos',
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            size={28}
                            name="list"
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="user"
                options={{
                    title: 'Usuario',
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            size={28}
                            name="person"  // Default icon name
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}