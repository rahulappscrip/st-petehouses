"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

type Prediction = {
  description: string;
  placeId: string;
};

type AddressAutocompleteInputProps = {
  id: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
  onValueChange?: () => void;
};

export function AddressAutocompleteInput({
  id,
  name,
  placeholder,
  disabled = false,
  "aria-invalid": ariaInvalid,
  "aria-describedby": ariaDescribedBy,
  onValueChange,
}: AddressAutocompleteInputProps) {
  const listboxId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [value, setValue] = useState("");
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const closeList = useCallback(() => {
    setIsOpen(false);
    setActiveIndex(-1);
  }, []);

  const selectPrediction = useCallback(
    (prediction: Prediction) => {
      setValue(prediction.description);
      setPredictions([]);
      closeList();
      setFetchError(null);
      onValueChange?.();
    },
    [closeList, onValueChange],
  );

  const fetchPredictions = useCallback(async (query: string) => {
    if (query.trim().length < 3) {
      setPredictions([]);
      setIsOpen(false);
      setFetchError(null);
      return;
    }

    setIsLoading(true);
    setFetchError(null);

    try {
      const response = await fetch(
        `/api/places/autocomplete?input=${encodeURIComponent(query.trim())}`,
      );
      const data = (await response.json()) as {
        predictions?: Prediction[];
        error?: string;
      };

      if (!response.ok) {
        setPredictions([]);
        setIsOpen(false);
        setFetchError(data.error ?? "Address suggestions are unavailable.");
        return;
      }

      const nextPredictions = data.predictions ?? [];
      setPredictions(nextPredictions);
      setIsOpen(nextPredictions.length > 0);
      setActiveIndex(-1);
    } catch {
      setPredictions([]);
      setIsOpen(false);
      setFetchError("Address suggestions are unavailable.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        closeList();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeList]);

  function handleInputChange(nextValue: string) {
    setValue(nextValue);
    onValueChange?.();

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      void fetchPredictions(nextValue);
    }, 300);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!isOpen || predictions.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % predictions.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) => (current <= 0 ? predictions.length - 1 : current - 1));
    } else if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      selectPrediction(predictions[activeIndex]);
    } else if (event.key === "Escape") {
      closeList();
    }
  }

  return (
    <div className="address-autocomplete" ref={containerRef}>
      <input
        id={id}
        name={name}
        className="input"
        type="text"
        value={value}
        required
        autoComplete="off"
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedBy}
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-controls={isOpen ? listboxId : undefined}
        aria-activedescendant={
          isOpen && activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined
        }
        role="combobox"
        onChange={(event) => handleInputChange(event.target.value)}
        onFocus={() => {
          if (predictions.length > 0) setIsOpen(true);
        }}
        onKeyDown={handleKeyDown}
      />

      {isOpen ? (
        <ul className="address-autocomplete__list" id={listboxId} role="listbox">
          {predictions.map((prediction, index) => (
            <li
              key={prediction.placeId}
              id={`${listboxId}-option-${index}`}
              role="option"
              aria-selected={activeIndex === index}
              className={
                activeIndex === index
                  ? "address-autocomplete__option address-autocomplete__option--active"
                  : "address-autocomplete__option"
              }
              onMouseDown={(event) => {
                event.preventDefault();
                selectPrediction(prediction);
              }}
            >
              {prediction.description}
            </li>
          ))}
        </ul>
      ) : null}

      {isLoading ? (
        <span className="address-autocomplete__status" aria-live="polite">
          Searching addresses…
        </span>
      ) : null}

      {fetchError ? (
        <span className="address-autocomplete__status address-autocomplete__status--muted">
          {fetchError}
        </span>
      ) : null}
    </div>
  );
}
