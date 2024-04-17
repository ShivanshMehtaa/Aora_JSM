import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import {images } from "../../constants"
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
    email:'',
    password:'',
  })

  const[isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {}

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
              resizeMode='contain'
              className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(text) => setForm({...form, email: text})}
            otherStyles="mt-6"
            keyboardType="email-address"
            placeholder="Enter E-mail"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(text) => setForm({...form, password: text})}
            otherStyles="mt-6"
            placeholder="Enter Password"
          />
          <CustomButton
          title="Sign IN"
          handlePress={submit}
          containerStyles="mt-6"
          isLoading={isSubmitting}
          />
          <View>
            <Text className="text-white text-base text-center mt-6 font-pmedium">Don't have an account? <Link href="sign-up" className="text-secondary">Sign up</Link></Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn