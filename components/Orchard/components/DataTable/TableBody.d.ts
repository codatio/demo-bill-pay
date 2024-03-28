/// <reference types="react" />
import { ColumnDefinition, DataDefinition, RowInfo } from "./types";
interface TableBodyProps<T extends DataDefinition[], K> {
    /**
     * Row data
     */
    rowsInfo: RowInfo<T>[];
    /**
     * Column definitions (accepts generic key type)
     */
    columnDefs: ColumnDefinition<K>[];
}
export default function TableBody<T extends DataDefinition[], K>(props: TableBodyProps<T, K>): JSX.Element;
export {};
//# sourceMappingURL=TableBody.d.ts.map