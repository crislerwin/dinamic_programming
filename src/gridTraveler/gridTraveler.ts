export const gridTraveler = (gridWidth: number, gridHeight: number): number => {
  if (gridWidth === 1 && gridHeight === 1) return 1;
  if (gridWidth === 0 || gridHeight === 0) return 0;
  return (
    gridTraveler(gridWidth - 1, gridHeight) +
    gridTraveler(gridWidth, gridHeight - 1)
  );
};
