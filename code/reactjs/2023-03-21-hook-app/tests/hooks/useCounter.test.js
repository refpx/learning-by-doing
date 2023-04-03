import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react-dom/test-utils";

describe('Test useCounter Hook', () => {
  test('debe de retornar los valores por defecto', () => {
    const { result }= renderHook(() => useCounter())
    const { counter, increment, decrement, reset } = result.current

    expect(counter).toBe(10)
    expect(increment).toEqual(expect.any(Function))
    expect(decrement).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  test('debe de tener el counter en 100', () => {
    const initialValue = 100
    const { result } = renderHook(() => useCounter(initialValue))
    const { counter } = result.current

    expect(counter).toBe(100)
  })

  test('debe de incrementar el contador', () => {
    const { result } = renderHook(() => useCounter(100))
    const { counter, increment } = result.current

    act(()=>{
      increment()
      increment(2)
    })

    expect(result.current.counter).toBe(103)
  })

  test('debe de decrementar el contador', () => {
    const { result } = renderHook(() => useCounter(100))
    const { counter, decrement } = result.current

    act(()=>{
      decrement()
      decrement(2)
    })

    expect(result.current.counter).toBe(97)
  })

  test('debe de realizar el reset del contador', () => {
    const { result } = renderHook(() => useCounter(100))
    const { counter, decrement, reset } = result.current

    act(()=>{
      decrement()
      decrement(2)
      reset()
    })

    expect(result.current.counter).toBe(100)
  })
})