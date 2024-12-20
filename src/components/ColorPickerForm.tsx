"use client";

import { IColorSpace, IHarmonyType } from "@/types";
import { Dispatch, FormEventHandler, SetStateAction, useCallback } from "react";

export function ColorPickerForm({
  setColorSpace,
  colorSpace,
  setSaturationPercentage,
  saturationPercentage,
  setChromaValue,
  chromaValue,
  setHueAngle,
  hueAngle,
  setEnabledHarmonyTypes,
  enabledHarmonyTypes,
}: {
  setColorSpace: Dispatch<SetStateAction<IColorSpace>>;
  colorSpace: IColorSpace;
  setSaturationPercentage: Dispatch<SetStateAction<number>>;
  saturationPercentage: number;
  setChromaValue: Dispatch<SetStateAction<number>>;
  chromaValue: number;
  setHueAngle: Dispatch<SetStateAction<number>>;
  hueAngle: number;
  setEnabledHarmonyTypes: Dispatch<SetStateAction<IHarmonyType[]>>;
  enabledHarmonyTypes: IHarmonyType[];
}) {
  const handleColorSpaceChange = useCallback<FormEventHandler>(
    (event) => {
      const inputElement = event.target;

      if (!(inputElement instanceof HTMLInputElement)) {
        return;
      }

      const value = inputElement.value;

      setColorSpace(value as IColorSpace);
    },
    [setColorSpace]
  );
  const handleChromaValueChange = useCallback<FormEventHandler>(
    (event) => {
      const inputElement = event.target;

      if (!(inputElement instanceof HTMLInputElement)) {
        return;
      }

      const value = Number(inputElement.value);

      setChromaValue(value);
    },
    [setChromaValue]
  );

  const handleHueAngleChange = useCallback<FormEventHandler>(
    (event) => {
      const inputElement = event.target;

      if (!(inputElement instanceof HTMLInputElement)) {
        return;
      }

      const value = Number(inputElement.value);

      setHueAngle(value);
    },
    [setHueAngle]
  );

  const handleEnabledHarmonyTypesChange = useCallback<FormEventHandler>(
    (event) => {
      const inputElement = event.target;

      if (!(inputElement instanceof HTMLInputElement)) {
        return;
      }

      const isEnabled = inputElement.checked;
      const harmonyType = inputElement.value;

      if (isEnabled) {
        setEnabledHarmonyTypes([
          ...enabledHarmonyTypes,
          harmonyType as IHarmonyType,
        ]);
      } else {
        setEnabledHarmonyTypes(
          enabledHarmonyTypes.filter(
            (enabledHarmonyType) =>
              enabledHarmonyType !== (harmonyType as IHarmonyType)
          )
        );
      }
    },
    [setEnabledHarmonyTypes, enabledHarmonyTypes]
  );

  const handleSaturationPercentageChange = useCallback<FormEventHandler>(
    (event) => {
      const inputElement = event.target;

      if (!(inputElement instanceof HTMLInputElement)) {
        return;
      }

      const value = Number(inputElement.value);

      setSaturationPercentage(value);
    },
    [setSaturationPercentage]
  );

  return (
    <form role="form">
      <fieldset>
        <legend>Color Space</legend>
        <label>
          OKLCH
          <input
            onChange={handleColorSpaceChange}
            name="colorSpace"
            type="radio"
            value="oklch"
            defaultChecked={colorSpace === "oklch"}
          />
        </label>
        <label>
          HSL
          <input
            onChange={handleColorSpaceChange}
            name="colorSpace"
            type="radio"
            value="hsl"
            defaultChecked={colorSpace === "hsl"}
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Base Color</legend>
        <label>
          Hue (Angle)
          <div>
            <input
              onChange={handleHueAngleChange}
              type="range"
              min="0"
              max="360"
              defaultValue={hueAngle}
              name="hueAngle"
              list="degree-markers"
            />
            <datalist id="degree-markers">
              <option value="0" label="0deg"></option>
              <option value="30" label="30deg"></option>
              <option value="60" label="60deg"></option>
              <option value="90" label="90deg"></option>
              <option value="120" label="120deg"></option>
              <option value="150" label="120deg"></option>
              <option value="180" label="180deg"></option>
              <option value="210" label="180deg"></option>
              <option value="240" label="240deg"></option>
              <option value="270" label="270deg"></option>
              <option value="300" label="300deg"></option>
              <option value="330" label="330deg"></option>
              <option value="360" label="360deg"></option>
            </datalist>
            <output>{hueAngle}°</output>
          </div>
        </label>
        <label hidden={colorSpace !== "hsl"}>
          Saturation
          <div>
            <input
              onChange={handleSaturationPercentageChange}
              type="range"
              min="0"
              max="100"
              step="1"
              defaultValue={saturationPercentage}
              name="saturationPercentage"
              list="percentage-markers"
            />
            <datalist id="percentage-markers">
              <option value="0" label="0%"></option>
              <option value="25" label="25%"></option>
              <option value="50" label="50%"></option>
              <option value="75" label="75%"></option>
              <option value="100" label="100%"></option>
            </datalist>
            <output>{saturationPercentage}%</output>
          </div>
        </label>
        <label hidden={colorSpace !== "oklch"}>
          Chroma (Intensity)
          <div>
            <input
              onChange={handleChromaValueChange}
              type="range"
              min=".1"
              max=".3"
              step=".01"
              defaultValue={chromaValue}
              name="chroma"
              list="percentage-markers"
            />
            <datalist id="percentage-markers">
              <option value="0" label="0%"></option>
              <option value="25" label="25%"></option>
              <option value="50" label="50%"></option>
              <option value="75" label="75%"></option>
              <option value="100" label="100%"></option>
            </datalist>
            <output>{chromaValue}</output>
          </div>
        </label>
      </fieldset>
      <fieldset>
        <legend>Harmonies</legend>
        <label>
          <input
            onInput={handleEnabledHarmonyTypesChange}
            type="checkbox"
            name="harmony"
            value="complementary"
          />
          <p>
            Complementary <small>(180 degrees)</small>
          </p>
        </label>
        <label>
          <input
            onInput={handleEnabledHarmonyTypesChange}
            type="checkbox"
            name="harmony"
            value="analagous"
          />
          <p>
            Analagous <small>(30/60/90/270/300/330 degrees)</small>
          </p>
        </label>
        <label>
          <input
            onInput={handleEnabledHarmonyTypesChange}
            type="checkbox"
            name="harmony"
            value="triadic"
          />
          <p>
            Triadic <small>(120/240 degrees)</small>
          </p>
        </label>
        <label>
          <input
            onInput={handleEnabledHarmonyTypesChange}
            type="checkbox"
            name="harmony"
            value="split"
          />
          <p>
            Split Complementary <small>(150/210 degrees)</small>
          </p>
        </label>
        <label>
          <input
            onInput={handleEnabledHarmonyTypesChange}
            type="checkbox"
            name="harmony"
            value="tetradic"
          />
          <p>
            Tetradic
            <small>(90/180/270 degrees)</small>
          </p>
        </label>
      </fieldset>
    </form>
  );
}
