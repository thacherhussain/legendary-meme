import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage'
// import React, { useState, useEffect } from 'react'

export const MMKV = new MMKVLoader().initialize()

// const useStorage = (key, initalValue) => {
//   const [storedValue, setStoredValue] = useState()

//   const getStoredItem = (key, initalValue) => {
//     const item = await MMKV

//     const [formData, setFormData] = useMMKVStorage('formData', MMKV, {
//       name: '',
//       day: '',
//       bird: '',
//       languages: [],
//     })
//   }
// }
