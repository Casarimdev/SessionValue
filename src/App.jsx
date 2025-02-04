import Header1 from "./components/header/header";
import "./App.css";
import useCounter from "./hooks/useCounter";
import { useState } from "react";

function App() {
  // Inputs do usuário
  const [targetSalaryInput, setTargetSalaryInput] = useState(0);
  const [clinicCostInput, setClinicCostInput] = useState(0);
  const [hoursPdayInput, setHoursPdayInput] = useState(0);
  const [daysPweekInput, setDaysPweekInput] = useState(0);

  // Passando os valores para o Hook
  const {
    emergencyReserve,
    profit,
    workHours,
    sessionValue,
    emergencyReserveCount,
    profitClinicCount,
    hoursCount,
    sessionValueCount,
  } = useCounter(
    targetSalaryInput,
    clinicCostInput,
    hoursPdayInput,
    daysPweekInput
  );

  // Função para formatar o input em R$
  const formatCurrency = (value) => {
    if (!value) return "R$ 0,00";
    return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <>
      <Header1 />
      <section className="container-support">
        <div className="main-container">
          <h1 className="main-title">Calcule o valor ideal da sua sessão</h1>
          <hr />
          <form className="form-count" onSubmit={(e) => e.preventDefault()}>
            <label>Quanto deseja ganhar por mês?</label>
            <input
              type="text"
              placeholder="R$ 0,00"
              className="input-count"
              value={formatCurrency(targetSalaryInput)}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/\D/g, "");
                setTargetSalaryInput(
                  numericValue ? parseFloat(numericValue) / 100 : 0
                );
              }}
              required
            />

            <label>Qual o custo mensal da clínica?</label>
            <input
              type="text"
              placeholder="R$ 0,00"
              className="input-count"
              value={formatCurrency(clinicCostInput)}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/\D/g, "");
                setClinicCostInput(
                  numericValue ? parseFloat(numericValue) / 100 : 0
                );
              }}
              required
            />

            <button className="button-count" onClick={emergencyReserveCount}>
              Calcular Reserva de Emergência
            </button>
            <p className="count-result">
              Sua reserva de emergência é: R$ {emergencyReserve}
            </p>
          </form>
          <hr />
          <form className="form-count" onSubmit={(e) => e.preventDefault()}>
            <button className="button-count" onClick={profitClinicCount}>
              Calcular Lucro
            </button>
            <p className="count-result">
              Seu lucro mensal estimado é: R$ {profit}
            </p>
          </form>
          <hr />
          <form className="form-count" onSubmit={(e) => e.preventDefault()}>
            <label>Quantas horas deseja trabalhar por dia?</label>
            <input
              type="number"
              placeholder="Horas"
              className="input-count"
              value={hoursPdayInput}
              onChange={(e) => setHoursPdayInput(Number(e.target.value))}
              required
            />

            <label>Quantos dias por semana deseja trabalhar?</label>
            <input
              type="number"
              placeholder="Dias"
              className="input-count"
              value={daysPweekInput}
              onChange={(e) => setDaysPweekInput(Number(e.target.value))}
              required
            />

            <button className="button-count" onClick={hoursCount}>
              Calcular horas
            </button>
            <p className="count-result">
              Carga horária mensal: {workHours} horas
            </p>
          </form>
          <hr />
          <p className="final-count">
            Valor mínimo sugerido por sessão: R$ {sessionValue}
          </p>
          <button className="button-count" onClick={sessionValueCount}>
            Calcular valor da sessão
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
