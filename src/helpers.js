/**
 * A function to calculate normal callories consumption per day
 * @exports
 * @param sex: 'male' | 'female'
 * @param age: number
 * @param height: number
 * @param weight: number
 * @param coefficient: number
 * @returns number
 */
export const calculateCallories = ({
  sex, age, height, weight, coefficient,
}) => {
  const hb = sex === 'male' 
    ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
    : 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;

  const mg = sex === 'male'
    ? 9.99 * weight + 6.25 * height - 4.92 * age + 5
    :  9.99 * weight + 6.25 * height - 4.92 * age - 161;

  return ((hb + mg) / 2) * coefficient
}

export const calculatePFC = (calories, amount) => ({
  proteins: calories * amount.proteins / 4,
  fats: calories * amount.fats / 9,
  carbohydrates: calories * amount.carbohydrates / 4
});
