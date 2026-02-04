
export interface SolverResult {
  type: "success" | "info" | "error";
  message: string;
  details?: string;
}


export function solveQuadratic(a: number, b: number, c: number): SolverResult {
  // Case: Linear Equation (a = 0)
  if (a === 0) {
    if (b === 0) {
      if (c === 0) {
        return {
          type: "info",
          message: "Infinite solutions (Identity: 0 = 0)",
        };
      } else {
        return {
          type: "error",
          message: "No solution (Contradiction)",
          details: `${c} ≠ 0`,
        };
      }
    } else {
      const root = -c / b;
      return {
        type: "success",
        message: "Linear Equation Solution",
        details: `x = ${root.toFixed(4)}`,
      };
    }
  }

  // Case: Quadratic Equation
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return {
      type: "success",
      message: "Two Real Solutions",
      details: `x₁ = ${root1.toFixed(4)}, x₂ = ${root2.toFixed(4)}`,
    };
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return {
      type: "success",
      message: "One Real Solution",
      details: `x = ${root.toFixed(4)}`,
    };
  } else {
    const realPart = -b / (2 * a);
    const imagPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);
    return {
      type: "info",
      message: "Two Complex Solutions",
      details: `x = ${realPart.toFixed(4)} ± ${imagPart.toFixed(4)}i`,
    };
  }
}
