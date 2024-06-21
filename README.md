# Caesar Cipher Encryption Alg:

## Introduction
- This method involves shifting each letter of the plaintext by a fixed number of positions in the alphabet.
- Also known as the shifting algorithm



## Example
### If the value of keyLenght=1 then :
- A will be replaced by B
- B will be replaced by C
- C will be replaced by D
- And so on, until the entire plaintext is encrypted.


## Terminology
- **Plaintext**: A simple message written by the user.
- **Ciphertext**: An encrypted message after applying some technique.

## Formulas :
### Encryption
\[ En(x) = (x + n) \mod 26 \]

### Decryption
\[ Dn(x) = (x - n) \mod 26 \]

If the value of \( Dn(x) \) becomes negative, add 26 to the negative value.

## Notation
- **E**: Encryption
- **D**: Decryption
- **x**: Letter's value (position in the alphabet, where A = 0, B = 1, ..., Z = 25)
- **n**: Key value (shift value)

## Example Encryption and Decryption
### Encryption Example
- Plaintext: `HELLO`
- Key (n): 3
- Ciphertext: `KHOOR`

### Decryption Example
- Ciphertext: `KHOOR`
- Key (n): 3
- Plaintext: `HELLO`

