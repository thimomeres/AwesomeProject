import React, {useState} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

const TextInputRegist = ({
  label,
  placeholder,
  onlyNumbers = false,
  maxLength,
  value: controlledValue,
  onChangeText,
  ...rest
}) => {
  const isControlled = controlledValue !== undefined;
  const [innerValue, setInnerValue] = useState('');

  const handleChange = text => {
    // Filter: buang semua non-digit
    const next = onlyNumbers ? text.replace(/\D+/g, '') : text;

    // Kirim ke parent kalau ada handler
    if (onChangeText) onChangeText(next);

    // Kalau tidak controlled, simpan local
    if (!isControlled) setInnerValue(next);
  };

  const displayValue = isControlled ? controlledValue : innerValue;

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        // bantu keyboard di mobile
        keyboardType={onlyNumbers ? 'number-pad' : 'default'}
        // bantu di web agar keypad angka muncul
        inputMode={onlyNumbers ? 'numeric' : undefined}
        // batasi panjang (opsional)
        maxLength={maxLength}
        // controlled/uncontrolled display
        value={displayValue}
        onChangeText={handleChange}
        autoComplete={onlyNumbers ? 'tel' : undefined}
        {...rest}
      />
    </>
  );
};

export default TextInputRegist;

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 9,
    fontWeight: '600',
    elevation: 12,
  },
});
