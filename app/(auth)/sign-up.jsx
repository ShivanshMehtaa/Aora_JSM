import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import {images } from "../../constants"
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import { createUser } from '../../lib/appwrite'

const SignUp = () => {
  const [form, setForm] = useState({
    email:'',
    password:'',
  })

  const[isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    createUser();
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
              resizeMode='contain'
              className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign up to Aora</Text>
          <FormField
            title="Username"
            value={form.email}
            handleChangeText={(text) => setForm({...form, email: text})}
            otherStyles="mt-6"
            placeholder="Enter Username"
          />
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
          title="Sign Up"
          handlePress={submit}
          containerStyles="mt-6"
          isLoading={isSubmitting}
          />
          <View>
            <Text className="text-white text-base text-center mt-6 font-pmedium">Already have an account? <Link href="sign-in" className="text-secondary">Sign in</Link></Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp