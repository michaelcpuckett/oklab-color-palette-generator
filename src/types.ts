export const analgousHarmonyType = "analagous" as const;
export const tetradicHarmonyType = "tetradic" as const;
export const triadicHarmonyType = "triadic" as const;
export const splitHarmonyType = "split" as const;
export const complementaryHarmonyType = "complementary" as const;
export const primaryHarmonyType = "primary" as const;

export const harmonyTypes = [
  analgousHarmonyType,
  tetradicHarmonyType,
  triadicHarmonyType,
  splitHarmonyType,
  complementaryHarmonyType,
  primaryHarmonyType,
];

export type IHarmonyType =
  | typeof analgousHarmonyType
  | typeof tetradicHarmonyType
  | typeof triadicHarmonyType
  | typeof splitHarmonyType
  | typeof complementaryHarmonyType
  | typeof primaryHarmonyType;

export type IHarmony = {
  types: IHarmonyType[];
  identifiers: string[];
  label: string;
  angleOffset: number;
};

export type ISwatchPalette = IHarmony & {
  oklchStyles: Record<string, string>;
};

export type ILchArgs = [number, number, number];

export const harmonies: Array<IHarmony> = [
  {
    types: [primaryHarmonyType],
    identifiers: ["primary"],
    label: "Primary",
    angleOffset: 0,
  },
  {
    types: [analgousHarmonyType],
    identifiers: ["analagous-1"],
    label: "Analagous 1",
    angleOffset: 30,
  },
  {
    types: [analgousHarmonyType],
    identifiers: ["analagous-2"],
    label: "Analagous 2",
    angleOffset: 60,
  },
  {
    types: [analgousHarmonyType, tetradicHarmonyType],
    identifiers: ["analagous-3", "tetradic-1"],
    label: "Analagous 3 / Tetradic 1",
    angleOffset: 90,
  },
  {
    types: [triadicHarmonyType],
    identifiers: ["triadic-1"],
    label: "Triadic 1",
    angleOffset: 120,
  },
  {
    types: [splitHarmonyType],
    identifiers: ["split-1"],
    label: "Split Complementary 1",
    angleOffset: 150,
  },
  {
    types: [complementaryHarmonyType, tetradicHarmonyType],
    identifiers: ["complementary", "tetradic-2"],
    angleOffset: 180,
    label: "Complementary / Tetradic 2",
  },
  {
    types: [splitHarmonyType],
    identifiers: ["split-2"],
    label: "Split Complementary 2",
    angleOffset: 210,
  },
  {
    types: [triadicHarmonyType],
    identifiers: ["triadic-2"],
    label: "Triadic 2",
    angleOffset: 240,
  },
  {
    types: [tetradicHarmonyType],
    identifiers: ["tetradic-3"],
    angleOffset: 270,
    label: "Tetradic 3",
  },
  {
    types: [analgousHarmonyType],
    identifiers: ["analagous-negative-3"],
    angleOffset: 270,
    label: "Analagous -3",
  },
  {
    types: [analgousHarmonyType],
    identifiers: ["analagous-negative-2"],
    angleOffset: 300,
    label: "Analagous -2",
  },
  {
    types: [analgousHarmonyType],
    identifiers: ["analagous-negative-1"],
    angleOffset: 330,
    label: "Analagous -1",
  },
] as const;