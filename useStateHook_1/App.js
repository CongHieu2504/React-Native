import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

export default function App() {
  const [diceRolls, setDiceRolls] = useState([])
  const [currentRoll, setCurrentRoll] = useState(1)

  return (
    <View>
      <Button
        title="Roll dice!"
        onPress={() => {
          setDiceRolls([...diceRolls, currentRoll])
          setCurrentRoll(currentRoll + 1) 
        }}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRoll}
        </Text>
      ))}
    </View>
  )
}

