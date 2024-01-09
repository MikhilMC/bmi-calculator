function calculateBMI(weight, height) {
  const bodyMassIndex = weight / height ** 2;
  let verdict;
  if (bodyMassIndex < 16) {
    verdict = "Severe Thinness";
  } else if (bodyMassIndex >= 16 && bodyMassIndex <= 17) {
    verdict = "Moderate Thinness";
  } else if (bodyMassIndex > 17 && bodyMassIndex <= 18.5) {
    verdict = "Mild Thinness";
  } else if (bodyMassIndex > 18.5 && bodyMassIndex <= 25) {
    verdict = "Normal";
  } else if (bodyMassIndex > 25 && bodyMassIndex <= 30) {
    verdict = "Overweight";
  } else if (bodyMassIndex > 30 && bodyMassIndex <= 35) {
    verdict = "Obese Class I";
  } else if (bodyMassIndex > 35 && bodyMassIndex <= 40) {
    verdict = "Obese Class II";
  } else if (bodyMassIndex > 40) {
    verdict = "Obese Class III";
  }

  return [bodyMassIndex, verdict];
}

export default function Result({ formData }) {
  const [bmi, verdict] = calculateBMI(formData.weight, formData.height);
  return (
    <div className="result-box">
      <p>
        Your BMI score: <span className="result">{bmi.toFixed(2)}</span>
      </p>
      <p>
        Verdict: <span className="result">{verdict}</span>
      </p>
    </div>
  );
}
