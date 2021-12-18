import React, { useEffect, useState } from "react";
import TableComponent from './TableComponent';
import UserApi from '../Services/ApiCalls/UserApi';
import { connect, useDispatch } from 'react-redux';
import { getUsersList } from '../Redux/Actions/UserAction';

const UsersListComponent = (users) => {
    const dispatch = useDispatch();

    const columns = [
        {
            Header: 'User List',
            columns: [
                {
                    Header: 'Reference',
                    accessor: 'Reference',
                },
                {
                    Header: 'Given Name',
                    accessor: 'GivenName',
                },
                {
                    Header: 'Family Name',
                    accessor: 'FamilyName',
                },
                {
                    Header: 'Date Of Birth',
                    accessor: 'DateOfBirth',
                    Cell: (props) => {
                        return (
                            <>
                                {(props.row.original.DateOfBirth).split("T")[0]}
                            </>
                        );
                    },
                },
            ],
        },
    ];

    useEffect(() => {
        getDataList();
    }, []);

    const getDataList = async () => {
        const usersList = await UserApi.getUsersList();
        if (usersList) {
            dispatch(getUsersList(usersList.data));
        }
    }

    return  <div>
                {users?.users && <TableComponent columns={columns} data={users?.users}/>}
            </div>
}

const mapStateToProps = state => {
    return {
        users: state.user?.usersData || [],
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListComponent);