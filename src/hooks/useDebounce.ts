import { useEffect, useState } from "react"

// The useDebounce hook helps us not to hit our api(array) anytime a user types into the input
const useDebounce = <T>(value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        // set new debouncedValue after delay
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        // Always necessary to clear out timer. This helps to prevent
        // update in debounced value when the value is changed within delay period
        return () => {
            clearTimeout(handler);
        }
    }, [delay, value])

    return debouncedValue
}

export {useDebounce}