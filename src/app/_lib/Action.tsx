import { Operation } from "@/types/Operaton";

export function Action(a: number, b: number, operation: Operation | '') {
    switch (operation) {
      case '+':
        return <p>{`${a} + ${b} = ${a + b}`}</p>;
      case '-':
        return <p>{`${a} - ${b} = ${a - b}`}</p>;
      case '/':
        return <p>{`${a} / ${b} = ${a / b}`}</p>;
      case '*':
        return <p>{`${a} * ${b} = ${a * b}`}</p>;
    }
  }