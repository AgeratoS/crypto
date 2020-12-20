import React from "react";
import MathJax from "react-mathjax";

interface FormulaType {
  tex: string;
}

const InlineFormula: React.FC<FormulaType> = ({ tex }) => (
  <MathJax.Node inline formula={tex} />
);

export default InlineFormula;
