import { useState } from "react";

export default function useCounter(
  targetSalary,
  clinicCost,
  hoursPday,
  daysPweek
) {
  // States dos resultados
  const [emergencyReserve, setEM] = useState(0);
  const [profit, setProfit] = useState(0);
  const [workHours, setWorkHours] = useState(0);
  const [sessionValue, setSessionValue] = useState(0);

  // Funções de cálculo
  const emergencyReserveCount = () => {
    setEM(0.2 * targetSalary);
  };

  const profitClinicCount = () => {
    setProfit(0.2 * targetSalary);
  };

  const hoursCount = () => {
    setWorkHours(hoursPday * daysPweek * 4);
  };

  const sessionValueCount = () => {
    if (workHours === 0) return;
    setSessionValue(
      (targetSalary + clinicCost + emergencyReserve + profit) / workHours
    );
  };

  return {
    emergencyReserve,
    profit,
    workHours,
    sessionValue,
    emergencyReserveCount,
    profitClinicCount,
    hoursCount,
    sessionValueCount,
  };
}
