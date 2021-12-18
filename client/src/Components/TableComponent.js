import React, {useState} from "react";
import { useTable, useSortBy } from 'react-table';
import { useDispatch } from 'react-redux';
import { getUsersList } from '../Redux/Actions/UserAction';
import UserApi from '../Services/ApiCalls/UserApi';

const GlobalSearch = ({
}) => {
    const [value, setValue] = useState();
    const dispatch = useDispatch();

    const onChange = (searchValue) => {
        getDataList(searchValue);
    }

    const getDataList = async (payload) => {
        const usersList = await UserApi.getUsersList(payload);
        if (usersList) {
            dispatch(getUsersList(usersList.data));
        }
    }

    return (
        <div>
            Search Name
            <input
                className={"form-control"}
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                style={{width: '30%'}}
            />
        </div>
    )
}

const TableComponent = (props) => {
    const { columns = [], data = []} = props;
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    },
    useSortBy
    )

    if (data && data.length < 1) {
        return <div>No records found</div>;
    }

    return (
        <>
            <GlobalSearch/>
            <table className="table" {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>
    )
}

export default TableComponent;