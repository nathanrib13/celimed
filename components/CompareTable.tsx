export type CompareRow = {
  /** rótulo da linha (dimensão comparada); opcional */
  label?: string;
  a: string;
  b: string;
};

type CompareTableProps = {
  /** cabeçalhos: [dimensão, colunaA, colunaB] */
  headers: [string, string, string];
  rows: CompareRow[];
  highlightB?: boolean;
};

/** Tabela de comparação de duas colunas, com destaque opcional na coluna B. */
export function CompareTable({ headers, rows, highlightB = true }: CompareTableProps) {
  const hasLabels = rows.some((r) => r.label);

  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-paper">
      <table className="ctable">
        <thead>
          <tr>
            {hasLabels ? <th scope="col">{headers[0]}</th> : null}
            <th scope="col" className="col-mark">
              {headers[1]}
            </th>
            <th scope="col" className={highlightB ? "col-celimed" : undefined}>
              {headers[2]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {hasLabels ? (
                <td className="font-medium text-ink">{row.label ?? ""}</td>
              ) : null}
              <td className="col-mark">{row.a}</td>
              <td className={highlightB ? "col-celimed" : undefined}>{row.b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
