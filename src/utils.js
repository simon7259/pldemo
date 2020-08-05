const operations = [
    {
        label: "Pay Off",
        value: "101",
        visible: true,
    },
    {
        label: "Pay Off In N Payments",
        value: "102",
        visible: true,
    },
    {
        label: "Pay Down",
        value: "103",
        visible: true,
    },
    {
        label: "Revoke ACH",
        value: "104",
        visible: false,
    },
    {
        label: "Change Payroll Day",
        value: "105",
        visible: false,
    },
    {
        label: "Change Payment Frequency",
        value: "106",
        visible: false,
    },
    {
        label: "Change Payment Mode",
        value: "107",
        visible: false,
    },
    {
        label: "Change Payday On Holiday",
        value: "108",
        visible: false,
    },
    {
        label: "Change Payday On Available",
        value: "109",
        visible: false,
    }
]

const queryColumns = [
    {
        title: 'Application Id',
        dataIndex: 'applicationId',
        key: 'applicationId',
        scopedSlots: {customRender: 'applicationId'},
        align: 'center'
    },
    {
        title: 'Application No',
        dataIndex: 'applicationNo',
        key: 'applicationNo',
        scopedSlots: {customRender: 'applicationNo'},
        align: 'center'
    },
    {
        title: 'Effective Date',
        dataIndex: 'effectiveDate',
        key: 'effectiveDate',
        align: 'center',
    },
    {
        title: 'Customer Name',
        dataIndex: 'customerName',
        key: 'customerName',
        ellipsis: true,
        align: 'center'
    },
    {
        title: 'Requested Principal',
        dataIndex: 'requestedPrincipal',
        key: 'requestedPrincipal',
        ellipsis: true,
        align: 'center'
    },
    {
        title: 'Interest Rate',
        dataIndex: 'interestRate',
        key: 'interestRate',
        ellipsis: true,
        align: 'center'
    },
    {
        title: 'Last Return Code',
        dataIndex: 'lastReturnCode',
        key: 'lastReturnCode',
        ellipsis: true,
        align: 'center'
    },
    {
        title: 'Last Return Date',
        dataIndex: 'lastReturnDate',
        key: 'lastReturnDate',
        ellipsis: true,
        align: 'center'
    },
    {
        title: 'Approved Person',
        dataIndex: 'approvedPerson',
        key: 'approvedPerson',
        ellipsis: true,
        align: 'center'
    }
]

const cancelColumns = [
    {
        title: 'FunctionName',
        dataIndex: 'functionName'
    },
    {
        title: 'Created Time',
        dataIndex: 'createdTime'
    },
    {
        title: 'Created By',
        dataIndex: 'createdBy'
    },
    {
        title: 'Effective At',
        dataIndex: 'effectiveAt'
    },
    {
        title: 'Status',
        dataIndex: 'status'
    }
]

const actionColumns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'Change Type',
        dataIndex: 'changeType',
        key: 'changeType'
    },
    {
        title: 'Transaction Date',
        dataIndex: 'transactionDate',
        key: 'transactionDate'
    },
    {
        title: 'Transaction Mode',
        dataIndex: 'transactionMode',
        key: 'transactionMode',
    },
    {
        title: 'Transaction Amount',
        dataIndex: 'transactionAmount',
        key: 'amount'
    },
    {
        title: 'Principal',
        dataIndex: 'principal',
        key: 'principal'
    },
    {
        title: 'Interest',
        dataIndex: 'interest',
        key: 'interest'
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'transactionStatus'
    },
    {
        title: 'Action',
        key: 'action',
        scopedSlots: { 
            customRender: 'action' 
        },
    },
]

export {
    operations, queryColumns, cancelColumns, actionColumns
}