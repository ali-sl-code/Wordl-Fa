export default function validate(
  inputValue: string,
  word: string,
): { status: 'present' | 'correct' | 'absent'; char: string }[] {
  return Array.from(inputValue).map((chr, index) => {
    if (chr === word[index]) return { status: 'correct', char: chr }
    if (word.indexOf(chr) > -1) return { status: 'present', char: chr }
    return { status: 'absent', char: chr }
  })
}
