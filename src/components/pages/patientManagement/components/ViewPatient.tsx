type PatientsData = {
  id: number;
  serial: string;
  name: string;
  gender: "Male" | "Female";
  age: number;
  problem: string;
  nutrition: string;
  fitnessLevel: string;
  healthCondition: string;
  overallScore: string;
};

interface ViewPatientProps {
  patient: PatientsData;
}

export default function ViewPatient({ patient }: ViewPatientProps) {
  return (
    <div>
      <h2>Patient Details</h2>
      <p>
        <strong>Name:</strong> {patient.name}
      </p>
      <p>
        <strong>Gender:</strong> {patient.gender}
      </p>
      <p>
        <strong>Age:</strong> {patient.age}
      </p>
      <p>
        <strong>Problem:</strong> {patient.problem}
      </p>
      <p>
        <strong>Nutrition:</strong> {patient.nutrition}
      </p>
      <p>
        <strong>Fitness Level:</strong> {patient.fitnessLevel}%
      </p>
      <p>
        <strong>Health Condition:</strong> {patient.healthCondition}
      </p>
      <p>
        <strong>Overall Score:</strong> {patient.overallScore}/100
      </p>
    </div>
  );
}
