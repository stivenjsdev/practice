import { useMemo } from "react";
import { formatCurrency } from "./helper";
import { useCount } from "./hooks/useCount";
import { useCreator } from "./hooks/useCreator";

function App() {
  const {
    count,
    setCount,
    selectAll,
    inputValue,
    handleChange,
    handleSetCounter,
  } = useCount();

  const {
    creators,
    nameInput,
    ageInput,
    emailInput,
    moneyInput,
    handleChangeAge,
    handleChangeEmail,
    handleChangeName,
    handleChangeMoney,
    addCreator,
    empty,
  } = useCreator();

  const total = useMemo(
    () => creators.reduce((total, creator) => total + creator.money, 0),
    [creators]
  );

  return (
    <>
      <header className="header">
        <h1 className="title">Practice</h1>
      </header>

      <main className="main">
        <div className="counterContainer">
          <h3>Counter: {count}</h3>
          <button className="increase" onClick={() => setCount(count + 1)}>
            +
          </button>
          <button className="decrease" onClick={() => setCount(count - 1)}>
            -
          </button>
          <input
            className="inputCounter"
            type="number"
            onClick={selectAll}
            value={inputValue}
            onChange={handleChange}
          />
          <button className="set" onClick={handleSetCounter}>
            set
          </button>
        </div>

        <div className="addCreatorContainer">
          <h3>Add: Creator:</h3>
          <form className="creatorForm" onSubmit={(e) => addCreator(e)}>
            <input
              className="creatorInput"
              type="text"
              placeholder="Name"
              value={nameInput}
              onChange={handleChangeName}
            />
            <input
              className="creatorInput"
              type="email"
              placeholder="Email"
              value={emailInput}
              onChange={handleChangeEmail}
            />
            <input
              className="creatorInput"
              type="number"
              placeholder="Age"
              value={ageInput}
              onChange={handleChangeAge}
            />
            <input
              className="creatorInput"
              type="number"
              placeholder="Money"
              value={moneyInput}
              onChange={handleChangeMoney}
            />
            <input className="creatorInput" type="submit" value="Add Creator" disabled={empty()} />
          </form>
        </div>

        <div className="creatorsContainer">
          <h3>Creators:</h3>
          {creators.length ? (
            <>
              <ul className="creatorsList">
                {creators.map((creator) => (
                  <li key={creator.id}>
                    {creator.name} - {creator.email} - {creator.age} -{" "}
                    {formatCurrency(creator.money)}
                  </li>
                ))}
              </ul>
              <p className="total">
                <span>Total money:</span> {formatCurrency(total)}
              </p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
