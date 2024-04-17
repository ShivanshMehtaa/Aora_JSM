import { StatusBar } from "expo-status-bar";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="w-[400px] h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-center font-psemibold text-white text-2xl">
              Welcome to
            </Text>
            <Text className="text-center font-bold text-secondary-200 text-3xl mt-1">
              Aora
            </Text>
            <Image
              source={images.path}
              className="w-[150px] h-[15px] absolute -bottom-2 "
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            A project made by following JavaScript Mastery tutorial coz he is
            the best
          </Text>
          <CustomButton
            title="Continue to Sign In"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full m-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style='light'/>
    </SafeAreaView>
  );
}
