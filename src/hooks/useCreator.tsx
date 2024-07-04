import { useEffect, useState } from "react";
import { db } from "../data/db";
import type { Creator } from "../types";

export function useCreator() {
  const [creators, setCreators] = useState<Creator[]>([]);

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [ageInput, setAgeInput] = useState<number | string>("");

  useEffect(() => {
    setTimeout(() => {
      setCreators(db);
    }, 3000);
  }, []);

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setNameInput(value);
  }

  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEmailInput(value);
  }
  
  function handleChangeAge(e: React.ChangeEvent<HTMLInputElement>) {
    const value: number = +e.target.value;
    setAgeInput(value);
  }

  function addCreator(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newCreator: Creator = {
      id: creators.length + 1,
      name: nameInput,
      email: emailInput,
      age: +ageInput,
      money: 0,
    };

    setCreators([...creators, newCreator]);
    setNameInput("");
    setEmailInput("");
    setAgeInput("");
  }

  return { creators, nameInput, emailInput, ageInput, handleChangeName, handleChangeEmail, handleChangeAge, addCreator };
}
