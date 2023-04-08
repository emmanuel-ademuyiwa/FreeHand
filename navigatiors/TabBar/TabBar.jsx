import { View, Text, TouchableOpacity } from "react-native";

import styles from "./tabBar.style";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../constants";

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.container]}
          >
            <View style={[styles.tab, isFocused && styles.activeTab]}>
              <Icon
                name="home-outline"
                size={20}
                color={COLORS.veryLightPrimary}
              />
              {isFocused && <Text style={styles.text}>{label}</Text>}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;
